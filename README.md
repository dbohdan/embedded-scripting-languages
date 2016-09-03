# Embedded scripting languages

The following is a list of reasonably mature open source embedded scripting languages to use in your application.

| Project name/link | Implementation language | GC | License | Notes |
|-------------------|-------------------------|----|---------|-------|
| [AngelScript](http://www.angelcode.com/angelscript/) | C++ | Ref. counting | zlib | A curly brace language resembling C++ itself. |
| [ChaiScript](http://chaiscript.com/) | C++ | Ref. counting | 3-clause BSD | |
| [Chibi Scheme](https://github.com/ashinn/chibi-scheme) | C | Tracing | 3-clause BSD | Implements R7RS small. |
| [Clasp](https://github.com/drmeister/clasp) | Common Lisp, C++ | MPS GC (Boehm-Weiser also supported) | LGPL 2+ | Full Common Lisp implementation well integrated with C++, using LLVM for the code generation, to integrate closely with C++ applications or libraries. |
| [Duktape](http://duktape.org/) | C | Tracing | MIT | Implements JavaScript E5/E5.1. |
| [DWScript](https://bitbucket.org/egrange/dwscript/) | Object Pascal (Delphi 2009 or later) | Ref. counting + cycle-detecting GC | MPL 1.1, GPLv3 (JavaScript code generator) | [Description](https://www.delphitools.info/dwscript). A general purpose Delphi/Free Pascal-like language. Can compile to JavaScript. |
| [Embeddable Common Lisp](https://gitlab.com/embeddable-common-lisp/ecl) | Common Lisp, C | Boehm-Weiser GC | LGPL 2+ | Full Common Lisp implementation, available as a shared library libecl.so embeddable in any C, C++ or other application. |
| [Espruino](https://github.com/espruino/Espruino) | C | Tracing | MPL 2.0 | Implements a subset of JavaScript ES5 in a way suitable for embedded hardware with 8+ KiB RAM. |
| [Go-Lua](https://github.com/Shopify/go-lua) | Go | Tracing (Go's GC) | MIT | Implements a subset of Lua 5.2. |
| [GopherLua](https://github.com/yuin/gopher-lua) | Go | Tracing (Go's own GC) | MIT | Implements Lua 5.1 with the added support for Go's channels. Lacks the debug hooks and several functions from the C version. |
| [GNU Guile](https://www.gnu.org/software/guile/) | C | [Boehm](https://www.gnu.org/software/guile/manual/html_node/Conservative-GC.html) | LGPL 3+ | |
| [Jim Tcl](http://jim.tcl-lang.org/) | C | Tracing | 2-clause BSD | Largely compatible with Tcl 8.5 with its own additions. |
| [JTcl](https://github.com/jtcl-project/jtcl) | Java | Ref. counting | Various BSD-like | Tcl 8.4 with some 8.5 features for the JVM. |
| [LIL](http://runtimeterror.com/tech/lil/) | C, Object Pascal (separate implementations) | None (no reference support) | zlib | A Tcl-like language incompatible with mainline Tcl. |
| [Lua](http://lua.org/) | C | Tracing | MIT | |
| [luerl](https://github.com/rvirding/luerl) | Erlang | Tracing | An implementation of Lua 5.2 in pure Erlang with some features like `goto` absent. |
| [LuaJ](https://sourceforge.net/projects/luaj/) | Java | Tracing (JVM's GC) | MIT | A Lua 5.2 spec-compliant interpreter written in Java for JME and JSE. Complies Lua directly to JVM bytecode. |
| [LuaJIT](http://luajit.org/) | C | Tracing | MIT | Fully compatible with Lua 5.1. Has a uilt-in C FFI library. Very fast. |
| [Mono](http://www.mono-project.com/docs/advanced/embedding/scripting/) | C | Tracing | MIT and other | Implements the [CLR](https://en.wikipedia.org/wiki/Common_Language_Runtime). |
| [mruby](https://github.com/mruby/mruby) | C | Tracing | MIT | |
| [otto](https://github.com/robertkrimen/otto) | Go | Tracing (Go's GC) | MIT | Implements ES5 with [some limitations](https://github.com/robertkrimen/otto#caveat-emptor). |
| [Pascal Script](http://www.remobjects.com/ps.aspx) | Object Pascal | Manual MM | Custom non-copyleft | Implements "most of Object Pascal". Can't define new classes. |
| [Pawn](http://www.compuphase.com/pawn/pawn.htm) | C | None (no heap allocation) | Apache License 2.0 with a static linking clause to explicitly permit static linking | |
| [Python](https://www.python.org/) | C | Ref. counting + cycle-detecting GC | PSFL (BSD-like) | [Embedding Python in Another Application](https://docs.python.org/3.5/extending/embedding.html). |
| [Squirrel](http://squirrel-lang.org/) | C++ | Ref. counting | MIT | |
| [Tcl](http://tcl-lang.org/) | C | Ref. counting | Tcl license (BSD-like) | |
| [TinyScheme](http://tinyscheme.sourceforge.net/) | C | Tracing? | 3-clause BSD | Implements a subset of R5RS. |
| [Wren](https://github.com/munificent/wren) | C | Tracing | MIT | A small class-based performance-oriented scripting language. |

# Contributing

Your contributions are welcome! Please submit a pull request or create an issue to add a new language to the list.

# License

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
