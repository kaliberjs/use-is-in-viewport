import { useIsIntersecting, useWasIntersecting } from '@kaliber/use-is-intersecting'

export function useIsInViewport({ rootMargin, threshold, disabled = undefined }) {
  const { 
    ref,
    isIntersecting: isInViewport, 
    wasIntersecting: wasInViewport
  } = useIsIntersecting({ rootMargin, threshold, disabled })
  return { isInViewport, wasInViewport, ref }
}

export function useWasInViewport({ rootMargin, threshold }) {
  const { wasIntersecting: wasInViewport, ref } = useWasIntersecting({ rootMargin, threshold })
  return { wasInViewport, ref }
}