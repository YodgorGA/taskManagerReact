import React,{FC, useEffect, useState} from 'react'
import { useAppDispatch} from 'app/store/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/userProfile.scss'
import { locationState } from 'shared';
import { useUserIsAuth, useUserState } from 'entities/user';
import { removeCurrentUser } from 'entities/user';
interface UserProfileProps{
    userProfilePhoto:string,
}

export const UserProfile:FC<UserProfileProps> = ({...UserProfileProps}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isAuth = useUserIsAuth();
    const currentUser = useUserState().currentUser;
    const userProfilePhoto = (currentUser?.photoUrl)? currentUser.photoUrl : 'img/pageHeader/userProfile.png';

    const [dropdownState, setDropdownState] = useState<string>('closed');

    const profileClickHandler = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(e.currentTarget.childNodes.length > 2){
            dropdownState === 'closed' ? setDropdownState('open') : setDropdownState('closed');
        }
    }
    const goToProfileClickHandler = (e:React.MouseEvent<HTMLDivElement,MouseEvent>) =>{
        console.log(e.currentTarget.nodeValue);
        navigate('/users/0.1029485710');
        (location.pathname.includes('/users/'))? setDropdownState('closed') : setDropdownState('open');  
    }
    const logOutButtonClickHandler = () =>{
        dispatch(removeCurrentUser());
        if(isAuth === false){
            navigate('/login',{state:{from:location.pathname} as locationState});
        }
    }
    return (
        <div className="headerPage_userProfile headerUserProfile" onMouseDown={profileClickHandler}>
            <div className="headerUserProfile_name">{currentUser?.username}</div>
            <div className="headerUserProfile_img"><img alt='Фото профиля' src={userProfilePhoto}></img></div>
            {
                (dropdownState === "closed")? <div></div> 
                : 
                <div className="headerUserProfile_dropdown dropdownHeaderUserProfile">
                    <div onMouseDown={goToProfileClickHandler}  className="dropdownHeaderUserProfile_lookProfile">Посмотреть профиль</div>
                    <div onMouseDown={logOutButtonClickHandler} className="dropdownHeaderUserProfile_exit">Выйти из системы</div>
                </div>
            }
        </div>
    )
}

export {}