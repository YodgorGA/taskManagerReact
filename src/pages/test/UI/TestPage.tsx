import React from 'react'
import { Button } from '../../../shared/UI/Button'
import { CardHeader } from '../../../shared/UI/CardHeader'
import { UserProfile } from '../../../features/userProfile/UI/UserProfile'
import { Input } from 'shared/UI/Input'

export const TestPage = () => {
  return (
    <>
        <Button color='primary' content='Test button' parentClass='testPage'/>
        <CardHeader parentClass='testPage' title='Test Card Header Title'/>
        <UserProfile userName='Получу из апишки' userProfilePhoto='/img/pageHeader/userImage.png'/>
        <Input placeholder='Введите что-нибудь' type='text'/>
    </>
  )
}

export {}