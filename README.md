# Embedded scripting languages

The following is a list of reasonably mature open source embedded scripting languages to use in your application.

| Project name/link | Implementation language | GC | License | Notes |
|-------------------|-------------------------|----|---------|-------|
| [AngelScript](http://www.angelcode.com/angelscript/) | C++ | Ref. counting | zlib | |
| [ChaiScript](http://chaiscript.com/) | C++ | Ref. counting | 3-clause BSD | |
| [Chibi Scheme](https://github.com/ashinn/chibi-scheme) | C | Tracing | 3-clause BSD | Implements R7RS small. |
| [Clasp](https://github.com/drmeister/clasp) | Common Lisp, C++ | MPS GC (Boehm-Weiser also supported) | LGPL 2+ | Full Common Lisp implementation well integrated with C++, using LLVM for the code generation, to integrate closely with C++ applications or libraries. |
| [Duktape](http://duktape.org/) | C | Tracing | MIT | Implements JavaScript E5/E5.1. |
| [Embeddable Common Lisp](https://gitlab.com/embeddable-common-lisp/ecl) | Common Lisp, C | Boehm-Weiser GC | LGPL 2+ | Full Common Lisp implementation, available as a shared library libecl.so embeddable in any C, C++ or other application. |
| [GNU Guile](https://www.gnu.org/software/guile/) | C | [Boehm](https://www.gnu.org/software/guile/manual/html_node/Conservative-GC.html) | LGPL 3+ | |
| [Jim Tcl](http://jim.tcl-lang.org/) | C | Tracing | 2-clause BSD | Largely compatible with Tcl 8.5 with its own additions. |
| [lil](http://runtimelegend.com:3110/badsector/lil) | C, Object Pascal (separate implementations) | ? | zlib | A Tcl-like language incompatible with mainline Tcl. |
| [Lua](http://lua.org/) | C | Tracing | MIT | |
| [Mono](http://www.mono-project.com/docs/advanced/embedding/scripting/) | C | Tracing | MIT and other | Implements the [CLR](https://en.wikipedia.org/wiki/Common_Language_Runtime). |
| [mruby](https://github.com/mruby/mruby) | C | Tracing | MIT | |
| [Pascal Script](http://www.remobjects.com/ps.aspx) | Object Pascal | Manual MM | Custom non-copyleft | Implements "most of Object Pascal". |
| [Pawn](http://www.compuphase.com/pawn/pawn.htm) | C | n/a (no heap allocation) | Apache License 2.0 with a static linking clause to explicitly permit static linking | |
| [Python](https://www.python.org/) | C | Ref. counting + cycle-detecting GC | PSFL (BSD-like) | [Embedding Python in Another Application](https://docs.python.org/3.5/extending/embedding.html). |
| [Squirrel](http://squirrel-lang.org/) | C++ | Ref. counting | MIT | |
| [Tcl](http://tcl-lang.org/) | C | Ref. counting | Tcl license (BSD-like) | |
| [TinyScheme](http://tinyscheme.sourceforge.net/) | C | Tracing? | 3-clause BSD | Implements a subset of R5RS. |

# Contributing

Your contributions are welcome! Please submit a pull request or create an issue to add a new language to the list.

# License

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
