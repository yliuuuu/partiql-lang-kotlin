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

import org.partiql.lang.eval.EvaluationSession
import org.partiql.lang.eval.ExprFunction
import org.partiql.lang.eval.ExprValue
import org.partiql.lang.types.FunctionSignature

@Retention(AnnotationRetention.RUNTIME)
@Target(AnnotationTarget.FUNCTION)
annotation class ScalarFunction(
    val names: Array<String>,
    val description: String = "",
    val returns: String,
)

@Retention(AnnotationRetention.RUNTIME)
@Target(AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FUNCTION)
annotation class Type(val t: String)

class ScalarExprFunction(
    override val signature: FunctionSignature,
    private val mapping: Mapping,
    private val function: (List<Any?>) -> Any?,
) : ExprFunction {

    override fun callWithRequired(session: EvaluationSession, required: List<ExprValue>): ExprValue {
        val args = mapping.inputs.mapIndexed { i, m -> m.invoke(required[i]) }
        val res = function.invoke(args)
        return mapping.output.invoke(res)
    }

    class Mapping(
        val inputs: List<(ExprValue) -> Any?>,
        val output: (Any?) -> ExprValue,
    )
}
