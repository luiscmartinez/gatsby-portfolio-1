import React, { useState, useEffect } from 'react'
import { useIsVisible } from './useIsVisible'

export function useCarousel(data, time, element) {
  const [index, setIndex] = useState(0)
  const visible = useIsVisible(element)

  useEffect(() => {
    let interval

    // start interval if visible, else clear interval
    if (visible) {
      interval = setInterval(increment, time)
    } else {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [index, visible])

  // increment index, reset to 0 when index is on last item
  const increment = () => {
    if (index >= data.length - 1) {
      setIndex(0)
    } else {
      setIndex(index => index + 1)
    }
  }

  return [index]
}
