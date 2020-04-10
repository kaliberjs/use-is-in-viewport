# useIsInViewport
Check whether an element is currently (or was at some time) visible inside the viewport

## Motivation
Reports wether an element is visible inside the viewport using the [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). This is more performant and easier to use than listening to `scroll` and `resize` events and measuring the current offset using `getBoundingClientRect`. 

## Polyfill
The `IntersectionObserver` is [supported by most current browsers](https://caniuse.com/#search=intersectionobserver). If you need wider support, there is a [polyfill](https://www.npmjs.com/package/intersection-observer) available through polyfill.io.

Using @kaliberjs/build, you can add the following argument to the `polyfill()` call.
```
{polyfill(['default', 'IntersectionObserver'])}
```

Without, you can manually add the following script to your page (or include it in your build):
```
https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver
```

## Installation

```
yarn add @kaliber/use-is-in-viewport
```

## Usage
```jsx
function Component() {
  const { ref: elementRef, isInViewport } = useIsInViewport({ rootMargin: '-10%' })

  return (
    <div className={styles.component}>
      <p>The element is {isInViewport ? 'visible' : 'not visible'}</p>

      <div
        ref={elementRef}
        className={cx(styles.element, isInViewport && styles.isRevealed)}
      />
    </div>
  )
}
```

![](https://media.giphy.com/media/12FLhMHdanoLJK/giphy.gif)

## Disclaimer
This library is intended for internal use, we provide __no__ support, use at your own risk. It does not import React, but expects it to be provided, which [@kaliber/build](https://kaliberjs.github.io/build/) can handle for you.

This library is not transpiled.
