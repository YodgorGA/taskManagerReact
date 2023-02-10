import React,{FC} from 'react'
import { useAppSelector } from 'app/store/hooks'
import { selectAuthInfo } from 'app/store/slices/authSlice'
import { Input, Label,Button } from 'shared'
import { authInfo } from 'app/types'

export const LoginForm:FC = () => {
  const authInfoSelector:authInfo = useAppSelector(selectAuthInfo);
  console.log(authInfoSelector);

  return (
    <div className="loginPage_form formLoginPage">
          <div className="formLoginPage_title">Авторизация</div>
          <div className="formLoginPage_items">
              <Label content='Логин'/>
              <Input type='text' placeholder='Введите логин'/>
              <Label content='Пароль'/>
              <Input type='password' placeholder='Введите пароль'/>
          </div>
          <Button parentClass='formLoginPage' color='success' content='Вход' />
      </div>
  )
}

export {}