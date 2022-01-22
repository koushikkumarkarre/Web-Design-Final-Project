import React from 'react'
import { useAlert } from 'react-alert'
// Custome Alert Component
const Alert = () => {
  const alert = useAlert()

  return (
    <button
      onClick={() => {
        alert.show('Oh look, an alert!')
      }}
    >
      Show Alert
    </button>
  )
}

export default Alert