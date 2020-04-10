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
  const { ref: isInViewportRef, isInViewport } = useIsInViewport({ rootMargin: '-10%' })
  const { ref: wasInViewportRef, wasInViewport } = useWasInViewport({ rootMargin: '-10%' })

  return (
    <div>
      <div ref={isInViewportRef}>
        {isInViewport 
          ? 'Is in viewport'  
          : 'Is not in viewport'}
      </div>

      <div ref={wasInViewportRef} >
        {wasInViewport 
          ? 'Has been in viewport' 
          : 'Has not yet been in viewport'}
      </div>
    </div>
  )
}
```

The `useIsInViewport` hook also returns wether an element has been in the viewport in the past (`wasInViewport`). The main difference with the dedicated `useWasInViewport` hook is that the IntersectionObserver doesn't get cleaned up, since the hook still has to track wether the element is currently in the viewport. This can be useful if you want to pause an expensive operation, but also want the element to have a reveal animation.

```jsx
function Component() {
  const { ref: elementRef, isInViewport, wasInViewport } = useIsInViewport()

  return (
    <div>
      <div ref={elementRef} className={cx(wasInViewport && styles.isRevealed)}>
        {isInViewport ? 'Is in viewport' : 'Is not in viewport'}
      </div>
    </div>
  )
}
```

![](https://media.giphy.com/media/12FLhMHdanoLJK/giphy.gif)

## Disclaimer
This library is intended for internal use, we provide __no__ support, use at your own risk. It does not import React, but expects it to be provided, which [@kaliber/build](https://kaliberjs.github.io/build/) can handle for you.

This library is not transpiled.
