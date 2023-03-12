import React from "react"
import { useLayout } from "../../context/LayoutContext"
export function NewWorkout() {
  const { title } = useLayout()

  return (
    <div>
      <h1 className="title">{title}</h1>
    </div>
  )
}
