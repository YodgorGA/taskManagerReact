import React,{FC}from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Navbar:FC = () => {
    const location = useLocation().pathname; 
    return (
    <div className="headerPage_nav navHeader">
      <Link to={'/tasks'} className={location === '/tasks'? 'navHeader_item__active' : 'navHeader_item'}>Задания</Link>
      <Link to={'/users'} className={location === '/users'? 'navHeader_item__active' : 'navHeader_item'}>Пользователи</Link>
    </div>
  )
}

export {}