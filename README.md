# Embedded scripting languages

The following is a list of reasonably mature open source [embedded scripting languages](https://en.wikipedia.org/wiki/Scripting_language) to use in your application.  Stretching the definition of a scripting language, it also includes [Datalog](https://en.wikipedia.org/wiki/Datalog) implementations.  Items with a strong copyleft license (like the GNU GPL) that will apply to the rest of your code are **highlighted** as a warning.

## Contents

- [Embedded scripting languages](#embedded-scripting-languages)
  * [Sorted alphabetically](#sorted-alphabetically)
  * [Sorted by implementation language](#sorted-by-implementation-language)
  * [See also](#see-also)
  * [Contributing](#contributing)
  * [License](#license)
  * [Disclosure](#disclosure)

## Sorted alphabetically

| Project name/link | Implementation language | GC | License | Notes |
|-------------------|-------------------------|----|---------|-------|
| [AbcDatalog](http://abcdatalog.seas.harvard.edu/) | Java | JVM&#39;s GC | 3-clause BSD | Implements Datalog. |
| [AngelScript](http://www.angelcode.com/angelscript/) | C++ | Ref. counting + cycle-detecting tracing GC | zlib | A statically typed curly brace language resembling C++ itself. |
| [Animula](https://gitlab.com/hardenedlinux/animula) | Scheme | Tracing | Compiler **GPL 3+** while VM is LGPL 3+ | An optimizing compiler and VM for embedded systems. R7RS. |
| [Anko](https://github.com/mattn/anko/) | Go | Go&#39;s GC | MIT | Scriptable interpreter with syntax similar to Go. |
| [ArkScript](https://github.com/SuperFola/Ark) | C++ | None (resource release is destruction + optional manual MM) | MPL 2.0 | A small functional Lisp-like programming language. Separate bytecode compiler and VM. |
| [Atlast](https://www.fourmilab.ch/atlast/) | C | None (manual MM) | Public domain | A dialect of Forth originally developed at Autodesk. |
| [BeanShell](https://github.com/beanshell/beanshell/) | Java | JVM&#39;s GC | Apache License 2.0 | An small, embeddable Java source code interpreter. Understands Java code with certain extensions like method closures. |
| [Boron](http://urlan.sourceforge.net/boron/) | C | Tracing | LGPL 3+ | An embeddable scripting language similar to Rebol. |
| [Cascalog](https://github.com/nathanmarz/cascalog) | Clojure | JVM&#39;s GC | Apache License 2.0 | Implements Datalog. |
| [ChaiScript](http://chaiscript.com/) | C++ | Ref. counting | 3-clause BSD | A header-only C++14 interpreter library. |
| [Chibi Scheme](https://github.com/ashinn/chibi-scheme) | C | Tracing | 3-clause BSD | Implements R7RS small. |
| [CHICKEN Scheme](https://call-cc.org/) | C | Tracing | 3-clause BSD | Implements R5RS (with some [changes](http://wiki.call-cc.org/man/4/Supported%20language)). R7RS support is a work in progress. [Examples of embedding CHICKEN](https://wiki.call-cc.org/embedding). |
| [CircuitPython](https://github.com/adafruit/circuitpython) | C | Tracing | MIT | A fork of MicroPython, designed for API uniformity across many microcontrollers. |
| [Clasp](https://github.com/drmeister/clasp) | Common Lisp, C++ | MPS GC (Boehm-Weiser also supported) | LGPL 2+ | Full Common Lisp implementation well integrated with C++, using LLVM for the code generation, to integrate closely with C++ applications or libraries. |
| [daScript](https://dascript.org/) | C++ | None (region-based + manual MM?) | 3-clause BSD | A statically-typed [performance-oriented](https://dascript.org/#performance) scripting language. |
| [Datalog (c-cube)](https://github.com/c-cube/datalog) | OCaml | OCaml&#39;s GC | 2-clause BSD | Implements Datalog. |
| [Datalog (fogfish)](https://github.com/fogfish/datalog) | Erlang | None (no collection inside interpreter state) | Apache License 2.0 | Implements Datalog. |
| [Datalog (MITRE Corporation)](http://datalog.sourceforge.net/) | C | Tracing (Lua&#39;s GC) | LGPL 2+ | Implements Datalog. It is implemented on top of Lua 5.3 and can be extended with Lua functions. |
| [Dhall](https://dhall-lang.org/) | Haskell | Haskell&#39;s GC | 3-clause BSD | A statically-typed functional configuration language. Not Turing-complete. Untrusted code: can't access the file system, can fetch Dhall libraries over HTTP(S) from static URLs (but libraries aren't allowed to access your data), can use up memory and CPU time for a DoS attack. Has a work-in-progress Clojure and Ruby implementation. |
| [Duktape](http://duktape.org/) | C | Ref. counting + cycle-detecting tracing GC | MIT | Implements JavaScript E5/E5.1. |
| [DWScript](https://bitbucket.org/egrange/dwscript/) | Object Pascal (Delphi 2009 or later) | Ref. counting + cycle-detecting tracing GC | MPL 1.1, GPL 3 (JavaScript code generator) | [Description](https://www.delphitools.info/dwscript). A statically typed Delphi/Free Pascal-like language. Can compile to JavaScript. |
| [Dyon](https://github.com/pistondevelopers/dyon) | Rust | None (Rust-style [lifetimes](http://www.piston.rs/dyon-tutorial/lifetimes.html)) | Apache License 2.0 or MIT | Has optional, optimistic (succeed-by-default) static type checking. |
| [Embeddable Common Lisp](https://gitlab.com/embeddable-common-lisp/ecl) | Common Lisp, C | Boehm-Weiser GC | LGPL 2+ | Full Common Lisp implementation, available as a shared library `libecl.so` embeddable in any C, C++ or other application. |
| [ephp](https://github.com/bragful/ephp) | Erlang | None (no collection inside interpreter state) | LGPL 2.1 | Implements a subset of PHP 5.5. |
| [Erlog](https://github.com/rvirding/erlog) | Erlang | None () | Apache License 2.0 | Interprets a subset of standard Prolog. |
| [Espruino](https://github.com/espruino/Espruino) | C | Tracing | MPL 2.0 | Implements a subset of JavaScript ES5 in a way suitable for embedded hardware with 8+ KiB RAM. |
| [Expr](https://github.com/antonmedv/expr) | Go | Go&#39;s GC | MIT | Compiles and evaluates statically-typed expressions. |
| [Falcon](http://falconpl.org/) | C++ | Tracing | **GPL 2** or custom | The GC is pluggable. |
| [FTH](http://fth.sourceforge.net) | C | Tracing | 2-clause BSD | A dialect of Forth with objects, hashes, regular expressions, and other extensions. |
| [GameMonkey Script](http://www.gmscript.com/) | C++ | Tracing | MIT | Comes with C bindings. Similar to Lua, multithreaded. |
| [Gentee](https://github.com/gentee/gentee/) | Go | Go&#39;s GC | MIT | Statically typed. |
| [gluon](https://github.com/gluon-lang/gluon) | Rust | Tracing | MIT | Statically typed. Inspired by Lua, Haskell, and OCaml. Each executing gluon thread gets a separate heap. |
| [gmqcc/qcvm](https://github.com/graphitemaster/gmqcc) | C++ | None (no dynamic memory allocation) | MIT | A QuakeC compiler and VM. |
| [GNU Guile](https://www.gnu.org/software/guile/) | C | [Boehm](https://www.gnu.org/software/guile/manual/html_node/Conservative-GC.html) | LGPL 3+ | ["Guile mostly implements R6RS."](https://www.gnu.org/software/guile/manual/guile.html#R6RS-Support) |
| [Goja](https://github.com/dop251/goja) | Go | Go&#39;s GC | MIT | Implements ECMAScript 5.1. Better standard compliance and performance than otto. |
| [Golog](https://github.com/mndrix/golog) | Go | Go&#39;s GC | MIT | Implements a subset of standard Prolog. |
| [Go-Lua](https://github.com/Shopify/go-lua) | Go | Go&#39;s GC | MIT | Implements a subset of Lua 5.2. |
| [GopherLua](https://github.com/yuin/gopher-lua) | Go | Go&#39;s GC | MIT | Implements Lua 5.1 with the added support for Go's channels. Lacks the debug hooks and several functions from the C version. |
| [Gravity](https://github.com/marcobambini/gravity) | C | Tracing | MIT | A class-based concurrent scripting language with a Swift-like syntax. |
| [Groovy](http://groovy-lang.org/) | Java | JVM&#39;s GC | Apache License 2.0 | A scripting language for the JVM. A large subset of Java is valid Groovy. [Integrating Groovy into applications](http://groovy-lang.org/integrating.html). |
| [HAC](https://hacadacompiler.sourceforge.io/) | Ada | None (stack only) | MIT | HAC implements a subset of the Ada language. Thus, it can share sources with the embedding application. |
| [HashLink](https://hashlink.haxe.org/) | C | Tracing (lazy sweep) | MIT | A bytecode interpreter and a baseline JIT compiler (x86/x86\_64 only) for [Haxe](https://haxe.org/). |
| [Io](https://github.com/stevedekorte/io) | C | Tracing | 3-clause BSD | A prototype-based OO language. |
| [Janet](https://janet-lang.org/) | C | Tracing | MIT | A functional and imperative language with a Lisp syntax. |
| [JerryScript](https://github.com/jerryscript-project/jerryscript) | C | Tracing | Apache License 2.0 | A full ECMAScript 5.1 interpreter written in C99 and optimized for low memory consumption. Uses CMake. |
| [Jim Tcl](http://jim.tcl-lang.org/) | C | Tracing | 2-clause BSD | Largely compatible with Tcl 8.5 with its own additions. |
| [Jinx](https://jamesboer.github.io/Jinx/) | C++17 | Ref. counting | MIT | Designed for use in realtime applications such as video games. |
| [JRuby](http://www.jruby.org/) | Java | JVM&#39;s GC | Choice of EPL, GPL, and LGPL | An implementation of Ruby on the JVM. |
| [jsish](http://jsish.org/) | C | Ref. counting | MIT | A JavaScript ES 5.2+ interpreter. Internally structured after Tcl with an extensive C API. Features include subinterpreters, introspection, SQLite bindings, and a web framework with WebSocket support. The code is valid C and C++. |
| [Jsonnet](https://jsonnet.org/) | C++ | Tracing | Apache License 2.0 | A functional configuration language that extends JSON. Untrusted code: can't access the file system or network, can use up memory and CPU time for a DoS attack. Has [bindings](https://jsonnet.org/ref/bindings.html) for C, C++, Go, Python, and other languages, as well as a separate native Go implementation. |
| [JTcl](https://github.com/jtcl-project/jtcl) | Java | Ref. counting | Various BSD-like | Tcl 8.4 with some 8.5 features for the JVM. |
| [Jython](http://www.jython.org/) | Java | JVM&#39;s GC | PSFL (BSD-like) | An implementation of Python on the JVM. |
| [Kawa](https://www.gnu.org/software/kawa/) | Java | JVM&#39;s GC | MIT | R7RS. Supports the javax.script API. [Evaluating Scheme expressions from Java](https://www.gnu.org/software/kawa/Evaluating-Scheme-expressions-from-Java.html). |
| [Ketos](https://github.com/murarth/ketos) | Rust | None (no heap allocation)? | Apache License 2.0 | A functional Lisp. |
| [Libfawk](http://repo.hu/projects/libfawk/) | C | Ref. counting | 3-clause BSD | A multi-language VM. Includes compilers for three languages: Fawk (Awk dialect), Fbas (Basic dialect), and Fpas (Pascal dialect). |
| [Libmawk](http://repo.hu/projects/libmawk/) | C | Ref. counting | **GPL 2** | Implements Awk. A fork of mawk 1.3 restructured for embedding. |
| [LIL](http://runtimeterror.com/tech/lil/) | C, Object Pascal (separate implementations) | None (no reference support) | zlib | A Tcl-like language incompatible with mainline Tcl. |
| [Lily](https://github.com/FascinatedBox/lily/) | C | Ref. counting + GC | MIT | A language focusing on expressiveness and safety. |
| [ljs](https://github.com/mingodad/ljs) | C | Tracing | MIT | Lua 5.3, Lua 5.1, and LuaJIT with a C/C++/Java/JavaScript syntax. Can convert Lua source code to ljs. |
| [Lua](http://lua.org/) | C | Tracing | MIT | The reference implementation of what is likely the world's most popular embedded scripting language. Allows you to precompile scripts to bytecode. Versions 5.1-5.3, which are the ones used today, are not fully compatible with each other. |
| [LuaJ](https://sourceforge.net/projects/luaj/) | Java | JVM&#39;s GC | MIT | A Lua 5.2 spec-compliant interpreter written in Java for JME and JSE. Complies Lua directly to JVM bytecode. |
| [LuaJIT](http://luajit.org/) | C | Tracing | MIT | Fully compatible with Lua 5.1. Has a built-in C FFI library. [Performance comparison](https://luajit.org/performance.html). |
| [Lua-ML](https://github.com/lindig/lua-ml) | OCaml | OCaml&#39;s GC | 2-clause BSD | Embeddable Lua 2.5 reimplementation that integrates with OCaml type and module system. It's possible to extend or even replace the standard library with your own modules. |
| [Luau](https://luau-lang.org/) | C | Tracing | MIT | Roblox [fork of Lua 5.1](https://luau-lang.org/why) as a scripting language for games to support a gradual type system as well as limiting the set of standard libraries exposed to the users and implements extra sandboxing features to be able to run unprivileged code. Whenever possible, Luau aims to be backwards-compatible with Lua 5.1 and at the same time to incorporate features from later revisions of Lua. |
| [luerl](https://github.com/rvirding/luerl) | Erlang | Tracing | Apache License 2.0 | An implementation of Lua 5.2 in pure Erlang with some features like `goto` absent. |
| [MicroPython](https://github.com/micropython/micropython) | C | Tracing | MIT | Implements the Python 3.4 syntax and some of the core datatypes. |
| [Molt](https://github.com/wduquette/molt) | Rust | Ref. counting | 3-clause BSD | A minimal Tcl implementation for Rust applications and libraries. |
| [Mond](https://github.com/Rohansi/Mond/) | C# | CLR&#39;s GC | MIT | A dynamically typed scripting language with generators, async, remote debugging, and a binding API. |
| [Mono](http://www.mono-project.com/docs/advanced/embedding/scripting/) | C | Tracing | MIT and other | Implements the [CLR](https://en.wikipedia.org/wiki/Common_Language_Runtime). |
| [MoonSharp](https://www.moonsharp.org/) | C# | CLR&#39;s GC | 3-clause BSD and other | CLR Based Lua implementation that is 99% compatible with Lua 5.2 |
| [mruby](https://github.com/mruby/mruby) | C | Tracing | MIT | A lightweight implementation of Ruby. Has a compile-time package manager. |
| [mruby/c](https://github.com/mrubyc/mrubyc) | C | Ref. counting | 3-clause BSD | An even smaller implementation of Ruby for microcontrollers with limited memory. |
| [MuJS](https://mujs.com/) | C | Tracing | ISC | Implements JavaScript (ES5). Has a similar C interface to Lua. |
| [MY-BASIC](https://github.com/paladin-t/my_basic) | C | Ref. counting + cycle-detecting tracing GC | MIT | A Basic dialect with prototype-based OOP. |
| [Neko](http://nekovm.org/) | C | Boehm | MIT | The NekoVM is a target for several compilers, including [Haxe](http://haxe.org/). |
| [NetRexx](http://www.netrexx.org/) | Java | JVM&#39;s GC | ICU (BSD-like) | Implements Rexx. |
| [Never](https://github.com/never-lang/never) | C | Tracing | MIT | A statically typed functional programming language. |
| [njs](https://nginx.org/en/docs/njs/) | C | None (no collection performed) | 2-clause BSD | Implements a subset of ES5.1 with some ES6 extensions. |
| [ooRexx](http://www.oorexx.org/) | C++ | Tracing | CPL | Implements Rexx extended with objects. |
| [otto](https://github.com/robertkrimen/otto) | Go | Go&#39;s GC | MIT | Implements ES5 with [some limitations](https://github.com/robertkrimen/otto#caveat-emptor). |
| [Pascal Script](http://www.remobjects.com/ps.aspx) | Object Pascal | None (manual MM) | modified zlib/libpng-License with mandatory attribution | Statically typed. Implements "most of Object Pascal". Can't define new classes. |
| [Pawn](http://www.compuphase.com/pawn/pawn.htm) | C | None (no heap allocation) | Apache License 2.0 with a clause to explicitly permit static linking | A curly-brace language with a small-footprint VM. Represents data as 4/8-byte "cells". Compiles to CPU-specific bytecode. [More](https://wiki.alliedmods.net/Pawn_Tutorial#Language_Paradigms). |
| [Perl](https://www.perl.org/) | C | Ref. counting | Artistic License or GPL 3 | [Embedding Perl in Another Application](https://perldoc.perl.org/perlembed) |
| [pForth](http://www.softsynth.com/pforth/) | C | None (manual MM) | Public domain | A dialect of Forth. |
| [PH7](https://github.com/symisc/PH7) | C | Ref. counting | **SPL** or proprietary | Implements a subset of PHP 5.3 with some changes like native UTF-8 support. |
| [PicoC](https://github.com/zsaleeba/picoc) | C | None (manual MM) | 3-clause BSD | Statically typed. Interprets a subset of C. |
| [Picol](https://chiselapp.com/user/dbohdan/repository/picol/) | C | None (no reference support) | 2-clause BSD | A header-only library interpreter for a limited dialect of Tcl. |
| [pocketlang](https://github.com/ThakeeNathees/pocketlang) | C | Tracing | MIT | A small language syntactically similar to Ruby. [Embedding examples](https://github.com/ThakeeNathees/pocketlang/tree/master/tests/native/). [Performance comparison](https://github.com/ThakeeNathees/pocketlang#performance). |
| [Python](https://www.python.org/) | C | Ref. counting + cycle-detecting tracing GC | PSFL (BSD-like) | [Embedding Python in Another Application](https://docs.python.org/3.5/extending/embedding.html). |
| [QuickJS](https://bellard.org/quickjs/) | C | Ref. counting + cycle-detecting tracing GC | MIT | A small embedded JavaScript interpreter that implements almost all of ES2019 and much of ES2020. |
| [Quirrel](https://github.com/GaijinEntertainment/quirrel) | C++ | Ref. counting | MIT | A fork of Squirrel with [new features](https://quirrel.io/doc/reference/diff_from_original.html). |
| [Rebol](https://github.com/Oldes/Rebol3) | C | Tracing | Apache License 2.0 | Relative Expression Based Object Language |
| [Red](https://github.com/red/red) | Rebol, Red, Red/System | Tracing | 3-clause BSD, BSL | A descendant of Rebol. Embeddable via [libRed](https://github.com/red/docs/blob/master/en/libred.adoc). Features a cross-platform native GUI system. Intended to have low memory usage. |
| [Rhai](https://github.com/jonathandturner/rhai) | Rust | None (Rust-style lifetimes) | MIT or Apache License 2.0 | An embedded scripting language for Rust inspired by ChaiScript. |
| [Ring](https://github.com/ring-lang/ring) | C | Tracing | MIT | An embeddable applications programming language with a large standard library and GIL-less multithreading. |
| [Ruby](https://www.ruby-lang.org/en/) | C | Tracing | Choice of 2-clause BSD, Ruby license, GPL 2 | An embeddable object-oriented scripting language. [Running Ruby in C](https://silverhammermba.github.io/emberb/embed/). |
| [s7](https://ccrma.stanford.edu/software/snd/snd/s7.html) | C | Tracing | 3-clause BSD | Implements a subset of R5RS/R7RS. Descended from TinyScheme. |
| [sci](https://github.com/borkdude/sci) | Clojure | host VM&#39;s GC | EPL | An interpreter for a subset of Clojure for Clojure and ClojureScript. |
| [SGScript](https://github.com/snake5/sgscript) | C | Ref. counting + tracing CG | MIT | [Features](http://www.sgscript.org/pages/advdocs/sgscript.docs.htm#Why-SGScript) include a built-in data serialization format, coroutines, class-based OOP, sandboxed evaluation, a built-in debugger and profiler. |
| [Shine](https://github.com/richardhundt/shine) | C | Tracing | MIT | A language based on Lua with additional safety and expressiveness features implemented as a fork of LuaJIT. |
| [SquiLu](https://github.com/mingodad/squilu) | C++ | Ref. counting | MIT, some extensions LGPL or GPL | A fork of [Squirrel](http://squirrel-lang.org/). Changes the syntax to accept a subset of JavaScript and C/C++. Implements Lua's features like string pattern matching and global table manipulation functions. Adds extensions for database access (SQLite3, MySQL, PostgreSQL), sockets, and other features. |
| [Squirrel](http://squirrel-lang.org/) | C++ | Ref. counting | MIT | A language inspired by Lua and JavaScript/Python. Has a Lua-like C++ API. Differentiates itself from Lua with the use of reference counting in place of Lua's tracing GC, a curly-brace syntax, built-in class-based OOP, and zero-indexed arrays. |
| [Starlark (Go)](https://github.com/google/starlark-go/) | Go | Go&#39;s GC | 3-clause BSD | A small dialect of Python for configuration. Not Turing-complete. Untrusted code: can't access the file system and network, can use up memory and CPU to perform a DoS attack. [Spec](https://github.com/bazelbuild/starlark). [Python bindings](https://github.com/caketop/python-starlark-go). |
| [Starlark (Java)](https://github.com/bazelbuild/bazel/tree/master/src/main/java/net/starlark/java) | Java | JVM&#39;s GC | Apache License 2.0 | Starlark for the JVM. The original implementation. |
| [Starlark (Rust)](https://github.com/google/starlark-rust/) | Rust | ? | Apache License 2.0 | Starlark in Rust. [Python bindings](https://github.com/inducer/starlark-pyo3). |
| [tcc](https://repo.or.cz/tinycc.git/) | C | None | LGPL 2 | A small C compiler that can be used as a library for a C JIT. [libtcc header](https://repo.or.cz/tinycc.git/blob/HEAD:/libtcc.h). [Embedding example](https://repo.or.cz/tinycc.git/blob/HEAD:/tests/libtcc_test.c). |
| [Tcl](http://tcl-lang.org/) | C | Ref. counting | Tcl license (BSD-like) | An embeddable general-purpose scripting language with a rich C API. Has a cross-platform GUI toolkit called [Tk](https://wiki.tcl-lang.org/477). [How to embed Tcl in C applications](https://wiki.tcl-lang.org/2074). |
| [TinyScheme](http://tinyscheme.sourceforge.net/) | C | Tracing? | 3-clause BSD | Implements a subset of R5RS. |
| [Umka](https://github.com/vtereshkov/umka-lang) | C | Ref. counting | 2-clause BSD | Statically typed. |
| [Wirefilter](https://github.com/cloudflare/wirefilter) | Rust | None (no dynamic memory allocation) | MIT | An expression language for Wireshark-like filters. |
| [Wren](https://github.com/munificent/wren) | C | Tracing | MIT | A small class-based performance-oriented scripting language. [Performance comparison](https://wren.io/performance.html). |
| [zygomys](https://github.com/glycerine/zygomys) | Go | Go&#39;s GC | 2-clause BSD | An embedded Lisp for Go. Inspired by Clojure, but more oriented towards imperative programming. Has an infix syntax layer that looks like a subset of Go. |

## Sorted by implementation language

| Implementation language | Project name/link | GC | License | Notes |
|-------------------------|-------------------|----|---------|-------|
| Ada | [HAC](https://hacadacompiler.sourceforge.io/) | None (stack only) | MIT | HAC implements a subset of the Ada language. Thus, it can share sources with the embedding application. |
| C | [Atlast](https://www.fourmilab.ch/atlast/) | None (manual MM) | Public domain | A dialect of Forth originally developed at Autodesk. |
| C | [Boron](http://urlan.sourceforge.net/boron/) | Tracing | LGPL 3+ | An embeddable scripting language similar to Rebol. |
| C | [CircuitPython](https://github.com/adafruit/circuitpython) | Tracing | MIT | A fork of MicroPython, designed for API uniformity across many microcontrollers. |
| C | [Chibi Scheme](https://github.com/ashinn/chibi-scheme) | Tracing | 3-clause BSD | Implements R7RS small. |
| C | [CHICKEN Scheme](https://call-cc.org/) | Tracing | 3-clause BSD | Implements R5RS (with some [changes](http://wiki.call-cc.org/man/4/Supported%20language)). R7RS support is a work in progress. [Examples of embedding CHICKEN](https://wiki.call-cc.org/embedding). |
| C | [Datalog (MITRE Corporation)](http://datalog.sourceforge.net/) | Tracing (Lua&#39;s GC) | LGPL 2+ | Implements Datalog. It is implemented on top of Lua 5.3 and can be extended with Lua functions. |
| C | [Duktape](http://duktape.org/) | Ref. counting + cycle-detecting tracing GC | MIT | Implements JavaScript E5/E5.1. |
| C | [Espruino](https://github.com/espruino/Espruino) | Tracing | MPL 2.0 | Implements a subset of JavaScript ES5 in a way suitable for embedded hardware with 8+ KiB RAM. |
| C | [FTH](http://fth.sourceforge.net) | Tracing | 2-clause BSD | A dialect of Forth with objects, hashes, regular expressions, and other extensions. |
| C | [Gravity](https://github.com/marcobambini/gravity) | Tracing | MIT | A class-based concurrent scripting language with a Swift-like syntax. |
| C | [GNU Guile](https://www.gnu.org/software/guile/) | [Boehm](https://www.gnu.org/software/guile/manual/html_node/Conservative-GC.html) | LGPL 3+ | ["Guile mostly implements R6RS."](https://www.gnu.org/software/guile/manual/guile.html#R6RS-Support) |
| C | [HashLink](https://hashlink.haxe.org/) | Tracing (lazy sweep) | MIT | A bytecode interpreter and a baseline JIT compiler (x86/x86\_64 only) for [Haxe](https://haxe.org/). |
| C | [Io](https://github.com/stevedekorte/io) | Tracing | 3-clause BSD | A prototype-based OO language. |
| C | [Janet](https://janet-lang.org/) | Tracing | MIT | A functional and imperative language with a Lisp syntax. |
| C | [JerryScript](https://github.com/jerryscript-project/jerryscript) | Tracing | Apache License 2.0 | A full ECMAScript 5.1 interpreter written in C99 and optimized for low memory consumption. Uses CMake. |
| C | [Jim Tcl](http://jim.tcl-lang.org/) | Tracing | 2-clause BSD | Largely compatible with Tcl 8.5 with its own additions. |
| C | [jsish](http://jsish.org/) | Ref. counting | MIT | A JavaScript ES 5.2+ interpreter. Internally structured after Tcl with an extensive C API. Features include subinterpreters, introspection, SQLite bindings, and a web framework with WebSocket support. The code is valid C and C++. |
| C | [Libfawk](http://repo.hu/projects/libfawk/) | Ref. counting | 3-clause BSD | A multi-language VM. Includes compilers for three languages: Fawk (Awk dialect), Fbas (Basic dialect), and Fpas (Pascal dialect). |
| C | [Libmawk](http://repo.hu/projects/libmawk/) | Ref. counting | **GPL 2** | Implements Awk. A fork of mawk 1.3 restructured for embedding. |
| C | [Lily](https://github.com/FascinatedBox/lily/) | Ref. counting + GC | MIT | A language focusing on expressiveness and safety. |
| C | [ljs](https://github.com/mingodad/ljs) | Tracing | MIT | Lua 5.3, Lua 5.1, and LuaJIT with a C/C++/Java/JavaScript syntax. Can convert Lua source code to ljs. |
| C | [Lua](http://lua.org/) | Tracing | MIT | The reference implementation of what is likely the world's most popular embedded scripting language. Allows you to precompile scripts to bytecode. Versions 5.1-5.3, which are the ones used today, are not fully compatible with each other. |
| C | [LuaJIT](http://luajit.org/) | Tracing | MIT | Fully compatible with Lua 5.1. Has a built-in C FFI library. [Performance comparison](https://luajit.org/performance.html). |
| C | [Luau](https://luau-lang.org/) | Tracing | MIT | Roblox [fork of Lua 5.1](https://luau-lang.org/why) as a scripting language for games to support a gradual type system as well as limiting the set of standard libraries exposed to the users and implements extra sandboxing features to be able to run unprivileged code. Whenever possible, Luau aims to be backwards-compatible with Lua 5.1 and at the same time to incorporate features from later revisions of Lua. |
| C | [MicroPython](https://github.com/micropython/micropython) | Tracing | MIT | Implements the Python 3.4 syntax and some of the core datatypes. |
| C | [Mono](http://www.mono-project.com/docs/advanced/embedding/scripting/) | Tracing | MIT and other | Implements the [CLR](https://en.wikipedia.org/wiki/Common_Language_Runtime). |
| C | [mruby](https://github.com/mruby/mruby) | Tracing | MIT | A lightweight implementation of Ruby. Has a compile-time package manager. |
| C | [mruby/c](https://github.com/mrubyc/mrubyc) | Ref. counting | 3-clause BSD | An even smaller implementation of Ruby for microcontrollers with limited memory. |
| C | [MuJS](https://mujs.com/) | Tracing | ISC | Implements JavaScript (ES5). Has a similar C interface to Lua. |
| C | [MY-BASIC](https://github.com/paladin-t/my_basic) | Ref. counting + cycle-detecting tracing GC | MIT | A Basic dialect with prototype-based OOP. |
| C | [Neko](http://nekovm.org/) | Boehm | MIT | The NekoVM is a target for several compilers, including [Haxe](http://haxe.org/). |
| C | [Never](https://github.com/never-lang/never) | Tracing | MIT | A statically typed functional programming language. |
| C | [njs](https://nginx.org/en/docs/njs/) | None (no collection performed) | 2-clause BSD | Implements a subset of ES5.1 with some ES6 extensions. |
| C | [Pawn](http://www.compuphase.com/pawn/pawn.htm) | None (no heap allocation) | Apache License 2.0 with a clause to explicitly permit static linking | A curly-brace language with a small-footprint VM. Represents data as 4/8-byte "cells". Compiles to CPU-specific bytecode. [More](https://wiki.alliedmods.net/Pawn_Tutorial#Language_Paradigms). |
| C | [Perl](https://www.perl.org/) | Ref. counting | Artistic License or GPL 3 | [Embedding Perl in Another Application](https://perldoc.perl.org/perlembed) |
| C | [pForth](http://www.softsynth.com/pforth/) | None (manual MM) | Public domain | A dialect of Forth. |
| C | [PH7](https://github.com/symisc/PH7) | Ref. counting | **SPL** or proprietary | Implements a subset of PHP 5.3 with some changes like native UTF-8 support. |
| C | [PicoC](https://github.com/zsaleeba/picoc) | None (manual MM) | 3-clause BSD | Statically typed. Interprets a subset of C. |
| C | [Picol](https://chiselapp.com/user/dbohdan/repository/picol/) | None (no reference support) | 2-clause BSD | A header-only library interpreter for a limited dialect of Tcl. |
| C | [pocketlang](https://github.com/ThakeeNathees/pocketlang) | Tracing | MIT | A small language syntactically similar to Ruby. [Embedding examples](https://github.com/ThakeeNathees/pocketlang/tree/master/tests/native/). [Performance comparison](https://github.com/ThakeeNathees/pocketlang#performance). |
| C | [Python](https://www.python.org/) | Ref. counting + cycle-detecting tracing GC | PSFL (BSD-like) | [Embedding Python in Another Application](https://docs.python.org/3.5/extending/embedding.html). |
| C | [QuickJS](https://bellard.org/quickjs/) | Ref. counting + cycle-detecting tracing GC | MIT | A small embedded JavaScript interpreter that implements almost all of ES2019 and much of ES2020. |
| C | [Rebol](https://github.com/Oldes/Rebol3) | Tracing | Apache License 2.0 | Relative Expression Based Object Language |
| C | [Ring](https://github.com/ring-lang/ring) | Tracing | MIT | An embeddable applications programming language with a large standard library and GIL-less multithreading. |
| C | [Ruby](https://www.ruby-lang.org/en/) | Tracing | Choice of 2-clause BSD, Ruby license, GPL 2 | An embeddable object-oriented scripting language. [Running Ruby in C](https://silverhammermba.github.io/emberb/embed/). |
| C | [s7](https://ccrma.stanford.edu/software/snd/snd/s7.html) | Tracing | 3-clause BSD | Implements a subset of R5RS/R7RS. Descended from TinyScheme. |
| C | [SGScript](https://github.com/snake5/sgscript) | Ref. counting + tracing CG | MIT | [Features](http://www.sgscript.org/pages/advdocs/sgscript.docs.htm#Why-SGScript) include a built-in data serialization format, coroutines, class-based OOP, sandboxed evaluation, a built-in debugger and profiler. |
| C | [Shine](https://github.com/richardhundt/shine) | Tracing | MIT | A language based on Lua with additional safety and expressiveness features implemented as a fork of LuaJIT. |
| C | [Tcl](http://tcl-lang.org/) | Ref. counting | Tcl license (BSD-like) | An embeddable general-purpose scripting language with a rich C API. Has a cross-platform GUI toolkit called [Tk](https://wiki.tcl-lang.org/477). [How to embed Tcl in C applications](https://wiki.tcl-lang.org/2074). |
| C | [tcc](https://repo.or.cz/tinycc.git/) | None | LGPL 2 | A small C compiler that can be used as a library for a C JIT. [libtcc header](https://repo.or.cz/tinycc.git/blob/HEAD:/libtcc.h). [Embedding example](https://repo.or.cz/tinycc.git/blob/HEAD:/tests/libtcc_test.c). |
| C | [TinyScheme](http://tinyscheme.sourceforge.net/) | Tracing? | 3-clause BSD | Implements a subset of R5RS. |
| C | [Umka](https://github.com/vtereshkov/umka-lang) | Ref. counting | 2-clause BSD | Statically typed. |
| C | [Wren](https://github.com/munificent/wren) | Tracing | MIT | A small class-based performance-oriented scripting language. [Performance comparison](https://wren.io/performance.html). |
| C# | [Mond](https://github.com/Rohansi/Mond/) | CLR&#39;s GC | MIT | A dynamically typed scripting language with generators, async, remote debugging, and a binding API. |
| C# | [MoonSharp](https://www.moonsharp.org/) | CLR&#39;s GC | 3-clause BSD and other | CLR Based Lua implementation that is 99% compatible with Lua 5.2 |
| C++ | [AngelScript](http://www.angelcode.com/angelscript/) | Ref. counting + cycle-detecting tracing GC | zlib | A statically typed curly brace language resembling C++ itself. |
| C++ | [ArkScript](https://github.com/SuperFola/Ark) | None (resource release is destruction + optional manual MM) | MPL 2.0 | A small functional Lisp-like programming language. Separate bytecode compiler and VM. |
| C++ | [ChaiScript](http://chaiscript.com/) | Ref. counting | 3-clause BSD | A header-only C++14 interpreter library. |
| C++ | [daScript](https://dascript.org/) | None (region-based + manual MM?) | 3-clause BSD | A statically-typed [performance-oriented](https://dascript.org/#performance) scripting language. |
| C++ | [Falcon](http://falconpl.org/) | Tracing | **GPL 2** or custom | The GC is pluggable. |
| C++ | [GameMonkey Script](http://www.gmscript.com/) | Tracing | MIT | Comes with C bindings. Similar to Lua, multithreaded. |
| C++ | [Jsonnet](https://jsonnet.org/) | Tracing | Apache License 2.0 | A functional configuration language that extends JSON. Untrusted code: can't access the file system or network, can use up memory and CPU time for a DoS attack. Has [bindings](https://jsonnet.org/ref/bindings.html) for C, C++, Go, Python, and other languages, as well as a separate native Go implementation. |
| C++ | [ooRexx](http://www.oorexx.org/) | Tracing | CPL | Implements Rexx extended with objects. |
| C++ | [gmqcc/qcvm](https://github.com/graphitemaster/gmqcc) | None (no dynamic memory allocation) | MIT | A QuakeC compiler and VM. |
| C++ | [Quirrel](https://github.com/GaijinEntertainment/quirrel) | Ref. counting | MIT | A fork of Squirrel with [new features](https://quirrel.io/doc/reference/diff_from_original.html). |
| C++ | [SquiLu](https://github.com/mingodad/squilu) | Ref. counting | MIT, some extensions LGPL or GPL | A fork of [Squirrel](http://squirrel-lang.org/). Changes the syntax to accept a subset of JavaScript and C/C++. Implements Lua's features like string pattern matching and global table manipulation functions. Adds extensions for database access (SQLite3, MySQL, PostgreSQL), sockets, and other features. |
| C++ | [Squirrel](http://squirrel-lang.org/) | Ref. counting | MIT | A language inspired by Lua and JavaScript/Python. Has a Lua-like C++ API. Differentiates itself from Lua with the use of reference counting in place of Lua's tracing GC, a curly-brace syntax, built-in class-based OOP, and zero-indexed arrays. |
| C++17 | [Jinx](https://jamesboer.github.io/Jinx/) | Ref. counting | MIT | Designed for use in realtime applications such as video games. |
| C, Object Pascal (separate implementations) | [LIL](http://runtimeterror.com/tech/lil/) | None (no reference support) | zlib | A Tcl-like language incompatible with mainline Tcl. |
| Clojure | [Cascalog](https://github.com/nathanmarz/cascalog) | JVM&#39;s GC | Apache License 2.0 | Implements Datalog. |
| Clojure | [sci](https://github.com/borkdude/sci) | host VM&#39;s GC | EPL | An interpreter for a subset of Clojure for Clojure and ClojureScript. |
| Common Lisp, C | [Embeddable Common Lisp](https://gitlab.com/embeddable-common-lisp/ecl) | Boehm-Weiser GC | LGPL 2+ | Full Common Lisp implementation, available as a shared library `libecl.so` embeddable in any C, C++ or other application. |
| Common Lisp, C++ | [Clasp](https://github.com/drmeister/clasp) | MPS GC (Boehm-Weiser also supported) | LGPL 2+ | Full Common Lisp implementation well integrated with C++, using LLVM for the code generation, to integrate closely with C++ applications or libraries. |
| Erlang | [Datalog (fogfish)](https://github.com/fogfish/datalog) | None (no collection inside interpreter state) | Apache License 2.0 | Implements Datalog. |
| Erlang | [ephp](https://github.com/bragful/ephp) | None (no collection inside interpreter state) | LGPL 2.1 | Implements a subset of PHP 5.5. |
| Erlang | [Erlog](https://github.com/rvirding/erlog) | None () | Apache License 2.0 | Interprets a subset of standard Prolog. |
| Erlang | [luerl](https://github.com/rvirding/luerl) | Tracing | Apache License 2.0 | An implementation of Lua 5.2 in pure Erlang with some features like `goto` absent. |
| Go | [Anko](https://github.com/mattn/anko/) | Go&#39;s GC | MIT | Scriptable interpreter with syntax similar to Go. |
| Go | [Expr](https://github.com/antonmedv/expr) | Go&#39;s GC | MIT | Compiles and evaluates statically-typed expressions. |
| Go | [Gentee](https://github.com/gentee/gentee/) | Go&#39;s GC | MIT | Statically typed. |
| Go | [Goja](https://github.com/dop251/goja) | Go&#39;s GC | MIT | Implements ECMAScript 5.1. Better standard compliance and performance than otto. |
| Go | [Golog](https://github.com/mndrix/golog) | Go&#39;s GC | MIT | Implements a subset of standard Prolog. |
| Go | [Go-Lua](https://github.com/Shopify/go-lua) | Go&#39;s GC | MIT | Implements a subset of Lua 5.2. |
| Go | [GopherLua](https://github.com/yuin/gopher-lua) | Go&#39;s GC | MIT | Implements Lua 5.1 with the added support for Go's channels. Lacks the debug hooks and several functions from the C version. |
| Go | [otto](https://github.com/robertkrimen/otto) | Go&#39;s GC | MIT | Implements ES5 with [some limitations](https://github.com/robertkrimen/otto#caveat-emptor). |
| Go | [Starlark (Go)](https://github.com/google/starlark-go/) | Go&#39;s GC | 3-clause BSD | A small dialect of Python for configuration. Not Turing-complete. Untrusted code: can't access the file system and network, can use up memory and CPU to perform a DoS attack. [Spec](https://github.com/bazelbuild/starlark). [Python bindings](https://github.com/caketop/python-starlark-go). |
| Go | [zygomys](https://github.com/glycerine/zygomys) | Go&#39;s GC | 2-clause BSD | An embedded Lisp for Go. Inspired by Clojure, but more oriented towards imperative programming. Has an infix syntax layer that looks like a subset of Go. |
| Haskell | [Dhall](https://dhall-lang.org/) | Haskell&#39;s GC | 3-clause BSD | A statically-typed functional configuration language. Not Turing-complete. Untrusted code: can't access the file system, can fetch Dhall libraries over HTTP(S) from static URLs (but libraries aren't allowed to access your data), can use up memory and CPU time for a DoS attack. Has a work-in-progress Clojure and Ruby implementation. |
| Java | [AbcDatalog](http://abcdatalog.seas.harvard.edu/) | JVM&#39;s GC | 3-clause BSD | Implements Datalog. |
| Java | [BeanShell](https://github.com/beanshell/beanshell/) | JVM&#39;s GC | Apache License 2.0 | An small, embeddable Java source code interpreter. Understands Java code with certain extensions like method closures. |
| Java | [Groovy](http://groovy-lang.org/) | JVM&#39;s GC | Apache License 2.0 | A scripting language for the JVM. A large subset of Java is valid Groovy. [Integrating Groovy into applications](http://groovy-lang.org/integrating.html). |
| Java | [JRuby](http://www.jruby.org/) | JVM&#39;s GC | Choice of EPL, GPL, and LGPL | An implementation of Ruby on the JVM. |
| Java | [JTcl](https://github.com/jtcl-project/jtcl) | Ref. counting | Various BSD-like | Tcl 8.4 with some 8.5 features for the JVM. |
| Java | [Jython](http://www.jython.org/) | JVM&#39;s GC | PSFL (BSD-like) | An implementation of Python on the JVM. |
| Java | [Kawa](https://www.gnu.org/software/kawa/) | JVM&#39;s GC | MIT | R7RS. Supports the javax.script API. [Evaluating Scheme expressions from Java](https://www.gnu.org/software/kawa/Evaluating-Scheme-expressions-from-Java.html). |
| Java | [LuaJ](https://sourceforge.net/projects/luaj/) | JVM&#39;s GC | MIT | A Lua 5.2 spec-compliant interpreter written in Java for JME and JSE. Complies Lua directly to JVM bytecode. |
| Java | [NetRexx](http://www.netrexx.org/) | JVM&#39;s GC | ICU (BSD-like) | Implements Rexx. |
| Java | [Starlark (Java)](https://github.com/bazelbuild/bazel/tree/master/src/main/java/net/starlark/java) | JVM&#39;s GC | Apache License 2.0 | Starlark for the JVM. The original implementation. |
| Object Pascal | [Pascal Script](http://www.remobjects.com/ps.aspx) | None (manual MM) | modified zlib/libpng-License with mandatory attribution | Statically typed. Implements "most of Object Pascal". Can't define new classes. |
| Object Pascal (Delphi 2009 or later) | [DWScript](https://bitbucket.org/egrange/dwscript/) | Ref. counting + cycle-detecting tracing GC | MPL 1.1, GPL 3 (JavaScript code generator) | [Description](https://www.delphitools.info/dwscript). A statically typed Delphi/Free Pascal-like language. Can compile to JavaScript. |
| OCaml | [Datalog (c-cube)](https://github.com/c-cube/datalog) | OCaml&#39;s GC | 2-clause BSD | Implements Datalog. |
| OCaml | [Lua-ML](https://github.com/lindig/lua-ml) | OCaml&#39;s GC | 2-clause BSD | Embeddable Lua 2.5 reimplementation that integrates with OCaml type and module system. It's possible to extend or even replace the standard library with your own modules. |
| Rebol, Red, Red/System | [Red](https://github.com/red/red) | Tracing | 3-clause BSD, BSL | A descendant of Rebol. Embeddable via [libRed](https://github.com/red/docs/blob/master/en/libred.adoc). Features a cross-platform native GUI system. Intended to have low memory usage. |
| Rust | [Dyon](https://github.com/pistondevelopers/dyon) | None (Rust-style [lifetimes](http://www.piston.rs/dyon-tutorial/lifetimes.html)) | Apache License 2.0 or MIT | Has optional, optimistic (succeed-by-default) static type checking. |
| Rust | [gluon](https://github.com/gluon-lang/gluon) | Tracing | MIT | Statically typed. Inspired by Lua, Haskell, and OCaml. Each executing gluon thread gets a separate heap. |
| Rust | [Ketos](https://github.com/murarth/ketos) | None (no heap allocation)? | Apache License 2.0 | A functional Lisp. |
| Rust | [Molt](https://github.com/wduquette/molt) | Ref. counting | 3-clause BSD | A minimal Tcl implementation for Rust applications and libraries. |
| Rust | [Rhai](https://github.com/jonathandturner/rhai) | None (Rust-style lifetimes) | MIT or Apache License 2.0 | An embedded scripting language for Rust inspired by ChaiScript. |
| Rust | [Starlark (Rust)](https://github.com/google/starlark-rust/) | ? | Apache License 2.0 | Starlark in Rust. [Python bindings](https://github.com/inducer/starlark-pyo3). |
| Rust | [Wirefilter](https://github.com/cloudflare/wirefilter) | None (no dynamic memory allocation) | MIT | An expression language for Wireshark-like filters. |
| Scheme | [Animula](https://gitlab.com/hardenedlinux/animula) | Tracing | Compiler **GPL 3+** while VM is LGPL 3+ | An optimizing compiler and VM for embedded systems. R7RS. |

## See also

* [cwal: Scripting Engine Without A Language](https://fossil.wanderinghorse.net/r/cwal/home).
* [Game scripting languages benchmarked](https://github.com/r-lyeh/scriptorium).
* [Languages that compile to JavaScript](https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS).
* [Languages that compile to Lua](https://github.com/hengestone/lua-languages).
* [miniKanren](http://minikanren.org/#implementations) logic programming language implementations.
* [sol](https://github.com/ThePhD/sol2) &mdash; C++ bindings for Lua.

## Contributing

Your contributions are welcome! See [CONTRIBUTING](CONTRIBUTING.md).

## License

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

## Disclosure

The curator of this document maintains Picol and has contributed to Jim Tcl.
