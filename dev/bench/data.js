window.BENCHMARK_DATA = {
  "lastUpdate": 1704490857744,
  "repoUrl": "https://github.com/yliuuuu/partiql-lang-kotlin",
  "entries": {
    "JMH Benchmark": [
      {
        "commit": {
          "author": {
            "email": "40360967+johnedquinn@users.noreply.github.com",
            "name": "John Ed Quinn",
            "username": "johnedquinn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4f0d2a285a29758b3816c320e69c70416b6e8b5",
          "message": "Publishes PartiQL Types (#1040)",
          "timestamp": "2023-04-12T11:49:38-07:00",
          "tree_id": "fd3b2b3e5f3df8d40f51629f95b59c40bb35ba8a",
          "url": "https://github.com/yliuuuu/partiql-lang-kotlin/commit/e4f0d2a285a29758b3816c320e69c70416b6e8b5"
        },
        "date": 1681351596520,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler15",
            "value": 156.45007852694783,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler30",
            "value": 287.4770490587241,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator15",
            "value": 535704.8801749998,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30",
            "value": 1092598.1903499998,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30WithData10",
            "value": 10969149.1822,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser15",
            "value": 264.7412126737597,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser30",
            "value": 482.0595331891154,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameCaseWhenThen",
            "value": 68.87462732321816,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery",
            "value": 85.66648702916581,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery01",
            "value": 425.5569397680265,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery02",
            "value": 661.9092699312166,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExceptUnionIntersectSixty",
            "value": 275.613149853809,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExec20Expressions",
            "value": 91.51814063340606,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameFromLet",
            "value": 69.16319540408674,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPattern",
            "value": 67.16525301066498,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPreFilters",
            "value": 114.09287337595352,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGroupLimit",
            "value": 91.97432181388858,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameLongFromSourceOrderBy",
            "value": 88.70941086976003,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameManyJoins",
            "value": 96.70274251631088,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedAggregates",
            "value": 152.13512525897028,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedParen",
            "value": 29.66523213919016,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNamePivot",
            "value": 103.68423357217564,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery15OrsAndLikes",
            "value": 296.3923282621105,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery30Plus",
            "value": 161.10412020782192,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFunc",
            "value": 70.33447386199734,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFuncInProjection",
            "value": 149.71561939603544,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryList",
            "value": 109.91449551859543,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryNestedSelect",
            "value": 918.899092687853,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuerySimple",
            "value": 26.827544900021035,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralJoins",
            "value": 38.66020511951298,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralProjections",
            "value": 100.76882987326405,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralSelect",
            "value": 279.44105059608506,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSimpleInsert",
            "value": 52.62041193389431,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeJoins",
            "value": 36.433643519843265,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeProjections",
            "value": 48.38738611421739,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeSelect",
            "value": 83.41550160989614,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameTimeZone",
            "value": 43.77955350055948,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery",
            "value": 462.57364123633096,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery01",
            "value": 1389.0512849396314,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameCaseWhenThen",
            "value": 39.87736575811277,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery",
            "value": 364.05672755508283,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery01",
            "value": 157.91095543313466,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExceptUnionIntersectSixty",
            "value": 279.61076442482965,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExec20Expressions",
            "value": 90.85872121226663,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameFromLet",
            "value": 59.037854713151134,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPattern",
            "value": 63.06834857523069,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPreFilters",
            "value": 106.50139879492522,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGroupLimit",
            "value": 59.02757780091268,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameLongFromSourceOrderBy",
            "value": 204.02626611805135,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameManyJoins",
            "value": 66.55160433238218,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedAggregates",
            "value": 135.34373878063624,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedParen",
            "value": 113.29395507079434,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNamePivot",
            "value": 94.7144302231208,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery15OrsAndLikes",
            "value": 241.12909438806724,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery30Plus",
            "value": 78.9687283677655,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFunc",
            "value": 182.72877583218377,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFuncInProjection",
            "value": 135.27262079014872,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryList",
            "value": 118.7407879611591,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryNestedSelect",
            "value": 202.52972219552433,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuerySimple",
            "value": 19.496952768015397,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralJoins",
            "value": 100.04057640616504,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralProjections",
            "value": 75.32703985033923,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralSelect",
            "value": 157.8189671713684,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSimpleInsert",
            "value": 34.10892493708381,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeJoins",
            "value": 34.624587003028054,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeProjections",
            "value": 28.1674478044973,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeSelect",
            "value": 50.54201857670516,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameTimeZone",
            "value": 14.37450235892608,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery",
            "value": 541.4402203695362,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery01",
            "value": 1550.660211697836,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLCompiler",
            "value": 13.326785868687143,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLEvaluator",
            "value": 3.046591474878887,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLParser",
            "value": 18.434681320359665,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "RCHowell@users.noreply.github.com",
            "name": "R. C. Howell",
            "username": "RCHowell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e3625f8f240a557d15633a6b578b5772b55ed8b",
          "message": "Clean up SqlDialect (#1265)",
          "timestamp": "2023-11-08T15:43:55-08:00",
          "tree_id": "ef6295605ce8fb682348268ff7fa439f466aeec6",
          "url": "https://github.com/yliuuuu/partiql-lang-kotlin/commit/7e3625f8f240a557d15633a6b578b5772b55ed8b"
        },
        "date": 1699509171765,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinAggFuncGroupingWithInterruptible",
            "value": 272.311757506367,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinAggFuncGroupingWithoutInterruptible",
            "value": 271.3506378599107,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinAggFuncWithInterruptible",
            "value": 249.31657733384455,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinAggFuncWithoutInterruptible",
            "value": 234.3861081273391,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinWithInterruptible",
            "value": 184.5013602826729,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinWithoutInterruptible",
            "value": 170.41739384589553,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinAggGroupWithInterruptible",
            "value": 13237543.20725,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinAggGroupWithoutInterruptible",
            "value": 13427826.555500004,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinAggWithInterruptible",
            "value": 5253448.03735,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinAggWithoutInterruptible",
            "value": 4901694.037700001,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinWithInterruptible",
            "value": 38.57897505319647,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinWithoutInterruptible",
            "value": 39.68347419927606,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinAggGroupWithInterruptible",
            "value": 13089926.6031,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinAggGroupWithoutInterruptible",
            "value": 13178624.93155,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinAggWithInterruptible",
            "value": 4937095.2413,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinAggWithoutInterruptible",
            "value": 5105936.33695,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinWithInterruptible",
            "value": 97489.40322409091,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinWithoutInterruptible",
            "value": 98472.10704454547,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler15",
            "value": 81.49882946788577,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler30",
            "value": 155.18789705019125,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator15",
            "value": 373132.0611499999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30",
            "value": 728977.596425,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30WithData10",
            "value": 7339666.4485,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser15",
            "value": 129.35318330548427,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser30",
            "value": 253.19124395477075,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameCaseWhenThen",
            "value": 32.808124326391024,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery",
            "value": 41.11775228163249,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery01",
            "value": 221.9251381289326,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery02",
            "value": 375.01064378678245,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExceptUnionIntersectSixty",
            "value": 156.67143870870444,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExec20Expressions",
            "value": 46.805465876834646,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameFromLet",
            "value": 33.970364983936804,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPattern",
            "value": 31.93708972492962,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPreFilters",
            "value": 57.99520129817078,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGroupLimit",
            "value": 38.69197617875748,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameLongFromSourceOrderBy",
            "value": 46.97085813041498,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameManyJoins",
            "value": 49.544242729086044,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedAggregates",
            "value": 86.06692075018145,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedParen",
            "value": 13.568765040427502,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNamePivot",
            "value": 52.258839293327675,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery15OrsAndLikes",
            "value": 152.67663409702817,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery30Plus",
            "value": 86.28337465372161,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFunc",
            "value": 37.65856809108288,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFuncInProjection",
            "value": 42.56253527380825,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryList",
            "value": 60.64667779343567,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryNestedSelect",
            "value": 536.3545342032512,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuerySimple",
            "value": 12.071895227999486,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralJoins",
            "value": 16.73108418063723,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralProjections",
            "value": 56.17092014907617,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralSelect",
            "value": 159.14777326514576,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSimpleInsert",
            "value": 23.196169431342128,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeJoins",
            "value": 16.64508244876881,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeProjections",
            "value": 22.588335182496827,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeSelect",
            "value": 41.39133533257051,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameTimeZone",
            "value": 18.877575143640932,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery",
            "value": 191.24422519902078,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery01",
            "value": 742.8253376001712,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameCaseWhenThen",
            "value": 18.904443973390272,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery",
            "value": 186.9008008597704,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery01",
            "value": 83.77790696137973,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExceptUnionIntersectSixty",
            "value": 163.67955491759125,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExec20Expressions",
            "value": 46.93395456282684,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameFromLet",
            "value": 27.087833956177512,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPattern",
            "value": 30.687323403244626,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPreFilters",
            "value": 54.600224694208144,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGroupLimit",
            "value": 26.24885761290175,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameLongFromSourceOrderBy",
            "value": 97.79555681176278,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameManyJoins",
            "value": 34.01188671508264,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedAggregates",
            "value": 72.62028290976328,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedParen",
            "value": 62.32298009292357,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNamePivot",
            "value": 48.25035681963091,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery15OrsAndLikes",
            "value": 126.97323553430519,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery30Plus",
            "value": 47.18709015836177,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFunc",
            "value": 99.12644051773617,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFuncInProjection",
            "value": 64.25735205775115,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryList",
            "value": 55.80900968003256,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryNestedSelect",
            "value": 105.0048094176517,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuerySimple",
            "value": 8.35242964428881,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralJoins",
            "value": 55.097725220520466,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralProjections",
            "value": 40.98750925960994,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralSelect",
            "value": 76.55871997669459,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSimpleInsert",
            "value": 14.775132801929862,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeJoins",
            "value": 14.661811083178407,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeProjections",
            "value": 13.216908646709163,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeSelect",
            "value": 24.50474121660735,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameTimeZone",
            "value": 6.120437686438784,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery",
            "value": 319.33758514402814,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery01",
            "value": 850.4025205581374,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLCompiler",
            "value": 7.025881235755563,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLEvaluator",
            "value": 1.8066076656987426,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLParser",
            "value": 7.7392473255856675,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameCaseWhenThen",
            "value": 32.57815651351872,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameComplexQuery",
            "value": 40.4958220269814,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameComplexQuery01",
            "value": 219.0999332290568,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameComplexQuery02",
            "value": 377.0480193161583,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameExceptUnionIntersectSixty",
            "value": 155.53351778034775,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameExec20Expressions",
            "value": 43.41498665711992,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameFromLet",
            "value": 32.28993243122239,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameGraphPattern",
            "value": 31.169344158279035,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameGraphPreFilters",
            "value": 55.612916769510505,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameGroupLimit",
            "value": 39.67743182581971,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameLongFromSourceOrderBy",
            "value": 47.02351340648263,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameManyJoins",
            "value": 49.12138448725722,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameNestedAggregates",
            "value": 81.96344151570884,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameNestedParen",
            "value": 13.282242997752448,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNamePivot",
            "value": 51.2000679941677,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQuery15OrsAndLikes",
            "value": 155.2215429298162,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQuery30Plus",
            "value": 85.53041173283341,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQueryFunc",
            "value": 37.99856294222242,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQueryFuncInProjection",
            "value": 42.213373128975284,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQueryList",
            "value": 57.62159137192084,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQueryNestedSelect",
            "value": 556.605983039031,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQuerySimple",
            "value": 11.690826367488482,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSeveralJoins",
            "value": 16.2682581934885,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSeveralProjections",
            "value": 53.2036903446705,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSeveralSelect",
            "value": 153.38727544963461,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSimpleInsert",
            "value": 22.508885128907224,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSomeJoins",
            "value": 15.93285577627736,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSomeProjections",
            "value": 21.18635535892422,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSomeSelect",
            "value": 40.00241488512217,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameTimeZone",
            "value": 18.598364426943697,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameVeryLongQuery",
            "value": 195.84387283451827,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameVeryLongQuery01",
            "value": 752.7445945692136,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameCaseWhenThen",
            "value": 24.011535816886376,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameComplexQuery01",
            "value": 121.932752377158,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameExceptUnionIntersectSixty",
            "value": 261.3476155727327,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameExec20Expressions",
            "value": 63.11572785502402,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameFromLet",
            "value": 38.9701018952935,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameGraphPattern",
            "value": 47.73944560920417,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameGraphPreFilters",
            "value": 81.15039725897063,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameGroupLimit",
            "value": 28.99445436304299,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameLongFromSourceOrderBy",
            "value": 120.71460860186505,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameManyJoins",
            "value": 40.98321184692729,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameNestedAggregates",
            "value": 98.14374205388148,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameNestedParen",
            "value": 64.34011230613243,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNamePivot",
            "value": 61.86511872374545,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQuery15OrsAndLikes",
            "value": 190.01455943004586,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQuery30Plus",
            "value": 59.41345104365594,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQueryFunc",
            "value": 113.88917637115692,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQueryFuncInProjection",
            "value": 77.9542173015068,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQueryList",
            "value": 69.50472089137864,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQueryNestedSelect",
            "value": 138.43279195091426,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQuerySimple",
            "value": 12.333599791040324,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSeveralJoins",
            "value": 77.25760686912004,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSeveralProjections",
            "value": 65.18570265462577,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSeveralSelect",
            "value": 114.05811270226698,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSimpleInsert",
            "value": 22.36456662719899,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSomeJoins",
            "value": 20.32067711566944,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSomeProjections",
            "value": 18.820025187112698,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSomeSelect",
            "value": 35.7054129348159,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameTimeZone",
            "value": 7.63648242147527,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameVeryLongQuery",
            "value": 465.2793524927786,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameVeryLongQuery01",
            "value": 1136.9392550203052,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "johqunn@amazon.com",
            "name": "John Ed Quinn",
            "username": "johnedquinn"
          },
          "committer": {
            "email": "40360967+johnedquinn@users.noreply.github.com",
            "name": "John Ed Quinn",
            "username": "johnedquinn"
          },
          "distinct": true,
          "id": "dae1ab391d4e46904d7f0512c761337d0f43d2d6",
          "message": "Prepares v0.14.2-SNAPSHOT development",
          "timestamp": "2024-01-03T10:50:11-08:00",
          "tree_id": "a8b0b9d93827fc810ad571e24a020d523a367c9a",
          "url": "https://github.com/yliuuuu/partiql-lang-kotlin/commit/dae1ab391d4e46904d7f0512c761337d0f43d2d6"
        },
        "date": 1704490856294,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinAggFuncGroupingWithInterruptible",
            "value": 270.980431962626,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinAggFuncGroupingWithoutInterruptible",
            "value": 265.44004122507357,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinAggFuncWithInterruptible",
            "value": 239.5689943330054,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinAggFuncWithoutInterruptible",
            "value": 252.6132670417992,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinWithInterruptible",
            "value": 179.94659322486456,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.compileCrossJoinWithoutInterruptible",
            "value": 171.36625065972476,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinAggGroupWithInterruptible",
            "value": 12948975.295650002,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinAggGroupWithoutInterruptible",
            "value": 13057344.577900002,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinAggWithInterruptible",
            "value": 4936095.267349999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinAggWithoutInterruptible",
            "value": 5009649.829200001,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinWithInterruptible",
            "value": 38.312569339454186,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.evalCrossJoinWithoutInterruptible",
            "value": 38.791983050336206,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinAggGroupWithInterruptible",
            "value": 13120886.045500001,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinAggGroupWithoutInterruptible",
            "value": 12850458.566549998,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinAggWithInterruptible",
            "value": 4948977.806299998,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinAggWithoutInterruptible",
            "value": 4930700.3702,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinWithInterruptible",
            "value": 95899.8091181818,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.CompilerInterruptionBenchmark.iterCrossJoinWithoutInterruptible",
            "value": 90875.22536628788,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler15",
            "value": 91.47458488293104,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler30",
            "value": 159.2937702955328,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator15",
            "value": 389259.8896333332,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30",
            "value": 732391.5573749999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30WithData10",
            "value": 7344071.588800001,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser15",
            "value": 132.61347879147004,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser30",
            "value": 262.0734960948417,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameCaseWhenThen",
            "value": 33.56280527375642,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery",
            "value": 42.10832204694245,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery01",
            "value": 224.5844154825184,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery02",
            "value": 388.75684635773155,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExceptUnionIntersectSixty",
            "value": 159.4133466203446,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExec20Expressions",
            "value": 46.57927314818021,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameFromLet",
            "value": 34.29984555141262,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPattern",
            "value": 32.40372251402085,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPreFilters",
            "value": 57.189928013425074,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGroupLimit",
            "value": 39.194684529812164,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameLongFromSourceOrderBy",
            "value": 47.686017263799684,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameManyJoins",
            "value": 51.13982505087479,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedAggregates",
            "value": 84.10852790999482,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedParen",
            "value": 13.722220063389182,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNamePivot",
            "value": 51.84934351870129,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery15OrsAndLikes",
            "value": 154.70986476300578,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery30Plus",
            "value": 86.22905994235032,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFunc",
            "value": 38.892628583326456,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFuncInProjection",
            "value": 42.62336909637943,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryList",
            "value": 59.24061454607835,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryNestedSelect",
            "value": 551.4690504111985,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuerySimple",
            "value": 12.155470571618794,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralJoins",
            "value": 17.312751611954077,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralProjections",
            "value": 58.40607504446321,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralSelect",
            "value": 159.37382129555613,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSimpleInsert",
            "value": 22.979273607793342,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeJoins",
            "value": 16.884299673788373,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeProjections",
            "value": 22.867991096913613,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeSelect",
            "value": 41.8017688297764,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameTimeZone",
            "value": 19.44904555398168,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery",
            "value": 191.27390394191323,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery01",
            "value": 752.3246071374092,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameCaseWhenThen",
            "value": 18.601524565713795,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery",
            "value": 192.4248761981084,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery01",
            "value": 87.67425304810283,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExceptUnionIntersectSixty",
            "value": 162.43697778159134,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExec20Expressions",
            "value": 45.79016887114675,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameFromLet",
            "value": 27.804815258613267,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPattern",
            "value": 30.77499103995106,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPreFilters",
            "value": 51.897793341188695,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGroupLimit",
            "value": 25.747467386412485,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameLongFromSourceOrderBy",
            "value": 99.14706831731391,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameManyJoins",
            "value": 32.753493685452014,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedAggregates",
            "value": 74.58684211102556,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedParen",
            "value": 64.26532480338003,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNamePivot",
            "value": 50.562866202609996,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery15OrsAndLikes",
            "value": 133.03580887464307,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery30Plus",
            "value": 46.61212652902962,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFunc",
            "value": 97.98766540062717,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFuncInProjection",
            "value": 64.73764218853468,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryList",
            "value": 57.054405210960134,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryNestedSelect",
            "value": 106.891375317797,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuerySimple",
            "value": 8.566231836643391,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralJoins",
            "value": 53.484400211647404,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralProjections",
            "value": 39.439316348084795,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralSelect",
            "value": 77.12597055449795,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSimpleInsert",
            "value": 15.28560676863285,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeJoins",
            "value": 14.681400088763791,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeProjections",
            "value": 13.111976085375147,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeSelect",
            "value": 24.666985084021285,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameTimeZone",
            "value": 6.018724517061108,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery",
            "value": 296.7618575532076,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery01",
            "value": 817.6183759201923,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLCompiler",
            "value": 6.761504788703874,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLEvaluator",
            "value": 1.8885259381864656,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLParser",
            "value": 7.8173138298940845,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameCaseWhenThen",
            "value": 33.714070212696214,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameComplexQuery",
            "value": 42.50186440986444,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameComplexQuery01",
            "value": 222.0215027732801,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameComplexQuery02",
            "value": 379.9487161671253,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameExceptUnionIntersectSixty",
            "value": 156.83862937982954,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameExec20Expressions",
            "value": 44.630814821559795,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameFromLet",
            "value": 33.03500172872905,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameGraphPattern",
            "value": 31.619599075990312,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameGraphPreFilters",
            "value": 56.4035157600588,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameGroupLimit",
            "value": 40.45156559724914,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameLongFromSourceOrderBy",
            "value": 47.48966369131527,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameManyJoins",
            "value": 48.90331323700068,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameNestedAggregates",
            "value": 86.63215860756792,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameNestedParen",
            "value": 13.517389613473103,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNamePivot",
            "value": 52.03276353034611,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQuery15OrsAndLikes",
            "value": 156.78386075665122,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQuery30Plus",
            "value": 85.18044867968999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQueryFunc",
            "value": 38.230182448289774,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQueryFuncInProjection",
            "value": 43.8075141182028,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQueryList",
            "value": 58.029144430213805,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQueryNestedSelect",
            "value": 545.8286985917526,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameQuerySimple",
            "value": 11.92593842572085,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSeveralJoins",
            "value": 16.35410973095663,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSeveralProjections",
            "value": 52.48750351447833,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSeveralSelect",
            "value": 155.9969100060249,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSimpleInsert",
            "value": 22.146405665848356,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSomeJoins",
            "value": 16.351281343178037,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSomeProjections",
            "value": 21.875535547792744,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameSomeSelect",
            "value": 40.49730062128474,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameTimeZone",
            "value": 19.09485036799132,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameVeryLongQuery",
            "value": 190.01605834475632,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseFailNameVeryLongQuery01",
            "value": 749.123416006083,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameCaseWhenThen",
            "value": 24.656583869251698,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameComplexQuery",
            "value": 251.62364043464999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameComplexQuery01",
            "value": 122.04711910914041,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameExceptUnionIntersectSixty",
            "value": 271.52978399940673,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameExec20Expressions",
            "value": 64.05723440956191,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameFromLet",
            "value": 39.996480874342964,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameGraphPattern",
            "value": 45.502515889648784,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameGraphPreFilters",
            "value": 81.59801673027823,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameGroupLimit",
            "value": 28.397126502660303,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameLongFromSourceOrderBy",
            "value": 118.17054033910362,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameManyJoins",
            "value": 41.94801051144898,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameNestedAggregates",
            "value": 101.90527016117706,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameNestedParen",
            "value": 64.67015599606391,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNamePivot",
            "value": 61.77032465943665,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQuery15OrsAndLikes",
            "value": 192.37613704831628,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQuery30Plus",
            "value": 58.94384673320944,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQueryFunc",
            "value": 114.84620879909001,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQueryFuncInProjection",
            "value": 79.76500153638099,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQueryList",
            "value": 68.4986282881334,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQueryNestedSelect",
            "value": 142.02156809825752,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameQuerySimple",
            "value": 12.072886378455696,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSeveralJoins",
            "value": 83.23411688528941,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSeveralProjections",
            "value": 62.09216668336287,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSeveralSelect",
            "value": 114.83847695412116,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSimpleInsert",
            "value": 22.378165106863854,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSomeJoins",
            "value": 20.27578384930741,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSomeProjections",
            "value": 18.84294778524174,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameSomeSelect",
            "value": 36.74807405421679,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameTimeZone",
            "value": 7.559225305610388,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameVeryLongQuery",
            "value": 463.294772867774,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLParserBenchmark.parseNameVeryLongQuery01",
            "value": 1146.8440638829074,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          }
        ]
      }
    ]
  }
}