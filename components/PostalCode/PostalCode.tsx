import React from 'react'
import Text from '../Typography/Text'
import { Card, StyledForm, Input, Button } from './PostalCodeElements'
import usePostalCode from './usePostalCode'

const InputCard = () => {
  const { postalCode, response, isloading, error, handleChange, handleSubmit } =
    usePostalCode('')

  if (error)
    return (
      <Card>
        <Text font="gothamMedium" size="small">
          Erreur : code postal non valide.
        </Text>
      </Card>
    )

  if (isloading)
    return (
      <Card>
        <Text font="gothamMedium" size="small">
          Chargement...
        </Text>
      </Card>
    )

  return (
    <Card>
      {response ? (
        <Text font="gothamMedium" size="medium">
          {response}
        </Text>
      ) : (
        <>
          {' '}
          <Text font="gothamMedium" size="large" color="darkGreen">
            Recevez les règles d&apos;urbanisme pour votre ville !
          </Text>
          <StyledForm onSubmit={handleSubmit}>
            <Text font="gothamMedium" size="tiny">
              Votre code postal :
            </Text>
            <Input type="text" value={postalCode} onChange={handleChange} />
            <Button type="submit">
              <Text font="gothamMedium" size="small" color="white">
                Valider
              </Text>
            </Button>
          </StyledForm>
        </>
      )}
    </Card>
  )
}

export default InputCard
