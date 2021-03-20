import { useContext } from "react"
import { ChallengesContext } from "../context/ChallengesContext"

export function useChallenges() {
  const context = useContext(ChallengesContext)

  return context
}