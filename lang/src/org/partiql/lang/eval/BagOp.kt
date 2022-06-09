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

package org.partiql.lang.eval

import org.partiql.lang.domains.PartiqlAst
import org.partiql.lang.eval.BagOp.Operator

class BagOp(
    private val quantifier: PartiqlAst.SetQuantifier,
    private val valueFactory: ExprValueFactory,
    private val operator: Operator,
) {

    fun evaluate(lhs: ExprValue, rhs: ExprValue): ExprValue {
        val result = operator.evaluate(coerceToBag(lhs), coerceToBag(rhs))
        return when (quantifier) {
            is PartiqlAst.SetQuantifier.All -> valueFactory.newBag(result)
            is PartiqlAst.SetQuantifier.Distinct -> valueFactory.newBag(result.filter(createUniqueExprValueFilter()))
        }
    }

    fun interface Operator {
        fun evaluate(lhs: Sequence<ExprValue>, rhs: Sequence<ExprValue>): Sequence<ExprValue>
    }

    companion object {

        val union = Operator { lhs, rhs ->
            lhs + rhs
        }

        val intersect = Operator { lhs, rhs ->
            val probeSet = rhs.map { it.ionValue }.toSet()
            lhs.filter { probeSet.contains(it.ionValue) }
        }

        val except = Operator { lhs, rhs ->
            val probeSet = rhs.map { it.ionValue }.toSet()
            lhs.filter { !probeSet.contains(it.ionValue) }
        }
    }

    /**
     * Coerces PartiQL values as described in 0001-RFC-BAG-OPERATORS
     */
    private fun coerceToBag(exprValue: ExprValue): Sequence<ExprValue> = when (exprValue.type) {
        ExprValueType.MISSING, ExprValueType.NULL -> emptySequence()
        ExprValueType.BOOL,
        ExprValueType.INT,
        ExprValueType.FLOAT,
        ExprValueType.DECIMAL,
        ExprValueType.DATE,
        ExprValueType.TIMESTAMP,
        ExprValueType.TIME,
        ExprValueType.SYMBOL,
        ExprValueType.STRING,
        ExprValueType.CLOB,
        ExprValueType.BLOB -> {
            sequenceOf(exprValue)
        }
        ExprValueType.SEXP -> {
            // TODO define coercion
            sequenceOf(exprValue)
        }
        ExprValueType.STRUCT -> {
            // TODO define coercion
            sequenceOf(exprValue)
        }
        ExprValueType.LIST -> {
            // TODO coerce to BAG
            exprValue.asSequence()
        }
        ExprValueType.BAG -> exprValue.asSequence()
    }
}
