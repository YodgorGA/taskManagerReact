import React,{FC, useState} from 'react'
import { useAppDispatch} from 'app/store/hooks'
import { Input, Label,Button } from 'shared'
import { resetInput } from 'shared'
import { useGetUserAuthDataMutation } from '../lib/api/authApi' 
import {setUser} from 'entities/user/model/userSlice'
import { useNavigate } from 'react-router-dom'
// import {authInfo} from 'app/types/index'
import '../styles/loginForm.scss'
// import { UserSet } from 'entities/user/model/selectors'

export const LoginForm:FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const [login,setLogin] = useState<string | null>();  
  const [password,setPassword] = useState<string | null>();
  const [isDataSended,setIsDataSended] = useState<boolean>(false);

  const [getUserInfo,{isSuccess}] = useGetUserAuthDataMutation();
  
  const loginInputChangeHanler = (value:string)=>{
    setLogin(value)
  }
  const passwordInputChangeHandler = (value:string)=>{
    setPassword(value)
  }
  const buttonClickHandler = async ()=>{
    await getUserInfo({login,password}).unwrap().then((resp) =>{
      const {about,id,photoUrl,username} = resp
      dispatch(setUser({about,id,photoUrl,username}));
      navigate('/')
    });
    resetInput(setIsDataSended)
    
  }


  return (
    <div className="loginPage_form formLoginPage">
          <div className="formLoginPage_title">Авторизация</div>
          <div className="formLoginPage_items">
              <Label content='Логин'/>
              <Input monitorableState={isDataSended} returnValueCallback={loginInputChangeHanler} type='text' placeholder='Введите логин'/>
              <Label content='Пароль'/>
              <Input monitorableState={isDataSended} returnValueCallback={passwordInputChangeHandler} type='password' placeholder='Введите пароль'/>
          </div>
          <Button callback={buttonClickHandler} parentClass='formLoginPage' color='success' content='Вход' />
      </div>
  )
}

export {}