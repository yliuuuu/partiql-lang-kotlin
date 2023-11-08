package org.partiql.plugins.memory

import org.partiql.spi.BindingPath
import org.partiql.spi.connector.ConnectorObjectPath
import org.partiql.types.StaticType

class MemoryCatalog(
    private val catalogName: String,
    private val map: Map<String, StaticType>
) {
    operator fun get(key: String): StaticType? = map[key]

    public fun lookup(path: BindingPath): MemoryObject? {
        val kPath = ConnectorObjectPath(path.steps.map { it.loweredName })
        val k = kPath.steps.joinToString(".")
        if (this[k] != null) {
            return this[k]?.let { MemoryObject(kPath.steps, it) }
        } else {
            val candidatePath = this.map.keys.map { it.split(".") }
            val kPathIter = kPath.steps.listIterator()
            while (kPathIter.hasNext()) {
                val currKPath = kPathIter.next()
                candidatePath.forEach {
                    val match = mutableListOf<String>()
                    val candidateIterator = it.iterator()
                    while (candidateIterator.hasNext()) {
                        if (candidateIterator.next() == currKPath) {
                            match.add(currKPath)
                            val pathIteratorCopy = kPath.steps.listIterator(kPathIter.nextIndex())
                            candidateIterator.forEachRemaining {
                                val nextPath = pathIteratorCopy.next()
                                if (it != nextPath) {
                                    match.clear()
                                    return@forEachRemaining
                                }
                                match.add(it)
                            }
                        } else {
                            return@forEach
                        }
                    }
                    if (match.isNotEmpty()) {
                        return this[match.joinToString(".")]?.let { it1 ->
                            MemoryObject(
                                match,
                                it1
                            )
                        }
                    }
                }
            }
//            while (kPathIter.hasNext()) {
//                val currKPath = kPathIter.next()
//                candidatePath.forEach {
//                    val match = mutableListOf<String>()
//                    val candidateIterator = it.iterator()
//                    while (candidateIterator.hasNext()) {
//                        if (candidateIterator.next() == currKPath) {
//                            match.add(currKPath)
//                            val pathIteratorCopy = kPath.steps.listIterator(kPathIter.nextIndex())
//                            candidateIterator.forEachRemaining {
//                                val nextPath = pathIteratorCopy.next()
//                                if (it != nextPath) {
//                                    match.clear()
//                                    return@forEachRemaining
//                                }
//                                match.add(it)
//                            }
//                        }
//                    }
//                    if (match.isNotEmpty()) {
//                        return this[match.joinToString(".")]?.let { it1 -> MemoryObject(it1) }
//                    }
//                }
//            }
            return null
        }
    }

    companion object {
        fun of(name: String, vararg entities: Pair<String, StaticType>) = MemoryCatalog(name, mapOf(*entities))
    }

    class Provider {
        private val catalogs = mutableMapOf<String, MemoryCatalog>()

        operator fun get(path: String): MemoryCatalog = catalogs[path] ?: error("invalid catalog path")

        operator fun set(path: String, catalog: MemoryCatalog) {
            catalogs[path] = catalog
        }
    }
}
