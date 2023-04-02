import React,{FC, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Input, Label,Button,locationState } from 'shared'
import { useGetUserAuthDataMutation } from 'entities/user' 
import { useAppDispatch } from 'app/store/hooks'
import { setCurrentUser } from 'entities/user'
import 'wigets/loginForm/styles/loginForm.scss'

export const LoginForm:FC = () => {
  const navigate = useNavigate()
  const locationState:locationState = useLocation().state;
  const dispatch = useAppDispatch();

  const [login,setLogin] = useState<string|null>(null);
  const [password,setPassword] = useState<string|null>(null);

  const [getUserInfo] = useGetUserAuthDataMutation();
  
  const loginInputChangeHanler = (value:string)=>{
    setLogin(value)
  }
  const passwordInputChangeHandler = (value:string)=>{
    setPassword(value)
  }
  const buttonClickHandler = async ()=>{
    await getUserInfo({login,password}).unwrap().then((resp) =>{
      const {about,id,photoUrl,username} = resp
      dispatch(setCurrentUser({about,id,photoUrl,username}));
      if(locationState.from === '/login'){return navigate('/')}
      navigate(''+locationState.from)
    });
  }
  
  return (
    <div className="loginPage_form formLoginPage">
          <div className="formLoginPage_title">Авторизация</div>
          <div className="formLoginPage_items">
              <Label content='Логин'/>
              <Input parentClass='_input' returnValueCallback={loginInputChangeHanler} type='text' placeholder='Введите логин'/>
              <Label content='Пароль'/>
              <Input parentClass='_input' returnValueCallback={passwordInputChangeHandler} type='password' placeholder='Введите пароль'/>
          </div>
          <Button callback={buttonClickHandler} parentClass='formLoginPage' color='success' content='Вход' />
      </div>
  )
}

export {}