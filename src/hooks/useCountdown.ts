import { useEffect, useRef, useState } from "react"

export const useCountdown = (initValue: number = 20) => {
  const [num , setNum] = useState<number>(initValue)
  let intervalRef = useRef<ReturnType<typeof setInterval>>(null)

  const decreaseNum = () => {
    setNum((prev) => {
      if (prev === 1) {
        clearInterval(intervalRef.current);
      }
      return prev - 1;
    });
  };

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000)

    return () => clearInterval(intervalRef.current)
  }, [])

  return {
    num
  } 
}