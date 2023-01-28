import React,{FC}from 'react'
import { Formitem } from '../components/login/Formitem'
import { Button } from '../components/page/Button'

export const LoginPage:FC = () => {
  return (
    <div className="loginPage_container _container">
      <div className="loginPage_form formLoginPage">
          <div className="formLoginPage_title">Авторизация</div>
          <div className="formLoginPage_items">
              <Formitem isLabelNeed={true} parentClass='formLoginPage' additionalClass='formLoginPage'type='text' label='Логин' purpose='email'/>
              <Formitem isLabelNeed={true} parentClass='formLoginPage' additionalClass='formLoginPage'type='password' label='Пароль' purpose='password'/>
          </div>
          <Button parentClass='formLoginPage'color='success' content='Вход' />
      </div>
    </div>
  )
}

export {}