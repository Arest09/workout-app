import { useState, useEffect,memo } from "react"

 function  Expire({ delay, children, isError }) {
  const [isVisible, setIsVisible] = useState(false)

  console.log('render')

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 0.4)

    if (!isError) {
      setTimer(delay)
    }
    
  }, [children])

  const setTimer = (delay) => {
    setTimeout(() => {
      return setIsVisible(false)
    }, delay)
  }

  return isVisible ? <div className='expire'>{children}</div> : <span />
}


export default memo(Expire)