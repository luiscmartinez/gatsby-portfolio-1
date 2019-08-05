import { useEffect, useState } from 'react'

export const useIsVisible = ({ element, defaultVisible }) => {
  const [visible, setVisible] = useState(defaultVisible)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  useEffect(() => {
    if (element.current) {
      setWindowHeight(window.innerHeight)
      window.addEventListener('scroll', isVisible)
    }

    return () => window.removeEventListener('scroll', isVisible)
  }, [element])

  // check element rect top
  const isVisible = () => {
    const top = element.current.getBoundingClientRect().top
    if (top >= 0 && top <= windowHeight) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  return visible
}
