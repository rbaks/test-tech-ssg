import React, { useState } from 'react'
import axios from 'axios'
import { APICartoResponse } from '../../lib/types'

const usePostalCode = (defaultValue: string) => {
  const [postalCode, setPostalCode] = useState(defaultValue)
  const [response, setResponse] = useState<string | null>(null)
  const [isloading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const getCity = () => {
    setIsLoading(true)
    axios
      .get<APICartoResponse[]>(
        `https://apicarto.ign.fr/api/codes-postaux/communes/${postalCode}`
      )
      .then((res) => {
        setResponse(`Le guide de l'urbanisme à ${res.data[0].nomCommune}`)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setPostalCode(e.currentTarget.value)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getCity()
  }

  return { postalCode, response, isloading, error, handleChange, handleSubmit }
}

export default usePostalCode
