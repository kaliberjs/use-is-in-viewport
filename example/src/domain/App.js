import { useIsInViewport, useWasInViewport }  from '@kaliber/use-is-in-viewport'
import { visualizeRootMargin } from '/domain/visualizeRootMargin'
import styles from './App.css'

export default function App() {
  const [rootMarginEnabled, setRootMarginEnabled] = React.useState(true)
  const rootMargin = rootMarginEnabled ? '-25%' : ''

  const { ref: isInViewportRef, isInViewport } = useIsInViewport({ rootMargin })
  const { ref: wasInViewportRef, wasInViewport } = useWasInViewport({ rootMargin })

  return (
    <div className={styles.app}>
      {rootMarginEnabled && (
        <div className={styles.rootMargin} style={visualizeRootMargin(rootMargin)} />
      )}

      <button
        onClick={() => setRootMarginEnabled(rootMarginEnabled  => !rootMarginEnabled)}
        className={styles.button}
      >
        {rootMarginEnabled ? 'Don\'t use' : 'Use'} rootMargin
      </button>

      <div
        className={cx(styles.element, isInViewport && styles.isRevealed)}
        ref={isInViewportRef}
      >
        {isInViewport ? 'Is in intersection root element' : 'Is not in intersection root element'}
      </div>
      <div
        className={cx(styles.element, wasInViewport && styles.isRevealed)}
        ref={wasInViewportRef}
      >
        {wasInViewport ? 'Has been in intersection root element' : 'Has not yet been in intersection root element'}
      </div>
    </div>
  )
}
