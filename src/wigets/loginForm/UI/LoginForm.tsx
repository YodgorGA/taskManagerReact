import React,{FC, useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Label,Button,locationState } from 'shared'
import { Input } from 'shared/UI/Input';
import { useGetUserAuthDataMutation } from 'entities/user' 
import { useAppDispatch } from 'app/store/hooks'
import { setCurrentUser } from 'entities/user'
import 'wigets/loginForm/styles/loginForm.scss'

interface IUserCredentals{
  login:string,
  password:string
}

export const LoginForm:FC = () => {
  const navigate = useNavigate()
  const locationState:locationState = useLocation().state;
  const dispatch = useAppDispatch();

  const [login,setLogin] = useState<string>();
  const [password,setPassword] = useState<string>();
  const [inputVariant,setInputVariant] = useState<'red'|'primary'|'green'>('primary')

  const [getUserInfo] = useGetUserAuthDataMutation();
  
  const buttonClickHandler = async ()=>{
    console.log(login,password);
    
    await getUserInfo({login,password}).unwrap().then((resp) =>{
      //extracting data from response
      const {about,id,photoUrl,username} = resp
      //push this data to store
      dispatch(setCurrentUser({about,id,photoUrl,username}));
      //check where are from a user redirected to login
      if(locationState === null || locationState.from !== null && locationState.from === '/login'){return navigate('/')}
      // redirect him back after authorization
      navigate(''+locationState.from)
    }).catch((error)=>{ 
      console.log(error);
         
      setInputVariant('red');
      setTimeout(()=>{setInputVariant('primary')},500)
    });
  }
  
  return (
    <div className="loginPage_form formLoginPage">
          <div className="formLoginPage_title">Авторизация</div>
          <div className="formLoginPage_items">
              <Label content='Логин'/>
              <Input
                variant={inputVariant} 
                callback={setLogin} 
                type='text' 
                placeholder='Введите логин'
                dataKey='login'
              />
              <Label content='Пароль'/>
              <Input 
                variant={inputVariant} 
                callback={setPassword} 
                type='password' 
                placeholder='Введите пароль'
                dataKey='password'
              />
          </div>
          <Button callback={buttonClickHandler} variant='green' content='Вход' />
      </div>
  )
}

export {}