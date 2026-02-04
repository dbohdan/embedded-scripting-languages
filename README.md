# Embedded scripting languages

The following is a list of reasonably mature or actively developed open source [embedded scripting languages](https://en.wikipedia.org/wiki/Scripting_language) to use in your application. Stretching the definition of a scripting language, it also includes [Datalog](https://en.wikipedia.org/wiki/Datalog) implementations. Items with a strong copyleft license (like the GNU GPL) that will apply to the rest of your code are **emphasized** as a warning.

To sort and filter the list interactively, visit the [webpage](https://dbohdan.github.io/embedded-scripting-languages/). To contribute, go to the [GitHub project](https://github.com/dbohdan/embedded-scripting-languages).

## Contents

- [Embedded scripting languages](#embedded-scripting-languages)
  * [List](#list)
  * [See also](#see-also)
  * [Contributing](#contributing)
  * [License](#license)
  * [Disclosure](#disclosure)

## List

| Language | Project name/link | Implementated in | GC | License | Notes |
|----------|-------------------|------------------|----|---------|-------|
| Ada | [HAC](https://hacadacompiler.sourceforge.io/) | Ada | None (stack only) | MIT | HAC implements a subset of the Ada language. Thus, it can share sources with the embedding application. |
| AngelScript | [AngelScript](http://www.angelcode.com/angelscript/) | C++ | Ref. counting + cycle-detecting tracing GC | Zlib | A statically typed curly brace language resembling C++ itself. |
| Anko | [Anko](https://github.com/mattn/anko/) | Go | Go&#39;s GC | MIT | Scriptable interpreter with syntax similar to Go. |
| ArkScript | [ArkScript](https://github.com/SuperFola/Ark) | C++ | None (resource release is destruction + optional manual MM) | MPL-2.0 | A small functional Lisp-like programming language. Separate bytecode compiler and VM. |
| Asp | [Asp](https://www.asplang.org/) | C | Ref. counting inside a static memory area | MIT | Python-like. Targets embedded systems. Allows making blocking calls in scripts without blocking the main application. Runs compiled bytecode. Not related to Microsoft's Active Server Pages. |
| Awk | [GoAWK](https://github.com/benhoyt/goawk) | Go | Go&#39;s GC | MIT | A POSIX-compliant AWK, with CSV support. |
| Awk | [Libmawk](http://repo.hu/projects/libmawk/) | C | Ref. counting | **GPL-2.0** | Implements Awk. A fork of mawk 1.3 restructured for embedding. |
| Awk, Basic, Pascal | [Libfawk](http://repo.hu/projects/libfawk/) | C | Ref. counting | BSD-3-Clause | A multi-language VM. Includes compilers for three languages: Fawk (Awk dialect), Fbas (Basic dialect), and Fpas (Pascal dialect). |
| Basic | [EndBASIC](https://github.com/endbasic/endbasic) | Rust | Ref. counting | Apache-2.0 | BASIC-like language with static typing. |
| Basic | [MY-BASIC](https://github.com/paladin-t/my_basic) | C | Ref. counting + cycle-detecting tracing GC | MIT | A Basic dialect with prototype-based OOP. |
| Berry | [Berry](https://github.com/berry-lang/berry) | C | Tracing | MIT | Lightweight dynamically-typed embedded scripting language designed for lower-performance devices with limited memory. |
| Boron | [Boron](http://urlan.sourceforge.net/boron/) | C | Tracing | LGPL-3.0-or-later | An embeddable scripting language similar to Rebol. |
| C | [PicoC](https://github.com/zsaleeba/picoc) | C | None (manual MM) | BSD-3-Clause | Statically typed. Interprets a subset of C. |
| C | [tcc](https://repo.or.cz/tinycc.git/) | C | None | LGPL-2.0-only | A small C compiler that can be used as a library for a C JIT. [libtcc header](https://repo.or.cz/tinycc.git/blob/HEAD:/libtcc.h). [Embedding example](https://repo.or.cz/tinycc.git/blob/HEAD:/tests/libtcc_test.c). |
| C#, other CLR languages | [Mono](http://www.mono-project.com/docs/advanced/embedding/scripting/) | C | Tracing | MIT and other | Implements the [CLR](https://en.wikipedia.org/wiki/Common_Language_Runtime). |
| ChaiScript | [ChaiScript](http://chaiscript.com/) | C++ | Ref. counting | BSD-3-Clause | A header-only C++14 interpreter library. |
| Cicada | [Cicada](https://github.com/heltilda/cicada) | C | Ref. counting + Tracing | MIT | A lightweight interpreted language that integrates with C. Imperative, dynamically typed, C-like syntax, ~250 kB binary. |
| Clojure | [sci](https://github.com/borkdude/sci) | Clojure | host VM&#39;s GC | EPL-1.0 | An interpreter for a subset of Clojure for Clojure and ClojureScript. |
| Common Expression Language (CEL) | [cel-go](https://github.com/google/cel-go) | Go | Go&#39;s GC | Apache-2.0 | Go implementation of CEL, a non-Turing-complete expression language. |
| Common Expression Language (CEL) | [cel-python](https://github.com/cloud-custodian/cel-python) | Python | Python&#39;s GC | Apache-2.0 | A non-Turing-complete expression language. |
| Common Expression Language (CEL) | [cel-rust](https://github.com/clarkmcc/cel-rust) | Rust | None | MIT | A non-Turing-complete expression language. |
| Common Lisp | [Clasp](https://github.com/drmeister/clasp) | Common Lisp, C++ | MPS GC (Boehm-Weiser also supported) | LGPL-2.0-or-later | Full Common Lisp implementation well-integrated with C++, using LLVM for code generation to integrate closely with C++ applications or libraries. |
| Common Lisp | [Embeddable Common Lisp](https://gitlab.com/embeddable-common-lisp/ecl) | Common Lisp, C | Boehm-Weiser GC | LGPL-2.0-or-later | Full Common Lisp implementation, available as a shared library `libecl.so` embeddable in any C, C++ or other application. |
| daScript | [daScript](https://dascript.org/) | C++ | None (region-based + manual MM?) | BSD-3-Clause | A statically-typed [performance-oriented](https://dascript.org/#performance) scripting language. |
| Datalog | [AbcDatalog](http://abcdatalog.seas.harvard.edu/) | Java | JVM&#39;s GC | BSD-3-Clause | Implements Datalog. |
| Datalog | [Cascalog](https://github.com/nathanmarz/cascalog) | Clojure | JVM&#39;s GC | Apache-2.0 | Implements Datalog. |
| Datalog | [Datalog (c-cube)](https://github.com/c-cube/datalog) | OCaml | OCaml&#39;s GC | BSD-2-Clause | Implements Datalog. |
| Datalog | [Datalog (fogfish)](https://github.com/fogfish/datalog) | Erlang | None (no collection inside interpreter state) | Apache-2.0 | Implements Datalog. |
| Datalog | [Datalog (MITRE Corporation)](http://datalog.sourceforge.net/) | C | Tracing (Lua&#39;s GC) | LGPL-2.0-or-later | Implements Datalog. It is implemented on top of Lua 5.3 and can be extended with Lua functions. |
| Dhall | [Dhall](https://dhall-lang.org/) | Haskell | Haskell&#39;s GC | BSD-3-Clause | A statically-typed functional configuration language. Not Turing-complete. Untrusted code: can't access the file system, can fetch Dhall libraries over HTTP(S) from static URLs (but libraries aren't allowed to access your data), can use up memory and CPU time for a DoS attack. Has a work-in-progress Clojure and Ruby implementation. |
| DWScript | [DWScript](https://bitbucket.org/egrange/dwscript/) | Object Pascal (Delphi 2009 or later) | Ref. counting + cycle-detecting tracing GC | MPL-1.1, GPL-3.0 (JavaScript code generator) | [Description](https://www.delphitools.info/dwscript). A statically typed Delphi/Free Pascal-like language. Can compile to JavaScript. |
| Dyon | [Dyon](https://github.com/pistondevelopers/dyon) | Rust | None (Rust-style [lifetimes](http://www.piston.rs/dyon-tutorial/lifetimes.html)) | Apache-2.0 or MIT | Features optional, optimistic (succeed-by-default) static type checking. |
| Expr | [Expr](https://github.com/antonmedv/expr) | Go | Go&#39;s GC | MIT | Compiles and evaluates statically-typed expressions. |
| Falcon | [Falcon](https://github.com/falconpl/falcon) | C++ | Tracing | **GPL-2.0** or custom | The GC is pluggable. |
| fe | [fe](https://github.com/rxi/fe) | C | Tracing | MIT | Uses a fixed-size memory region. No `malloc`. |
| Forth | [Atlast](https://www.fourmilab.ch/atlast/) | C | None (manual MM) | Public domain | A dialect of Forth originally developed at Autodesk. |
| Forth | [FTH](http://fth.sourceforge.net) | C | Tracing | BSD-2-Clause | A dialect of Forth with objects, hashes, regular expressions, and other extensions. |
| Forth | [pForth](http://www.softsynth.com/pforth/) | C | None (manual MM) | Public domain | A dialect of Forth. |
| GameMonkey Script | [GameMonkey Script](http://www.gmscript.com/) | C++ | Tracing | MIT | Comes with C bindings. Similar to Lua, multithreaded. |
| Gentee | [Gentee](https://github.com/gentee/gentee/) | Go | Go&#39;s GC | MIT | Statically typed. |
| gluon | [gluon](https://github.com/gluon-lang/gluon) | Rust | Tracing | MIT | Statically typed. Inspired by Lua, Haskell, and OCaml. Each executing gluon thread gets a separate heap. |
| Go | [Yaegi](https://github.com/traefik/yaegi) | Go | Go&#39;s GC | Apache-2.0 | An embedded complete Go interpreter, on top of the Go runtime. |
| Gravity | [Gravity](https://github.com/marcobambini/gravity) | C | Tracing | MIT | A class-based concurrent scripting language with a Swift-like syntax. |
| Groovy | [Groovy](http://groovy-lang.org/) | Java | JVM&#39;s GC | Apache-2.0 | A scripting language for the JVM. A large subset of Java is valid Groovy. [Integrating Groovy into applications](http://groovy-lang.org/integrating.html). |
| Haxe | [HashLink](https://hashlink.haxe.org/) | C | Tracing (lazy sweep) | MIT | A bytecode interpreter and a baseline JIT compiler (x86/x86\_64 only) for [Haxe](https://haxe.org/). |
| Haxe, others | [Neko](http://nekovm.org/) | C | Boehm | MIT | The NekoVM is a target for several compilers, including [Haxe](http://haxe.org/). |
| Interpreter | [Interpreter](https://github.com/Tyill/interpreter) | C++ | None | MIT | A small interpreter in one header and one source code file with optional extensions (arithmetic operations, containers, filesystem, and others). |
| Io | [Io](https://github.com/stevedekorte/io) | C | Tracing | BSD-3-Clause | A prototype-based OO language. |
| Janet | [Janet](https://janet-lang.org/) | C | Tracing | MIT | A functional and imperative language with a Lisp syntax. |
| Java | [BeanShell](https://github.com/beanshell/beanshell/) | Java | JVM&#39;s GC | Apache-2.0 | An small, embeddable Java source code interpreter. Understands Java code with certain extensions like method closures. |
| JavaScript | [Boa](https://github.com/boa-dev/boa) | Rust | Tracing | Unlicense or MIT | Supports more than 90% of the latest ECMAScript specification. |
| JavaScript | [Duktape](http://duktape.org/) | C | Ref. counting + cycle-detecting tracing GC | MIT | Implements JavaScript E5/E5.1. |
| JavaScript | [Espruino](https://github.com/espruino/Espruino) | C | Tracing | MPL-2.0 | Implements a subset of JavaScript ES5 in a way suitable for embedded hardware with 8+ KiB RAM. |
| JavaScript | [Goja](https://github.com/dop251/goja) | Go | Go&#39;s GC | MIT | Implements ECMAScript 5.1. Better standard compliance and performance than otto. |
| JavaScript | [GraalJS](https://github.com/oracle/graaljs) | C++, C, Java | JVM&#39;s GC | UPL-1.0 | Implements ECMAScript 2022 for GraalVM (HotSpot JVM) using the Truffle framework. |
| JavaScript | [JerryScript](https://github.com/jerryscript-project/jerryscript) | C | Tracing | Apache-2.0 | A full ECMAScript 5.1 interpreter written in C99 and optimized for low memory consumption. Uses CMake. |
| JavaScript | [jsish](https://github.com/pcmacdon/jsish) | C | Ref. counting | MIT | A JavaScript ES 5.2+ interpreter. Internally structured after Tcl with an extensive C API. Features include subinterpreters, introspection, SQLite bindings, and a web framework with WebSocket support. The code is valid C and C++. |
| JavaScript | [Jurassic](https://github.com/paulbartrum/jurassic) | C# | CLR&#39;s GC | MIT | JavaScript for .NET. Full support for ES5, and partial for ES6. |
| JavaScript | [MicroQuickJS](https://github.com/bellard/mquickjs) | C | Tracing | MIT | A interpreter related to QuickJS aimed at embedded systems that fits in 100 kB of ROM and as little as 10 kB of RAM. Supports a subset of JavaScript close to ES5. |
| JavaScript | [MuJS](https://mujs.com/) | C | Tracing | ISC | Implements JavaScript (ES5). Has a similar C interface to Lua. |
| JavaScript | [njs](https://nginx.org/en/docs/njs/) | C | None (no collection performed) | BSD-2-Clause | Implements a subset of ES5.1 with some ES6 extensions. |
| JavaScript | [otto](https://github.com/robertkrimen/otto) | Go | Go&#39;s GC | MIT | Implements ES5 with [some limitations](https://github.com/robertkrimen/otto#caveat-emptor). |
| JavaScript | [QuickJS](https://bellard.org/quickjs/) | C | Ref. counting + cycle-detecting tracing GC | MIT | A small embedded JavaScript interpreter that implements almost all of ES2023. |
| Jinx | [Jinx](https://jamesboer.github.io/Jinx/) | C++17 | Ref. counting | MIT | Designed for use in realtime applications such as video games. |
| Jsonnet | [Jsonnet](https://jsonnet.org/) | C++ | Tracing | Apache-2.0 | A functional configuration language that extends JSON. Untrusted code: can't access the file system or network, can use up memory and CPU time for a DoS attack. Has [bindings](https://jsonnet.org/ref/bindings.html) for C, C++, Go, Python, and other languages, as well as a separate native Go implementation. |
| Ketos | [Ketos](https://github.com/murarth/ketos) | Rust | None (no heap allocation)? | Apache-2.0 | A functional Lisp. |
| LIL | [LIL](http://runtimeterror.com/tech/lil/) | C, Object Pascal (separate implementations) | None (no reference support) | Zlib | A Tcl-like language incompatible with mainline Tcl. |
| Lily | [Lily](https://github.com/FascinatedBox/lily/) | C | Ref. counting + tracing GC | MIT | A language focused on expressiveness and safety. |
| ljs | [ljs](https://github.com/mingodad/ljs) | C | Tracing | MIT | Lua 5.3, Lua 5.1, and LuaJIT with a C/C++/Java/JavaScript syntax. Can convert Lua source code to ljs. |
| Lua | [Go-Lua](https://github.com/Shopify/go-lua) | Go | Go&#39;s GC | MIT | Implements a subset of Lua 5.2. |
| Lua | [GopherLua](https://github.com/yuin/gopher-lua) | Go | Go&#39;s GC | MIT | Implements Lua 5.1 with the added support for Go's channels. Lacks the debug hooks and several functions from the C version. |
| Lua | [Lua](http://lua.org/) | C | Tracing | MIT | The reference implementation of what is likely the world's most popular embedded scripting language. Allows you to precompile scripts to bytecode. Versions 5.1-5.3, which are the ones used today, are not fully compatible with each other. |
| Lua | [LuaJ](https://sourceforge.net/projects/luaj/) | Java | JVM&#39;s GC | MIT | A Lua 5.2 spec-compliant interpreter written in Java for JME and JSE. Complies Lua directly to JVM bytecode. |
| Lua | [LuaJIT](http://luajit.org/) | C | Tracing | MIT | Fully compatible with Lua 5.1. Has a built-in C FFI library. [Performance comparison](https://luajit.org/performance.html). |
| Lua | [Lua-ML](https://github.com/lindig/lua-ml) | OCaml | OCaml&#39;s GC | BSD-2-Clause | Embeddable Lua 2.5 reimplementation that integrates with OCaml type and module system. It is possible to extend or even replace the standard library with custom modules. |
| Lua | [Luau](https://luau-lang.org/) | C | Tracing | MIT | Roblox [fork of Lua 5.1](https://luau-lang.org/why) as a scripting language for games to support a gradual type system as well as limiting the set of standard libraries exposed to the users and implements extra sandboxing features to be able to run unprivileged code. Whenever possible, Luau aims to be backwards-compatible with Lua 5.1 and at the same time to incorporate features from later revisions of Lua. |
| Lua | [luerl](https://github.com/rvirding/luerl) | Erlang | Tracing | Apache-2.0 | An implementation of Lua 5.2 in pure Erlang with some features like `goto` absent. |
| Lua | [MoonSharp](https://www.moonsharp.org/) | C# | CLR&#39;s GC | BSD-3-Clause and other | CLR Based Lua implementation that is 99% compatible with Lua 5.2 |
| Lua | [Ravi](https://github.com/dibyendumajumdar/ravi) | C | Tracing | MIT | “Ravi is a dialect of Lua with limited optional static typing and features a JIT compiler powered by MIR as well as support for AOT compilation to native code.” |
| Moirai | [Moirai](https://github.com/moirai-lang/moirai-kt) | Kotlin | JVM&#39;s GC | MIT | A scripting language that calculates the worst-case execution time (WCET) before executing each script. Optimized for multi-tenant microservices and serverless applications. |
| Mond | [Mond](https://github.com/Rohansi/Mond/) | C# | CLR&#39;s GC | MIT | A dynamically typed scripting language with generators, async, remote debugging, and a binding API. |
| Never | [Never](https://github.com/never-lang/never) | C | Tracing | MIT | A statically typed functional programming language. |
| Nickel | [Nickel](https://nickel-lang.org/) | Rust | Ref. counting | MIT | A configuration language with gradual typing and contracts. [Python bindings](https://github.com/tweag/nickel/tree/master/pyckel). |
| Pascal | [Pascal Script](http://www.remobjects.com/ps.aspx) | Object Pascal | None (manual MM) | modified zlib/libpng-License with mandatory attribution | Statically typed. Implements "most of Object Pascal". Can't define new classes. |
| Pawn | [Pawn](http://www.compuphase.com/pawn/pawn.htm) | C | None (no heap allocation) | Apache-2.0 with a clause to explicitly permit static linking | A curly-brace language with a small-footprint VM. Represents data as 4/8-byte "cells". Compiles to CPU-specific bytecode. [More](https://wiki.alliedmods.net/Pawn_Tutorial#Language_Paradigms). |
| Perl | [Perl](https://www.perl.org/) | C | Ref. counting | Artistic-2.0 or GPL-3.0 | [Embedding Perl in Another Application](https://perldoc.perl.org/perlembed) |
| PHP | [ephp](https://github.com/bragful/ephp) | Erlang | None (no collection inside interpreter state) | LGPL-2.1-or-later | Implements a subset of PHP 5.5. |
| PHP | [PH7](https://github.com/symisc/PH7) | C | Ref. counting | **Symisc Public License** or proprietary | Implements a subset of PHP 5.3 with some changes like native UTF-8 support. |
| Pluto | [Pluto](https://github.com/PlutoLang/Pluto) | C++ | Tracing | MIT | A superset of Lua 5.4 (outside of incompatibilies caused by new syntax). Adds syntax like `!=`, `break`, and string interpolation; expands the standard library; somewhat improves performance. |
| pocketlang | [pocketlang](https://github.com/ThakeeNathees/pocketlang) | C | Tracing | MIT | A small language syntactically similar to Ruby. [Embedding examples](https://github.com/ThakeeNathees/pocketlang/tree/master/tests/native/). [Performance comparison](https://github.com/ThakeeNathees/pocketlang#performance). |
| Prolog | [Erlog](https://github.com/rvirding/erlog) | Erlang | None () | Apache-2.0 | Interprets a subset of standard Prolog. |
| Prolog | [Golog](https://github.com/mndrix/golog) | Go | Go&#39;s GC | MIT | Implements a subset of standard Prolog. |
| Prolog | [ichiban/prolog](https://github.com/ichiban/prolog) | Go | Go&#39;s GC | MIT | Adheres the ISO standard and comes with the ISO predicates as well as the Prologue for Prolog and DCG predicates. |
| Python | [CircuitPython](https://github.com/adafruit/circuitpython) | C | Tracing | MIT | A fork of MicroPython, designed for API uniformity across many microcontrollers. |
| Python | [gpython](https://github.com/go-python/gpython) | Go | Go&#39;s GC | BSD-3-Clause | Implements a subset of Python 3.4. |
| Python | [GraalPy](https://github.com/oracle/graalpython) | C, Java | JVM&#39;s GC | UPL-1.0 | Implements Python 3 for GraalVM (HotSpot JVM) using the Truffle framework. |
| Python | [Jython](http://www.jython.org/) | Java | JVM&#39;s GC | PSFL (BSD-like) | An implementation of Python 2 for the JVM. |
| Python | [MicroPython](https://github.com/micropython/micropython) | C | Tracing | MIT | Implements Python 3.4 syntax and some of the core datatypes. |
| Python | [PikaPython](https://github.com/pikasTech/PikaPython) | C | Ref. counting | MIT | Implements a variant of Python 3. The degree of compatibility with Python seems to be undocumented. Runs in as little as 4 KiB of RAM. Targets microcontrollers and Linux. |
| Python | [pocketpy](https://github.com/blueloveTH/pocketpy) | C++ | Tracing | MIT | Implements a subset of Python 3 (with [some differences](https://pocketpy.dev/features/differences/#different-behaviors)) in a single C++17 header file. |
| Python | [Python](https://www.python.org/) | C | Ref. counting + cycle-detecting tracing GC | PSFL (BSD-like) | ["Embedding Python in Another Application"](https://docs.python.org/3/extending/embedding.html). |
| QuakeC | [gmqcc/qcvm](https://github.com/graphitemaster/gmqcc) | C++ | None (no dynamic memory allocation) | MIT | A QuakeC compiler and VM. |
| Quirrel | [Quirrel](https://github.com/GaijinEntertainment/quirrel) | C++ | Ref. counting | MIT | A fork of Squirrel with [new features](https://quirrel.io/doc/reference/diff_from_original.html). |
| Rebol | [Rebol](https://github.com/Oldes/Rebol3) | C | Tracing | Apache-2.0 | Relative Expression Based Object Language |
| Red | [Red](https://github.com/red/red) | Rebol, Red, Red/System | Tracing | BSD-3-Clause, BSL-1.0 | A descendant of Rebol. Embeddable via [libRed](https://github.com/red/docs/blob/master/en/libred.adoc). Features a cross-platform native GUI system. Intended to have low memory usage. |
| Rexx | [NetRexx](http://www.netrexx.org/) | Java | JVM&#39;s GC | ICU (BSD-like) |  |
| Rexx | [ooRexx](http://www.oorexx.org/) | C++ | Tracing | CPL | Implements Rexx extended with objects. |
| Rhai | [Rhai](https://github.com/jonathandturner/rhai) | Rust | None (Rust-style lifetimes) | MIT or Apache-2.0 | An embedded scripting language for Rust inspired by ChaiScript. |
| Ring | [Ring](https://github.com/ring-lang/ring) | C | Tracing | MIT | An embeddable applications programming language with a large standard library and GIL-less multithreading. |
| Risor | [Risor](https://github.com/risor-io/risor) | Go | Go&#39;s GC | Apache-2.0 | A scripting language for Go developers and DevOps. |
| Ruby | [JRuby](http://www.jruby.org/) | Java | JVM&#39;s GC | Choice of EPL, GPL, and LGPL | An implementation of Ruby on the JVM. |
| Ruby | [mruby](https://github.com/mruby/mruby) | C | Tracing | MIT | A lightweight implementation of Ruby. Has a compile-time package manager. |
| Ruby | [mruby/c](https://github.com/mrubyc/mrubyc) | C | Ref. counting | BSD-3-Clause | An even smaller implementation of Ruby for microcontrollers with limited memory. |
| Ruby | [PicoRuby](https://github.com/picoruby/picoruby) | C | Ref. counting | MIT | An mruby implementation for microcontrollers based on the mruby/c VM. Depends only on the C standard library. |
| Ruby | [Ruby](https://www.ruby-lang.org/en/) | C | Tracing | Choice of BSD-2-Clause, Ruby license, GPL-2.0 | An embeddable object-oriented scripting language. [Running Ruby in C](https://silverhammermba.github.io/emberb/embed/). |
| Ruby | [TruffleRuby](https://github.com/oracle/truffleruby) | C, Java | JVM&#39;s GC | UPL-1.0 | Implements Ruby for GraalVM (HotSpot JVM) using Truffle. |
| Rune | [Rune](https://github.com/rune-rs/rune) | Rust | Ref. counting | MIT or Apache-2.0 | An embeddable dynamic programming language. Asynchronous-first and [const-evaluation](https://rune-rs.github.io/#const-evaluation). |
| Scheme | [Animula](https://gitlab.com/hardenedlinux/animula) | C | Tracing | Compiler: **GPL-3.0-or-later**, VM: LGPL-3.0-or-later | An optimizing compiler and VM for embedded systems. R7RS. |
| Scheme | [Chibi Scheme](https://github.com/ashinn/chibi-scheme) | C | Tracing | BSD-3-Clause | Implements R7RS small. |
| Scheme | [CHICKEN Scheme](https://call-cc.org/) | C | Tracing | BSD-3-Clause | Implements R5RS (with some [changes](http://wiki.call-cc.org/man/4/Supported%20language)). R7RS support is a work in progress. See [examples of embedding CHICKEN](https://wiki.call-cc.org/embedding). |
| Scheme | [GNU Guile](https://www.gnu.org/software/guile/) | C | [Boehm](https://www.gnu.org/software/guile/manual/html_node/Conservative-GC.html) | LGPL-3.0-or-later | ["Guile mostly implements R6RS."](https://www.gnu.org/software/guile/manual/guile.html#R6RS-Support) |
| Scheme | [Kawa](https://www.gnu.org/software/kawa/) | Java | JVM&#39;s GC | MIT | R7RS. Supports the javax.script API. [Evaluating Scheme expressions from Java](https://www.gnu.org/software/kawa/Evaluating-Scheme-expressions-from-Java.html). |
| Scheme | [s7](https://ccrma.stanford.edu/software/snd/snd/s7.html) | C | Tracing | BSD-3-Clause | Implements a subset of R5RS/R7RS. Descended from TinyScheme. |
| Scheme | [Steel](https://github.com/mattwparas/steel) | Rust | Ref. counting + tracing GC | Apache-2.0 or MIT | Aims for eventual R5RS and R7RS language compliance, with extensions inspired by Racket. |
| Scheme | [TinyScheme](http://tinyscheme.sourceforge.net/) | C | Tracing? | BSD-3-Clause | Implements a subset of R5RS. |
| SGScript | [SGScript](https://github.com/snake5/sgscript) | C | Ref. counting + tracing CG | MIT | [Features](http://www.sgscript.org/pages/advdocs/sgscript.docs.htm#Why-SGScript) include a built-in data serialization format, coroutines, class-based OOP, sandboxed evaluation, a built-in debugger and profiler. |
| shell | [sh](https://github.com/mvdan/sh) | Go | Go&#39;s GC | MIT | Implements POSIX shell, Bash, and mksh in pure Go. There are caveats with compatibility. See the [readme](https://github.com/mvdan/sh#caveats) and issues like [mvdan/sh#221](https://github.com/mvdan/sh/issues/221). |
| Shine | [Shine](https://github.com/richardhundt/shine) | C | Tracing | MIT | A language based on Lua with additional safety and expressiveness features implemented as a fork of LuaJIT. |
| simpleeval | [simpleeval](https://github.com/danthedeckie/simpleeval) | Python | Python&#39;s GC | MIT | Evaluates expressions in a subset of Python. |
| Snek | [Snek](https://github.com/keith-packard/snek) | C | Tracing | **GPL-3.0-or-later** | A Python-inspired language. Targets "processors too small to run MicroPython". |
| SquiLu | [SquiLu](https://github.com/mingodad/squilu) | C++ | Ref. counting | MIT, some extensions LGPL or GPL | A fork of [Squirrel](http://squirrel-lang.org/). Changes the syntax to accept a subset of JavaScript and C/C++. Implements Lua's features like string pattern matching and global table manipulation functions. It adds extensions for database access (SQLite3, MySQL, PostgreSQL), sockets, and other features. |
| Squirrel | [Squirrel](http://squirrel-lang.org/) | C++ | Ref. counting | MIT | A language inspired by Lua and JavaScript/Python. Has a Lua-like C++ API. Differentiates itself from Lua with the use of reference counting in place of Lua's tracing GC, a curly-brace syntax, built-in class-based OOP, and zero-indexed arrays. |
| Starlark | [Starlark (Go)](https://github.com/google/starlark-go/) | Go | Go&#39;s GC | BSD-3-Clause | A small dialect of Python for configuration. Not Turing-complete. Untrusted code: can't access the file system and network, can use up memory and CPU to perform a DoS attack. [Spec](https://github.com/bazelbuild/starlark). [Python bindings](https://github.com/caketop/python-starlark-go). |
| Starlark | [Starlark (Java)](https://github.com/bazelbuild/bazel/tree/master/src/main/java/net/starlark/java) | Java | JVM&#39;s GC | Apache-2.0 | Starlark for the JVM. The original implementation. |
| Starlark | [Starlark (Rust)](https://github.com/facebookexperimental/starlark-rust) | Rust | ? | Apache-2.0 | Starlark in Rust. [Python bindings](https://github.com/inducer/starlark-pyo3). |
| Tcl | [Jim Tcl](http://jim.tcl-lang.org/) | C | Tracing | BSD-2-Clause | Largely compatible with Tcl 8.5 with its own additions. |
| Tcl | [JTcl](https://github.com/jtcl-project/jtcl) | Java | Ref. counting | Various BSD-like | Tcl 8.4 with some 8.5 features for the JVM. |
| Tcl | [Molt](https://github.com/wduquette/molt) | Rust | Ref. counting | BSD-3-Clause | A minimal Tcl implementation designed for Rust applications and libraries. |
| Tcl | [Picol](https://chiselapp.com/user/dbohdan/repository/picol/) | C | None (no reference support) | BSD-2-Clause | A header-only library interpreter for a limited dialect of Tcl. |
| Tcl | [Tcl](http://tcl-lang.org/) | C | Ref. counting | Tcl license (BSD-like) | An embeddable general-purpose scripting language with a rich C API. Includes a cross-platform GUI toolkit called [Tk](https://wiki.tcl-lang.org/477). See ["How to embed Tcl in C applications"](https://wiki.tcl-lang.org/2074). |
| Toy | [Toy](https://github.com/Ratstail91/Toy) | C | Ref. counting | Zlib | Has an optional type system. [Embedding Toy](https://toylang.com/deep-dive/embedding-toy). |
| Umka | [Umka](https://github.com/vtereshkov/umka-lang) | C | Ref. counting | BSD-2-Clause | Statically typed. |
| Wirefilter | [Wirefilter](https://github.com/cloudflare/wirefilter) | Rust | None (no dynamic memory allocation) | MIT | An expression language for Wireshark-like filters. |
| Wren | [Wren](https://github.com/munificent/wren) | C | Tracing | MIT | A small class-based performance-oriented scripting language. [Performance comparison](https://wren.io/performance.html). |
| ZetScript | [ZetScript](https://zetscript.org) | C++ | Ref. counting | MIT | Comes with an API for C++ interop. |
| zygomys | [zygomys](https://github.com/glycerine/zygomys) | Go | Go&#39;s GC | BSD-2-Clause | An embedded Lisp for Go. Inspired by Clojure, but more oriented towards imperative programming. Has an infix syntax layer that looks like a subset of Go. |

## See also

- [cwal: Scripting Engine Without A Language](https://fossil.wanderinghorse.net/r/cwal/home).
- [Game scripting languages benchmarked](https://github.com/r-lyeh/scriptorium).
- [Languages that compile to JavaScript](https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS).
- [Languages that compile to Lua](https://github.com/hengestone/lua-languages).
- [miniKanren](http://minikanren.org/#implementations) logic programming language implementations.
- [sol](https://github.com/ThePhD/sol2) &mdash; C++ bindings for Lua.

## Contributing

Your contributions are welcome! See [CONTRIBUTING](https://github.com/dbohdan/embedded-scripting-languages/blob/master/CONTRIBUTING.md).

## License

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

## Disclosure

The curator of this document maintains Picol and has contributed to Jim Tcl.
