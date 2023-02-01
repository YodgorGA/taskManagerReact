import React,{FC} from 'react'
import { Input } from 'shared'
import { Button } from 'shared'

export const LoginForm:FC = () => {
  return (
    <div className="loginPage_form formLoginPage">
          <div className="formLoginPage_title">Авторизация</div>
          <div className="formLoginPage_items">
              <label>Логин</label>
              <Input type='text' placeholder='Введите логин'/>
              <label>Пароль</label>
              <Input type='password' placeholder='Введите пароль'/>
          </div>
          <Button parentClass='formLoginPage' color='success' content='Вход' />
      </div>
  )
}

export {}