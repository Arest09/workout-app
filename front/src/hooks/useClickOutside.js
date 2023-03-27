import { useEffect, useRef, useState } from 'react'

function useClickOutside(initialeVale) {
  const [show, setShow] = useState(initialeVale)

  const ref = useRef(null)

  const handleClick = e => {
    if (!ref.current.contains(e.target)) {
      setShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', e => {
      handleClick(e)
    })
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return [ref, show, setShow]
}

export { useClickOutside }
