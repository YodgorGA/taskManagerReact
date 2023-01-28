import React,{FC, useState} from 'react'

interface UserProfileProps{
    userName:string,
    userProfilePhoto:string,
}

export const UserProfile:FC<UserProfileProps> = ({userName,userProfilePhoto,...UserProfileProps}) => {
    const [dropdownState, setDropdownState] = useState<string>('closed');
    const clickHandler = () => {
        dropdownState === 'closed' ? setDropdownState('open') : setDropdownState('closed')
    }
    return (
        <div className="headerPage_userProfile headerUserProfile" onMouseDown={clickHandler}>
            <div className="headerUserProfile_name">{userName}</div>
            <div className="headerUserProfile_img"><img src={userProfilePhoto}></img></div>
            {
                (dropdownState === "closed")? <div></div> 
                : 
                <div className="headerUserProfile_dropdown dropdownHeaderUserProfile">
                    <div className="dropdownHeaderUserProfile_lookProfile">Посмотреть профиль</div>
                    <div className="dropdownHeaderUserProfile_exit">Выйти из системы</div>
                </div>
            }
        </div>
    )
}

export {}