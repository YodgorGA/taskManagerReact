import React,{FC} from 'react'

interface DropdownUserProfileState{
    state:string;
}

export const DropdownUserProfile:FC<DropdownUserProfileState> = ({state,...DropdownUserProfile}) => {
    if(state === 'visible'){
        return (
            <div className="headerUserProfile_dropdown dropdownHeaderUserProfile">
                  <div className="dropdownHeaderUserProfile_lookProfile">Посмотреть профиль</div>
                  <div className="dropdownHeaderUserProfile_exit">Выйти из системы</div>
            </div>
          )
    }
    else{
        return (<div></div>)
    }
}

export {}