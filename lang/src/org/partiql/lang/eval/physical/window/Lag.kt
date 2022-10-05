package org.partiql.lang.eval.physical.window

import org.partiql.lang.eval.ExprValue
import org.partiql.lang.eval.numberValue
import org.partiql.lang.eval.physical.EvaluatorState
import org.partiql.lang.eval.physical.operators.ValueExpression
import org.partiql.lang.eval.physical.operators.transferState

class Lag() : NavigationWindowFunction {
    override lateinit var currentPartition: List<Array<ExprValue>>
    override var currentPos: Int = 0
    override val signature: WindowFunctionSignature = WindowFunctionSignature(
        name = "lag"
    )

    override fun processRow(state: EvaluatorState, arguments: List<ValueExpression>, currentPos: Int): ExprValue {
        val (target, offset, default) = when (arguments.size) {

            1 -> listOf(arguments[0], null, null)

            2 -> listOf(arguments[0], arguments[1], null)

            3 -> listOf(arguments[0], arguments[1], arguments[2])

            else -> error("Wrong number of Parameter for Lag Function")
        }

        transferState(state, currentPartition[currentPos])

        val offsetValue = offset?.let {
            val numberValue = it.invoke(state).numberValue().toLong()
            // taking one step back here, do we even want to support non-constant value?
            if (numberValue >= 0) {
                numberValue
            } else {
                error("offset need to be non-negative integer")
            }
        } ?: 1L // default offset is one
        val defaultValue = default?.invoke(state) ?: state.valueFactory.nullValue
        val targetIndex = currentPos - offsetValue

        if (targetIndex >= 0 && targetIndex <= currentPartition.size - 1) {
            // TODO need to check if index is larger than MAX INT, but this may causes overflow already
            val targetRow = currentPartition[targetIndex.toInt()]
            transferState(state, targetRow)
            val res = target!!.invoke(state)
            return res
        } else {
            return defaultValue
        }
    }
}
