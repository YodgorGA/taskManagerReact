import React,{FC} from 'react'
import '../styles/header.scss'

interface PageHeaderProps{
  navBar: React.ReactNode
  userProfile: React.ReactNode
}

export const PageHeader:FC<PageHeaderProps> = ({navBar,userProfile,...PageHeaderProps}) => {
  return (
    <div className='page_header _container headerPage'>
      <div className="headerPage_logo"></div>
      { navBar }
      { userProfile }
    </div>
  )
}

export {}