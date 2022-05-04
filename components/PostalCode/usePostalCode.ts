import React, { useState } from 'react'

export default function usePostalCode(defaultValue: string) {
  const [postalCode, setPostalCode] = useState(defaultValue)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setPostalCode(e.currentTarget.value)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(postalCode)
    setPostalCode('')
  }

  return { postalCode, handleChange, handleSubmit }
}
