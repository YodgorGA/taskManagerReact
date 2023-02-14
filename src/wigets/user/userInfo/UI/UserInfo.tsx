import React,{FC} from 'react'
import { Label } from 'shared';
import '../styles/userInfo.scss'
interface UserInfoProps{
    userProfilePhoto:string;
}

export const UserInfo:FC<UserInfoProps> = ({userProfilePhoto,...UserInfoProps}) => {
    return (
        <div className={`userPage_userInfo userPageUserInfo`}>
            <div className="userPageUserInfo_profilePhoto"><img alt='Фото профиля' src={userProfilePhoto}></img></div>
            <div className="userPageUserInfo_profileDescription userInfoProfileDescription">
                <Label content='О себе'/>
                <p className='userInfoProfileDescription_content'>
                    Будет получен из апи позже <br/>
                    Возможно даже работает как надо <br/>
                    Хотя есть большие сомнения на этот счет
                </p>
            </div>
        </div>
    )
}

export {}