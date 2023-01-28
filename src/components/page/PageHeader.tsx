import React,{FC, useState} from 'react'
import { Navbar } from './navbar/Navbar'

interface PageHeaderProps{
  userProfile: React.ReactElement
}

export const PageHeader:FC<PageHeaderProps> = ({userProfile,...PageHeaderProps}) => {
  const [dropdownState,setDropdownState] = useState<string>('hidden')
  const userProfieClickHandler = ()=>{
    (dropdownState === 'hidden')?setDropdownState('visible'):setDropdownState('hidden');
  }
  return (
    <div className='page_header _container headerPage'>
      <div className="headerPage_logo"></div>
      <Navbar/>
      {
        userProfile
      }
    </div>
  )
}

export {}