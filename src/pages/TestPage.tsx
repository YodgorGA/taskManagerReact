import React from 'react'
import { Button } from '../components/page/Button'
import { CardHeader } from '../components/page/CardHeader'
import { PageHeader } from '../components/page/PageHeader'
import { UserProfile } from '../components/page/UserProfile'

export const TestPage = () => {
  return (
    <>
        <Button color='primary' content='Test button' parentClass='testPage'/>
        <CardHeader parentClass='testPage' title='Test Card Header Title'/>
        <UserProfile userName='Получу из апишки' userProfilePhoto='/img/pageHeader/userImage.png'/>
    </>
  )
}

export {}