import { useContext } from "react"
import { CountdownContext } from "../context/CountdownContext"

export function useCountdown() {
  const context = useContext(CountdownContext)

  return context
}