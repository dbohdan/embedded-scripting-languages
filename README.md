# Embedded scripting languages

The following is a list of reasonably mature open source embedded scripting languages to use in your application.

| Project name/link | Implementation language | GC | License | Notes |
|-------------------|-------------------------|----|---------|-------|
| [AngelScript](http://www.angelcode.com/angelscript/) | C++ | Ref. counting | zlib | A statically typed curly brace language resembling C++ itself. |
| [ChaiScript](http://chaiscript.com/) | C++ | Ref. counting | 3-clause BSD | A header-only C++14 interpreter library. |
| [Chibi Scheme](https://github.com/ashinn/chibi-scheme) | C | Tracing | 3-clause BSD | Implements R7RS small. |
| [CHICKEN Scheme](https://call-cc.org/) | C | Tracing | 3-clause BSD | Implements R5RS (with some [changes](http://wiki.call-cc.org/man/4/Supported%20language)). R7RS support is a work in progress. [Examples of embedding CHICKEN](https://wiki.call-cc.org/embedding). |
| [Clasp](https://github.com/drmeister/clasp) | Common Lisp, C++ | MPS GC (Boehm-Weiser also supported) | LGPL 2+ | Full Common Lisp implementation well integrated with C++, using LLVM for the code generation, to integrate closely with C++ applications or libraries. |
| [Duktape](http://duktape.org/) | C | Ref. counting + cycle-detecting tracing GC | MIT | Implements JavaScript E5/E5.1. |
| [DWScript](https://bitbucket.org/egrange/dwscript/) | Object Pascal (Delphi 2009 or later) | Ref. counting + cycle-detecting tracing GC | MPL 1.1, GPL 3 (JavaScript code generator) | [Description](https://www.delphitools.info/dwscript). A statically typed Delphi/Free Pascal-like language. Can compile to JavaScript. |
| [Embeddable Common Lisp](https://gitlab.com/embeddable-common-lisp/ecl) | Common Lisp, C | Boehm-Weiser GC | LGPL 2+ | Full Common Lisp implementation, available as a shared library `libecl.so` embeddable in any C, C++ or other application. |
| [Espruino](https://github.com/espruino/Espruino) | C | Tracing | MPL 2.0 | Implements a subset of JavaScript ES5 in a way suitable for embedded hardware with 8+ KiB RAM. |
| [GameMonkey Script](http://www.gmscript.com/) | C++ | Tracing | MIT | Comes with C bindings. Similar to Lua, multithreaded. |
| [Go-Lua](https://github.com/Shopify/go-lua) | Go | Tracing (Go's GC) | MIT | Implements a subset of Lua 5.2. |
| [GopherLua](https://github.com/yuin/gopher-lua) | Go | Tracing (Go's GC) | MIT | Implements Lua 5.1 with the added support for Go's channels. Lacks the debug hooks and several functions from the C version. |
| [GNU Guile](https://www.gnu.org/software/guile/) | C | [Boehm](https://www.gnu.org/software/guile/manual/html_node/Conservative-GC.html) | LGPL 3+ | ["Guile mostly implements R6RS."](https://www.gnu.org/software/guile/manual/guile.html#R6RS-Support) |
| [Io](https://github.com/stevedekorte/io) | C | Tracing | 3-clause BSD | A prototype-based OO language. |
| [JerryScript](https://github.com/jerryscript-project/jerryscript) | C | Tracing | Apache License 2.0 | A full ECMAScript 5.1 interpreter written in C99 and optimized for low memory consumption. Uses CMake. |
| [Jim Tcl](http://jim.tcl-lang.org/) | C | Tracing | 2-clause BSD | Largely compatible with Tcl 8.5 with its own additions. |
| [JTcl](https://github.com/jtcl-project/jtcl) | Java | Ref. counting | Various BSD-like | Tcl 8.4 with some 8.5 features for the JVM. |
| [Kawa](https://www.gnu.org/software/kawa/) | Java | JVM's GC | MIT | R7RS. Supports the javax.script API. [Evaluating Scheme expressions from Java](https://www.gnu.org/software/kawa/Evaluating-Scheme-expressions-from-Java.html). |
| [LIL](http://runtimeterror.com/tech/lil/) | C, Object Pascal (separate implementations) | None (no reference support) | zlib | A Tcl-like language incompatible with mainline Tcl. |
| [Lily](https://github.com/FascinatedBox/lily/) | C | Ref. counting + GC | MIT | A language focusing on expressiveness and safety. |
| [Lua](http://lua.org/) | C | Tracing | MIT | The reference implementation of what is likely the world's most popular embedded scripting language. Fast for an interpreter. Allows you to precompile scripts to bytecode. Versions 5.1-5.3, which are the ones used today, are not fully compatible with each other. |
| [luerl](https://github.com/rvirding/luerl) | Erlang | Tracing | Apache License 2.0 | An implementation of Lua 5.2 in pure Erlang with some features like `goto` absent. |
| [LuaJ](https://sourceforge.net/projects/luaj/) | Java | JVM's GC | MIT | A Lua 5.2 spec-compliant interpreter written in Java for JME and JSE. Complies Lua directly to JVM bytecode. |
| [LuaJIT](http://luajit.org/) | C | Tracing | MIT | Fully compatible with Lua 5.1. Has a built-in C FFI library. Very fast. |
| [MicroPython](https://github.com/micropython/micropython) | C | Tracing | MIT | Implements the Python 3.4 syntax and some of the core datatypes. |
| [Mono](http://www.mono-project.com/docs/advanced/embedding/scripting/) | C | Tracing | MIT and other | Implements the [CLR](https://en.wikipedia.org/wiki/Common_Language_Runtime). |
| [mruby](https://github.com/mruby/mruby) | C | Tracing | MIT | A lightweight implementation of Ruby. Has a compile-time package manager. |
| [MY-BASIC](https://github.com/paladin-t/my_basic) | C | Ref. counting + cycle-detecting tracing GC | MIT | A Basic dialect with prototype-based OOP. |
| [Neko](http://nekovm.org/) | C | Boehm | MIT | The NekoVM is a target for several compilers, including [Haxe](http://haxe.org/). |
| [otto](https://github.com/robertkrimen/otto) | Go | Tracing (Go's GC) | MIT | Implements ES5 with [some limitations](https://github.com/robertkrimen/otto#caveat-emptor). |
| [Pascal Script](http://www.remobjects.com/ps.aspx) | Object Pascal | None (manual MM) | Custom non-copyleft | Statically typed. Implements "most of Object Pascal". Can't define new classes. |
| [Pawn](http://www.compuphase.com/pawn/pawn.htm) | C | None (no heap allocation) | Apache License 2.0 with a clause to explicitly permit static linking | A curly-brace language with a small-footprint VM. Represents data as 4/8-byte "cells". Compiles to CPU-specific bytecode. [More](https://wiki.alliedmods.net/Pawn_Tutorial#Language_Paradigms). |
| [pForth](http://www.softsynth.com/pforth/) | C | None (manual MM) | Public domain | A dialect of Forth. |
| [PicoC](https://github.com/zsaleeba/picoc) | C | None (manual MM) | 3-clause BSD | Statically typed. Interprets a subset of C. |
| [Python](https://www.python.org/) | C | Ref. counting + cycle-detecting tracing GC | PSFL (BSD-like) | [Embedding Python in Another Application](https://docs.python.org/3.5/extending/embedding.html). |
| [gmqcc/qcvm](https://github.com/graphitemaster/gmqcc) | C++ | None (no dynamic memory allocation) | MIT | A QuakeC compiler and VM. |
| [s7](https://ccrma.stanford.edu/software/snd/snd/s7.html) | C | Tracing | 3-clause BSD | Implements a subset of R5RS/R7RS. Descended from TinyScheme. |
| [SGScript](https://github.com/snake5/sgscript) | C | Ref. counting + tracing CG | MIT | [Features](http://www.sgscript.org/pages/advdocs/sgscript.docs.htm#Why-SGScript) include a built-in data serialization format, coroutines, class-based OOP, sandboxed evaluation, a built-in debugger and profiler. |
| [Squirrel](http://squirrel-lang.org/) | C++ | Ref. counting | MIT | A language inspired by Lua and JavaScript/Python. Has a Lua-like C++ API. Differentiates itself from Lua with the use of reference counting in place of Lua's tracing GC, a curly-brace syntax, built-in class-based OOP, and zero-indexed arrays. |
| [Tcl](http://tcl-lang.org/) | C | Ref. counting | Tcl license (BSD-like) | An embeddable general-purpose scripting language with a rich C API. Has a cross-platform GUI toolkit called [Tk](https://tcl.wiki/477). [How to embed Tcl in C applications](https://tcl.wiki/2074). |
| [TinyScheme](http://tinyscheme.sourceforge.net/) | C | Tracing? | 3-clause BSD | Implements a subset of R5RS. |
| [Wren](https://github.com/munificent/wren) | C | Tracing | MIT | A small class-based performance-oriented scripting language. |

# See also

* [Game scripting languages benchmarked](https://github.com/r-lyeh/scriptorium).

# Contributing

Your contributions are welcome! I am looking for language implementations that are either actively maintained or largely "done" and have a free (*libre*) license. Non-copyleft licenses are preferred, but limited-scope copyleft (e.g., the LGPL for a VM or the GPL for a bytecode compiler that isn't needed at runtime) is fine. Please submit a pull request or create an issue to add a new language to the list.

# License

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
