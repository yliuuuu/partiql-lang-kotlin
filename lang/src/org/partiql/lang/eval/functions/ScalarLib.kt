/*
 * Copyright 2022 Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at:
 *
 *      http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

package org.partiql.lang.eval.functions

import com.amazon.ion.Timestamp
import org.partiql.lang.eval.ExprFunction
import org.partiql.lang.eval.ExprValue
import org.partiql.lang.eval.ExprValueFactory
import org.partiql.lang.eval.bigDecimalValue
import org.partiql.lang.eval.booleanValue
import org.partiql.lang.eval.bytesValue
import org.partiql.lang.eval.dateValue
import org.partiql.lang.eval.intValue
import org.partiql.lang.eval.numberValue
import org.partiql.lang.eval.stringValue
import org.partiql.lang.eval.timeValue
import org.partiql.lang.eval.timestampValue
import org.partiql.lang.types.FunctionSignature
import org.partiql.lang.types.StaticType
import java.lang.reflect.Method
import java.math.BigDecimal
import java.time.LocalDate

abstract class ScalarLib(val valueFactory: ExprValueFactory) {

    abstract val namespace: String

    private val methods: Map<String, ScalarExprFunction> by lazy {
        val methods = mutableMapOf<String, ScalarExprFunction>()
        this.javaClass.declaredMethods
            .filter { it.isAnnotationPresent(ScalarFunction::class.java) }
            .forEach { method ->
                val meta = method.getAnnotation(ScalarFunction::class.java)
                meta.names.forEach { name ->
                    val signature = method.signature(name, meta.returns.toStaticType())
                    methods[name] = ScalarExprFunction(
                        signature,
                        signature.mapping(),
                        function = { args -> method.invoke(this, *args.toTypedArray()) }
                    )
                }
            }
        methods
    }

    val signatures: Map<String, FunctionSignature> = methods.mapValues { entry -> entry.value.signature }

    val functions: List<ExprFunction> = methods.values.toList()

    private fun Method.signature(name: String, returnType: StaticType) = FunctionSignature(
        name,
        requiredParameters = this.parameters.map { it.getAnnotation(Type::class.java).t.toStaticType() },
        returnType,
    )

    // This shouldn't go here
    private fun String.toStaticType(): StaticType = when (this) {
        "missing" -> StaticType.MISSING
        "null" -> StaticType.NULL
        "any" -> StaticType.ANY
        "bool" -> StaticType.BOOL
        "int2" -> StaticType.INT2
        "int4" -> StaticType.INT4
        "int8" -> StaticType.INT8
        "int" -> StaticType.INT
        "float" -> StaticType.FLOAT
        "decimal" -> StaticType.DECIMAL
        "numeric" -> StaticType.NUMERIC
        "date" -> StaticType.DATE
        "time" -> StaticType.TIME
        "timestamp" -> StaticType.TIMESTAMP
        "symbol" -> StaticType.SYMBOL
        "string" -> StaticType.STRING
        "text" -> StaticType.TEXT
        "clob" -> StaticType.CLOB
        "blob" -> StaticType.BLOB
        "list" -> StaticType.LIST
        "sexp" -> StaticType.SEXP
        "struct" -> StaticType.STRUCT
        "bag" -> StaticType.BAG
        else -> throw IllegalArgumentException("type '$this' is not defined")
    }

    private fun FunctionSignature.mapping() = ScalarExprFunction.Mapping(
        inputs = requiredParameters.map { it.inMapping() },
        output = returnType.outMapping(),
    )

    /**
     * Mapping parameters to Java values for use in scalar functions
     */
    private fun StaticType.inMapping(): (ExprValue) -> Any? = when (this) {
        StaticType.MISSING -> { _ -> valueFactory.missingValue }
        StaticType.NULL -> { _ -> valueFactory.nullValue }
        StaticType.ANY -> { e -> e }
        StaticType.BOOL -> { e -> e.booleanValue() }
        StaticType.INT2,
        StaticType.INT4,
        StaticType.INT8,
        StaticType.INT -> { e -> e.intValue() }
        StaticType.FLOAT -> { e -> e.numberValue().toDouble() }
        StaticType.DECIMAL -> { e -> e.bigDecimalValue() }
        StaticType.NUMERIC -> { e -> e.numberValue() }
        StaticType.DATE -> { e -> e.dateValue() }
        StaticType.TIME -> { e -> e.timeValue() }
        StaticType.TIMESTAMP -> { e -> e.timestampValue() }
        StaticType.SYMBOL,
        StaticType.STRING,
        StaticType.TEXT -> { e -> e.stringValue() }
        StaticType.BLOB,
        StaticType.CLOB -> { e -> e.bytesValue() }
        else -> throw IllegalArgumentException("Unhandled static type mapping ${this.javaClass.simpleName}")
    }

    private fun StaticType.outMapping(): (Any?) -> ExprValue = when (this) {
        StaticType.MISSING -> { _ -> valueFactory.missingValue }
        StaticType.NULL -> { _ -> valueFactory.nullValue }
        StaticType.BOOL -> { v -> valueFactory.newBoolean(v as Boolean) }
        StaticType.INT2,
        StaticType.INT4,
        StaticType.INT8,
        StaticType.INT -> { v -> valueFactory.newInt(v as Int) }
        StaticType.FLOAT -> { v -> valueFactory.newFloat(v as Double) }
        StaticType.DECIMAL -> { v -> valueFactory.newDecimal(v as BigDecimal) }
        StaticType.DATE -> { v -> valueFactory.newDate(v as LocalDate) }
        StaticType.TIME -> { v -> valueFactory.newTime(v as org.partiql.lang.eval.time.Time) }
        StaticType.TIMESTAMP -> { v -> valueFactory.newTimestamp(v as Timestamp) }
        StaticType.SYMBOL -> { v -> valueFactory.newSymbol(v as String) }
        StaticType.TEXT,
        StaticType.STRING -> { v -> valueFactory.newString(v as String) }
        StaticType.CLOB -> { v -> valueFactory.newClob(v as ByteArray) }
        StaticType.BLOB -> { v -> valueFactory.newBlob(v as ByteArray) }
        else -> throw IllegalArgumentException("Unhandled static type mapping ${this.javaClass.simpleName}")
    }
}
