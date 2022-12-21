import React,{FC, useState} from 'react'
import { DropdownUserProfile } from './DropdownUserProfile'
import { Navbar } from './Navbar'

export const PageHeader:FC = () => {
  const [dropdownState,setDropdownState] = useState<string>('hidden')
  const userProfieClickHandler = ()=>{
    (dropdownState === 'hidden')?setDropdownState('visible'):setDropdownState('hidden');
  }
  return (
    <div className='page_header _container headerPage'>
      <div className="headerPage_logo"></div>
      <Navbar/>
      <div className="headerPage_userProfile headerUserProfile" onMouseDown={userProfieClickHandler}>
        <div className="headerUserProfile_name">Вставить имя из апишки</div>
        <div className="headerUserProfile_img"></div>
        <DropdownUserProfile state={dropdownState}/>
      </div>
    </div>
  )
}

export {}