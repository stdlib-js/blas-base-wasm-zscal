<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zscal

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Scale a double-precision complex floating-point vector by a double-precision complex floating-point constant.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-base-wasm-zscal
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var zscal = require( '@stdlib/blas-base-wasm-zscal' );
```

#### zscal.main( N, alpha, x, strideX )

Scales values from `x` by `alpha`.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

// Define a strided array:
var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Define a scalar constant:
var alpha = new Complex128( 2.0, 2.0 );

// Perform operation:
zscal.main( x.length, alpha, x, 1 );
// x => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar [`Complex128`][@stdlib/complex/float64/ctor] constant.
-   **x**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the input strided array are accessed at runtime. For example, to scale every other value in `x` by `alpha`,

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

// Define a strided array:
var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Define a scalar constant:
var alpha = new Complex128( 2.0, 2.0 );

// Perform operation:
zscal.main( 2, alpha, x, 2 );
// x => <Complex128Array>[ -2.0, 6.0, 3.0, 4.0, -2.0, 22.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

// Initial array:
var x0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

// Define a scalar constant:
var alpha = new Complex128( 2.0, 2.0 );

// Create an offset view:
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Scales every other value from `x1` by `alpha`...
zscal.main( 3, alpha, x1, 1 );
// x0 => <Complex128Array>[ 1.0, 2.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0 ]
```

#### zscal.ndarray( N, alpha, x, strideX, offsetX )

Scales values from `x` by `alpha` using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

// Define a strided array:
var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Define a scalar constant:
var alpha = new Complex128( 2.0, 2.0 );

// Perform operation:
zscal.ndarray( x.length, alpha, x, 1, 0 );
// x => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to scale every other value in the input strided array starting from the second element,

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var alpha = new Complex128( 2.0, 2.0 );

zscal.ndarray( 2, alpha, x, 2, 1 );
// x => <Complex128Array>[ 1.0, 2.0, -2.0, 14.0, 5.0, 6.0, -2.0, 30.0 ]
```

* * *

### Module

#### zscal.Module( memory )

Returns a new WebAssembly [module wrapper][@stdlib/wasm/module-wrapper] instance which uses the provided WebAssembly [memory][@stdlib/wasm/memory] instance as its underlying memory.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm-memory' );

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new zscal.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();
```

#### zscal.Module.prototype.main( N, ap, xp, sx )

Scales values from `x` by `alpha`.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm-memory' );
var oneTo = require( '@stdlib/array-one-to' );
var ones = require( '@stdlib/array-ones' );
var zeros = require( '@stdlib/array-zeros' );
var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );
var Float64Array = require( '@stdlib/array-float64' );
var Complex128Array = require( '@stdlib/array-complex128' );
var reinterpretComplex128 = require( '@stdlib/strided-base-reinterpret-complex128' );
var zscal = require( '@stdlib/blas-base-wasm-zscal' );

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new zscal.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex128';

// Specify a vector length:
var N = 5;

// Define a pointer (i.e., byte offset) for storing the input vector:
var xptr = 0;

// Define a pointer for storing a complex number:
var zptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float64' );
var x = new Complex128Array( xbuf.buffer );
mod.write( xptr, x );

// Write a complex number to module memory:
mod.write( zptr, new Float64Array( [ 2.0, 2.0 ] ) );

// Perform computation:
mod.main( N, zptr, xptr, 1 );

// Read out the results:
var view = zeros( N, dtype );
mod.read( xptr, view );

console.log( reinterpretComplex128( view, 0 ) );
// => <Float64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **ap**: pointer (i.e., byte offset) to a scalar [`Complex128`][@stdlib/complex/float64/ctor] constant.
-   **xp**: input [`Complex128Array`][@stdlib/array/complex128] pointer (i.e., byte offset).
-   **sx**: stride length for `x`.

#### zscal.Module.prototype.ndarray( N, ap, xp, sx, ox )

Scales values from `x` by `alpha`  using alternative indexing semantics.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm-memory' );
var oneTo = require( '@stdlib/array-one-to' );
var ones = require( '@stdlib/array-ones' );
var zeros = require( '@stdlib/array-zeros' );
var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );
var Float64Array = require( '@stdlib/array-float64' );
var Complex128Array = require( '@stdlib/array-complex128' );
var reinterpretComplex128 = require( '@stdlib/strided-base-reinterpret-complex128' );
var zscal = require( '@stdlib/blas-base-wasm-zscal' );

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new zscal.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex128';

// Specify a vector length:
var N = 5;

// Define a pointer (i.e., byte offset) for storing the input vector:
var xptr = 0;

// Define a pointer for storing a complex number:
var zptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float64' );
var x = new Complex128Array( xbuf.buffer );
mod.write( xptr, x );

// Write a complex number to module memory:
mod.write( zptr, new Float64Array( [ 2.0, 2.0 ] ) );

// Perform computation:
mod.ndarray( N, zptr, xptr, 1, 0 );

// Read out the results:
var view = zeros( N, dtype );
mod.read( xptr, view );

console.log( reinterpretComplex128( view, 0 ) );
// => <Float64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, `x` is left unchanged.
-   This package implements routines using WebAssembly. When provided arrays which are not allocated on a `zscal` module memory instance, data must be explicitly copied to module memory prior to computation. Data movement may entail a performance cost, and, thus, if you are using arrays external to module memory, you should prefer using [`@stdlib/blas-base/zscal`][@stdlib/blas/base/zscal]. However, if working with arrays which are allocated and explicitly managed on module memory, you can achieve better performance when compared to the pure JavaScript implementations found in [`@stdlib/blas/base/zscal`][@stdlib/blas/base/zscal]. Beware that such performance gains may come at the cost of additional complexity when having to perform manual memory management. Choosing between implementations depends heavily on the particular needs and constraints of your application, with no one choice universally better than the other.
-   `zscal()` corresponds to the [BLAS][blas] level 1 function [`zscal`][zscal].

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasWebAssemblySupport = require( '@stdlib/assert-has-wasm-support' );
var oneTo = require( '@stdlib/array-one-to' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var Complex128Array = require( '@stdlib/array-complex128' );
var reinterpretComplex128 = require( '@stdlib/strided-base-reinterpret-complex128' );
var zscal = require( '@stdlib/blas-base-wasm-zscal' );

// Specify a vector length:
var N = 5;

// Create an input array:
var xbuf = oneTo( N*2, 'float64' );
var x = new Complex128Array( xbuf.buffer );

// Create a complex number:
var alpha = new Complex128( 2.0, 2.0 );

// Perform computation:
zscal.ndarray( N, alpha, x, 1, 0 );

// Print the results:
console.log( reinterpretComplex128( x, 0 ) );
// => <Float64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-wasm-zscal.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-wasm-zscal

[test-image]: https://github.com/stdlib-js/blas-base-wasm-zscal/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-wasm-zscal/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-wasm-zscal/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-wasm-zscal?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-wasm-zscal.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-wasm-zscal/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-wasm-zscal/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-wasm-zscal/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-wasm-zscal/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-wasm-zscal/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-wasm-zscal/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-wasm-zscal/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-wasm-zscal/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-wasm-zscal/main/LICENSE

[blas]: http://www.netlib.org/blas

[zscal]: http://www.netlib.org/lapack/explore-html/da/df6/group__complex__blas__level1.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[@stdlib/complex/float64/ctor]: https://github.com/stdlib-js/complex-float64-ctor

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/wasm/module-wrapper]: https://github.com/stdlib-js/wasm-module-wrapper

[@stdlib/blas/base/zscal]: https://github.com/stdlib-js/blas-base-zscal

</section>

<!-- /.links -->
