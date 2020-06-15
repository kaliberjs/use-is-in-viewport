import { useIsIntersecting, useWasIntersecting } from '@kaliber/use-is-intersecting'

export function useIsInViewport({ rootMargin = undefined, threshold = undefined, disabled = undefined } = {}) {
  const { isIntersecting: isInViewport, ref } = useIsIntersecting({ rootMargin, threshold, disabled })
  return { isInViewport, ref }
}

export function useWasInViewport({ rootMargin = undefined, threshold = undefined } = {}) {
  const { wasIntersecting: wasInViewport, ref } = useWasIntersecting({ rootMargin, threshold })
  return { wasInViewport, ref }
}