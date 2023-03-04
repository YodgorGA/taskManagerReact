import React,{FC}from 'react'
import { LoginFormWidget } from 'wigets/loginForm'
import 'pages/login/styles/loginPage.scss'


export const LoginPage:FC = () => {
  return (
    <div className="loginPage_container _container">
      <LoginFormWidget/>
    </div>
  )
}

export {}