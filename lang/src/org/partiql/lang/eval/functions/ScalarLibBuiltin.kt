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

import org.partiql.lang.eval.ExprValueFactory
import java.lang.Double.NEGATIVE_INFINITY
import java.lang.Double.NaN
import java.lang.Double.POSITIVE_INFINITY
import kotlin.math.ceil

const val BUILTIN = "BUILTIN"

class ScalarLibBuiltin(valueFactory: ExprValueFactory) : ScalarLib(valueFactory) {

    override val namespace: String = BUILTIN

    @ScalarFunction(
        names = ["char_length", "character_length"],
        description = "Returns the number of characters in $0",
        returns = "int",
    )
    fun charLength(@Type("int") str: String): Int = str.length

    @ScalarFunction(
        names = ["lowercase"],
        description = "Converts $0 to lowercase",
        returns = "string",
    )
    fun lower(@Type("string") str: String): String = str.toLowerCase()

    @ScalarFunction(
        names = ["uppercase"],
        description = "Converts $0 to uppercase",
        returns = "string",
    )
    fun upper(@Type("string") str: String): String = str.toUpperCase()

    @ScalarFunction(
        names = ["bit_length"],
        description = "Returns the number of bits in $0",
        returns = "int",
    )
    fun bitLength(@Type("string") str: String): Int = str.toByteArray().size * 8

    @ScalarFunction(
        names = ["octet_length"],
        description = "Returns the number of bytes in $0",
        returns = "int",
    )
    fun octetLength(@Type("string") str: String): Int = str.toByteArray().size

    @ScalarFunction(
        names = ["substring"],
        description = "Returns the substring of $0 starting $1 and continuing for $2 characters",
        returns = "string",
    )
    fun substring(@Type("string") str: String, @Type("int") start: Int, @Type("int") length: Int): String {
        if (length <= 0 || str.isEmpty()) {
            return ""
        }
        return str.substring(start, start + length)
    }

    @ScalarFunction(
        names = ["concat"],
        description = "Concatenates $0 and $1",
        returns = "string",
    )
    fun concat(@Type("string") lhs: String, @Type("string") rhs: String): String = lhs + rhs

    @ScalarFunction(
        names = ["trim_leading"],
        description = "Trim whitespace from start of string",
        returns = "string",
    )
    fun trimLeading(@Type("string") str: String): String = str.trimStart()

    @ScalarFunction(
        names = ["trim_trailing"],
        description = "Trim whitespace from end of string",
        returns = "string",
    )
    fun trimTrailing(@Type("string") str: String): String = str.trimEnd()

    @ScalarFunction(
        names = ["trim"],
        description = "Trim whitespace from both sides of a string",
        returns = "string",
    )
    fun trim(@Type("string") str: String): String = str.trim()

    @ScalarFunction(
        names = ["ceil", "ceiling"],
        description = "Returns the smallest integer greater than or equal to $0",
        returns = "float",
    )
    fun ceiling(@Type("numeric") n: Number): Double = when (n) {
        NaN -> Double.NaN
        POSITIVE_INFINITY, NEGATIVE_INFINITY -> n.toDouble()
        else -> ceil(n.toDouble())
    }
}
