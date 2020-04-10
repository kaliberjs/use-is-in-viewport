import { useIsIntersecting, useWasIntersecting } from '@kaliber/use-is-intersecting'

export function useIsInViewport({ rootMargin, threshold, disabled = undefined }) {
  const { isIntersecting: isInViewport, ref } = useIsIntersecting({ rootMargin, threshold, disabled })
  return { isInViewport, ref }
}

export function useWasInViewport({ rootMargin, threshold }) {
  const { wasIntersecting: wasInViewport, ref } = useWasIntersecting({ rootMargin, threshold })
  return { wasInViewport, ref }
}