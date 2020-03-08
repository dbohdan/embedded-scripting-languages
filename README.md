# Embedded scripting languages

The following is a list of reasonably mature open source embedded scripting languages to use in your application.  Stretching the definition of a scripting language, it also includes [Datalog](https://en.wikipedia.org/wiki/Datalog) implementations.

| Project name/link | Implementation language | GC | License | Notes |
|-------------------|-------------------------|----|---------|-------|
| [AbcDatalog](http://abcdatalog.seas.harvard.edu/) | Java | JVM's GC | 3-clause BSD | Implements Datalog. |
| [AngelScript](http://www.angelcode.com/angelscript/) | C++ | Ref. counting + cycle-detecting tracing GC | zlib | A statically typed curly brace language resembling C++ itself. |
| [Anko](https://github.com/mattn/anko/) | Go | Go's GC | MIT | Scriptable interpreter with syntax similar to Go. |
| [ArkScript](https://github.com/SuperFola/Ark) | C++ | None (resource release is destruction + optional manual MM) | MPL 2.0 | A small functional Lisp-like programming language.  Separate bytecode compiler and VM. |
| [Atlast](https://www.fourmilab.ch/atlast/) | C | None (manual MM) | Public domain | A dialect of Forth originally developed at Autodesk. |
| [BeanShell](https://github.com/beanshell/beanshell/) | Java | JVM's GC | Apache License 2.0 | An small, embeddable Java source code interpreter. Understands Java code with certain extensions like method closures. |
| [Boron](http://urlan.sourceforge.net/boron/) | C | Tracing | LGPL 3+ | An embeddable scripting language similar to Rebol. |
| [Cascalog](https://github.com/nathanmarz/cascalog) | Clojure | JVM's GC | Apache License 2.0 | Implements Datalog. |
| [ChaiScript](http://chaiscript.com/) | C++ | Ref. counting | 3-clause BSD | A header-only C++14 interpreter library. |
| [Chibi Scheme](https://github.com/ashinn/chibi-scheme) | C | Tracing | 3-clause BSD | Implements R7RS small. |
| [CHICKEN Scheme](https://call-cc.org/) | C | Tracing | 3-clause BSD | Implements R5RS (with some [changes](http://wiki.call-cc.org/man/4/Supported%20language)). R7RS support is a work in progress. [Examples of embedding CHICKEN](https://wiki.call-cc.org/embedding). |
| [Clasp](https://github.com/drmeister/clasp) | Common Lisp, C++ | MPS GC (Boehm-Weiser also supported) | LGPL 2+ | Full Common Lisp implementation well integrated with C++, using LLVM for the code generation, to integrate closely with C++ applications or libraries. |
| [Datalog](https://github.com/c-cube/datalog) (c-cube) | OCaml | OCaml's GC | 2-clause BSD | Implements Datalog. |
| [Datalog](https://github.com/fogfish/datalog) (fogfish) | Erlang | None (no collection inside interpreter state) | Apache License 2.0 | Implements Datalog. |
| [Datalog](http://datalog.sourceforge.net/) (MITRE Corporation) | C | Tracing (Lua's GC) | LGPL 2+ | Implements Datalog. It is implemented on top of Lua 5.3 and can be extended with Lua functions. |
| [Dhall](https://dhall-lang.org/) | Haskell | Haskell's GC | 3-clause BSD | A statically-typed functional configuration language.  Not Turing-complete.  Untrusted code: can't access the file system, can fetch Dhall libraries over HTTP(S) from static URLs (but libraries aren't allowed to access your data), can use up memory and CPU time for a DoS attack.  Has a work-in-progress Clojure and Ruby implementation. |
| [Duktape](http://duktape.org/) | C | Ref. counting + cycle-detecting tracing GC | MIT | Implements JavaScript E5/E5.1. |
| [DWScript](https://bitbucket.org/egrange/dwscript/) | Object Pascal (Delphi 2009 or later) | Ref. counting + cycle-detecting tracing GC | MPL 1.1, GPL 3 (JavaScript code generator) | [Description](https://www.delphitools.info/dwscript). A statically typed Delphi/Free Pascal-like language. Can compile to JavaScript. |
| [Dyon](https://github.com/pistondevelopers/dyon) | Rust | None (Rust-style [lifetimes](http://www.piston.rs/dyon-tutorial/lifetimes.html)) | Apache License 2.0 or MIT | Has optional, optimistic (succeed-by-default) static type checking. |
| [Embeddable Common Lisp](https://gitlab.com/embeddable-common-lisp/ecl) | Common Lisp, C | Boehm-Weiser GC | LGPL 2+ | Full Common Lisp implementation, available as a shared library `libecl.so` embeddable in any C, C++ or other application. |
| [ephp](https://github.com/bragful/ephp) | Erlang | None (no collection inside interpreter state) | LGPL 2.1 | Implements a subset of PHP 5.5. |
| [Erlog](https://git-hub.com/rvirding/erlog) | Erlang | None () | Apache License 2.0 | Interprets a subset of standard Prolog. |
| [Espruino](https://github.com/espruino/Espruino) | C | Tracing | MPL 2.0 | Implements a subset of JavaScript ES5 in a way suitable for embedded hardware with 8+ KiB RAM. |
| [Expr](https://github.com/antonmedv/expr) | Go | Go's GC | MIT | Compiles and evaluates statically-typed expressions. |
| [Flabbergast](https://github.com/flabbergast-config/flabbergast) | Java | JVM's GC | MIT | An object-oriented configuration language. |
| [FTH](http://fth.sourceforge.net) | C | Tracing | 2-clause BSD | A dialect of Forth with objects, hashes, regular expressions, and other extensions. |
| [GameMonkey Script](http://www.gmscript.com/) | C++ | Tracing | MIT | Comes with C bindings. Similar to Lua, multithreaded. |
| [gluon](https://github.com/gluon-lang/gluon) | Rust | Tracing | MIT | Statically typed. Inspired by Lua, Haskell, and OCaml. Each executing gluon thread gets a separate heap. |
| [Golog](https://github.com/mndrix/golog) | Go | Go's GC | MIT | Implements a subset of standard Prolog. |
| [Go-Lua](https://github.com/Shopify/go-lua) | Go | Go's GC | MIT | Implements a subset of Lua 5.2. |
| [GopherLua](https://github.com/yuin/gopher-lua) | Go | Go's GC | MIT | Implements Lua 5.1 with the added support for Go's channels. Lacks the debug hooks and several functions from the C version. |
| [Gravity](https://github.com/marcobambini/gravity) | C | Tracing | MIT | A class-based concurrent scripting language with a Swift-like syntax. |
| [Groovy](http://groovy-lang.org/) | Java | JVM's GC | Apache License 2.0 | A scripting language for the JVM. A large subset of Java is valid Groovy. [Integrating Groovy into applications](http://groovy-lang.org/integrating.html). |
| [GNU Guile](https://www.gnu.org/software/guile/) | C | [Boehm](https://www.gnu.org/software/guile/manual/html_node/Conservative-GC.html) | LGPL 3+ | ["Guile mostly implements R6RS."](https://www.gnu.org/software/guile/manual/guile.html#R6RS-Support) |
| [HashLink](https://hashlink.haxe.org/) | C | Tracing (lazy sweep) | MIT | A bytecode interpreter and a baseline JIT compiler (x86/x86\_64 only) for [Haxe](https://haxe.org/). |
| [Io](https://github.com/stevedekorte/io) | C | Tracing | 3-clause BSD | A prototype-based OO language. |
| [Janet](https://janet-lang.org/) | C | Tracing | MIT | A functional and imperative language with a Lisp syntax. |
| [JerryScript](https://github.com/jerryscript-project/jerryscript) | C | Tracing | Apache License 2.0 | A full ECMAScript 5.1 interpreter written in C99 and optimized for low memory consumption. Uses CMake. |
| [Jim Tcl](http://jim.tcl-lang.org/) | C | Tracing | 2-clause BSD | Largely compatible with Tcl 8.5 with its own additions. |
| [JRuby](http://jruby.org/) | Java | JVM's GC | Choice of EPL, GPL, and LGPL | An implementation of Ruby on the JVM. |
| [jsish](http://jsish.org/) | C | Ref. counting | MIT | A JavaScript ES 5.2+ interpreter. Internally structured after Tcl with an extensive C API. Features include subinterpreters, introspection, SQLite bindings, and a web framework with WebSocket support. The code is valid C and C++. |
| [Jsonnet](https://jsonnet.org/) | C++ | Tracing | Apache License 2.0 | A functional configuration language that extends JSON.  Untrusted code: can't access the file system or network, can use up memory and CPU time for a DoS attack.  Has [bindings](https://jsonnet.org/ref/bindings.html) for C, C++, Go, Python, and other languages, as well as a separate native Go implementation. |
| [JTcl](https://github.com/jtcl-project/jtcl) | Java | Ref. counting | Various BSD-like | Tcl 8.4 with some 8.5 features for the JVM. |
| [Jython](http://www.jython.org/) | Java | JVM's GC | PSFL (BSD-like) | An implementation of Python on the JVM. |
| [Kawa](https://www.gnu.org/software/kawa/) | Java | JVM's GC | MIT | R7RS. Supports the javax.script API. [Evaluating Scheme expressions from Java](https://www.gnu.org/software/kawa/Evaluating-Scheme-expressions-from-Java.html). |
| [Ketos](https://github.com/murarth/ketos) | Rust | None (no heap allocation)? | Apache License 2.0 | A functional Lisp. |
| [LIL](http://runtimeterror.com/tech/lil/) | C, Object Pascal (separate implementations) | None (no reference support) | zlib | A Tcl-like language incompatible with mainline Tcl. |
| [Lily](https://github.com/FascinatedBox/lily/) | C | Ref. counting + GC | MIT | A language focusing on expressiveness and safety. |
| [ljs](https://github.com/mingodad/ljs) | C | Tracing | MIT | Lua 5.3, Lua 5.1, and LuaJIT with a C/C++/Java/JavaScript syntax. Can convert Lua source code to ljs. |
| [Lua](http://lua.org/) | C | Tracing | MIT | The reference implementation of what is likely the world's most popular embedded scripting language. Fast for an interpreter. Allows you to precompile scripts to bytecode. Versions 5.1-5.3, which are the ones used today, are not fully compatible with each other. |
| [LuaJ](https://sourceforge.net/projects/luaj/) | Java | JVM's GC | MIT | A Lua 5.2 spec-compliant interpreter written in Java for JME and JSE. Complies Lua directly to JVM bytecode. |
| [LuaJIT](http://luajit.org/) | C | Tracing | MIT | Fully compatible with Lua 5.1. Has a built-in C FFI library. Very fast. |
| [luerl](https://github.com/rvirding/luerl) | Erlang | Tracing | Apache License 2.0 | An implementation of Lua 5.2 in pure Erlang with some features like `goto` absent. |
| [MicroPython](https://github.com/micropython/micropython) | C | Tracing | MIT | Implements the Python 3.4 syntax and some of the core datatypes. |
| [Molt](https://github.com/wduquette/molt) | Rust | Ref. counting | 3-clause BSD | A minimal Tcl implementation for Rust applications and libraries. |
| [Mond](https://github.com/Rohansi/Mond/) | C# | CLR's GC | MIT | A dynamically typed scripting language with generators, async, remote debugging, and a binding API. |
| [Mono](http://www.mono-project.com/docs/advanced/embedding/scripting/) | C | Tracing | MIT and other | Implements the [CLR](https://en.wikipedia.org/wiki/Common_Language_Runtime). |
| [mruby](https://github.com/mruby/mruby) | C | Tracing | MIT | A lightweight implementation of Ruby. Has a compile-time package manager. |
| [MuJS](https://mujs.com/) | C | Tracing | ISC | Implements JavaScript (ES5). Has a similar C interface to Lua.|
| [MY-BASIC](https://github.com/paladin-t/my_basic) | C | Ref. counting + cycle-detecting tracing GC | MIT | A Basic dialect with prototype-based OOP. |
| [Neko](http://nekovm.org/) | C | Boehm | MIT | The NekoVM is a target for several compilers, including [Haxe](http://haxe.org/). |
| [NetRexx](http://www.netrexx.org/) | Java | JVM's GC | ICU (BSD-like) | Implements Rexx. |
| [Never](https://github.com/never-lang/never) | C | Tracing | MIT | A statically typed functional programming language. |
| [njs](https://nginx.org/en/docs/njs/) | C | None (no collection performed) | 2-clause BSD | Implements a subset of ES5.1 with some ES6 extensions. |
| [ooRexx](http://www.oorexx.org/) | C++ | Tracing | CPL | Implements Rexx extended with objects. |
| [otto](https://github.com/robertkrimen/otto) | Go | Go's GC | MIT | Implements ES5 with [some limitations](https://github.com/robertkrimen/otto#caveat-emptor). |
| [Pascal Script](http://www.remobjects.com/ps.aspx) | Object Pascal | None (manual MM) | modified zlib/libpng-License with mandatory attribution | Statically typed. Implements "most of Object Pascal". Can't define new classes. |
| [Pawn](http://www.compuphase.com/pawn/pawn.htm) | C | None (no heap allocation) | Apache License 2.0 with a clause to explicitly permit static linking | A curly-brace language with a small-footprint VM. Represents data as 4/8-byte "cells". Compiles to CPU-specific bytecode. [More](https://wiki.alliedmods.net/Pawn_Tutorial#Language_Paradigms). |
| [pForth](http://www.softsynth.com/pforth/) | C | None (manual MM) | Public domain | A dialect of Forth. |
| [PicoC](https://github.com/zsaleeba/picoc) | C | None (manual MM) | 3-clause BSD | Statically typed. Interprets a subset of C. |
| [Python](https://www.python.org/) | C | Ref. counting + cycle-detecting tracing GC | PSFL (BSD-like) | [Embedding Python in Another Application](https://docs.python.org/3.5/extending/embedding.html). |
| [gmqcc/qcvm](https://github.com/graphitemaster/gmqcc) | C++ | None (no dynamic memory allocation) | MIT | A QuakeC compiler and VM. |
| [QuickJS](https://bellard.org/quickjs/) | C | Ref. counting + cycle-detecting tracing GC | MIT | A small embedded JavaScript interpreter that implements almost all of ES2019 and much of ES2020. |
| [Red](https://github.com/red/red) | Rebol, Red, Red/System | Tracing | 3-clause BSD, BSL | A descendant of Rebol.  Embeddable via [libRed](https://doc.red-lang.org/en/libred.html#_abstract).  Features a cross-platform native GUI system.  Intended to have low memory usage. |
| [Rhai](https://github.com/jonathandturner/rhai) | Rust | ? | MIT or Apache License 2.0 | An embedded scripting language for Rust inspired by ChaiScript. |
| [Ring](https://github.com/ring-lang/ring) | C | Tracing | MIT | An embeddable applications programming language with a large standard library and GIL-less multithreading. |
| [Ruby](https://www.ruby-lang.org/en/) | C | Tracing | Choice of 2-clause BSD, Ruby license, GPL 2 | An embeddable object-oriented scripting language. [Running Ruby in C](https://silverhammermba.github.io/emberb/embed/). |
| [s7](https://ccrma.stanford.edu/software/snd/snd/s7.html) | C | Tracing | 3-clause BSD | Implements a subset of R5RS/R7RS. Descended from TinyScheme. |
| [sci](https://github.com/borkdude/sci) | Clojure | host VM's GC | EPL | An interpreter for a subset of Clojure for Clojure and ClojureScript. |
| [SGScript](https://github.com/snake5/sgscript) | C | Ref. counting + tracing CG | MIT | [Features](http://www.sgscript.org/pages/advdocs/sgscript.docs.htm#Why-SGScript) include a built-in data serialization format, coroutines, class-based OOP, sandboxed evaluation, a built-in debugger and profiler. |
| [Shine](https://github.com/richardhundt/shine) | C | Tracing | MIT | A language based on Lua with additional safety and expressiveness features implemented as a fork of LuaJIT. |
| [SquiLu](https://github.com/mingodad/squilu) | C++ | Ref. counting | MIT, some extensions LGPL or GPL | A fork of [Squirrel](http://squirrel-lang.org/). Changes the syntax to accept a subset of JavaScript and C/C++. Implements Lua's features like string pattern matching and global table manipulation functions. Adds extensions for database access (SQLite3, MySQL, PostgreSQL), sockets, and other features. |
| [Squirrel](http://squirrel-lang.org/) | C++ | Ref. counting | MIT | A language inspired by Lua and JavaScript/Python. Has a Lua-like C++ API. Differentiates itself from Lua with the use of reference counting in place of Lua's tracing GC, a curly-brace syntax, built-in class-based OOP, and zero-indexed arrays. |
| [Starlark](https://github.com/google/starlark-go/) (Go) | Go | Go's GC | 3-clause BSD | A small dialect of Python for configuration.  Not Turing-complete.  Untrusted code: can't access the file system and network, can use up memory and CPU to perform a DoS attack.  [Spec](https://github.com/bazelbuild/starlark). |
| [Starlark](https://github.com/bazelbuild/bazel/tree/master/src/main/java/com/google/devtools/starlark) (Java) | Java | JVM's GC | Apache License 2.0 | Starlark for the JVM.  The original implementation. |
| [Starlark](https://github.com/google/starlark-rust/) (Rust) | Rust | ? | Apache License 2.0 | Starlark in Rust. |
| [Tcl](http://tcl-lang.org/) | C | Ref. counting | Tcl license (BSD-like) | An embeddable general-purpose scripting language with a rich C API. Has a cross-platform GUI toolkit called [Tk](https://wiki.tcl-lang.org/477). [How to embed Tcl in C applications](https://wiki.tcl-lang.org/2074). |
| [TinyScheme](http://tinyscheme.sourceforge.net/) | C | Tracing? | 3-clause BSD | Implements a subset of R5RS. |
| [Wirefilter](https://github.com/cloudflare/wirefilter) | Rust | None (no dynamic memory allocation) | An expression language for Wireshark-like filters. |
| [Wren](https://github.com/munificent/wren) | C | Tracing | MIT | A small class-based performance-oriented scripting language. |
| [zygomys](https://github.com/glycerine/zygomys) | Go | Go's GC | 2-clause BSD | An embedded Lisp for Go. Inspired by Clojure, but more oriented towards imperative programming. Has an infix syntax layer that looks like a subset of Go. |

# See also

* [Game scripting languages benchmarked](https://github.com/r-lyeh/scriptorium).
* [miniKanren](http://minikanren.org/#implementations) logic programming language implementations.
* [sol](https://github.com/ThePhD/sol2) &mdash; C++ bindings for Lua.

# Contributing

Your contributions are welcome! Please submit a pull request or create an issue to add a new language to the list. I am looking for language implementations that are either actively maintained or largely "done". The VM and the standard library, if any, must have a free (*libre*), non-copyleft or limited-scope copyleft license (e.g., the GNU LGPL or the MPL, but not the GNU GPL). If the main bytecode compiler is a separate program, it must have a license that doesn't automatically apply to its output. Optional add-ons may have any license: from strong copyleft to proprietary. A Datalog implementation must be able to parse Datalog source code; it must not be just an EDSL.

# License

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
