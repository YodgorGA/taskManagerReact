import React,{FC}from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/navbar.scss'

export const Navbar:FC = () => {
    const location = useLocation().pathname; 
    return (
    <div className="headerPage_nav navHeader">
      <Link to={'/tasks'} className={location.includes('/tasks')? 'navHeader_item__active' : 'navHeader_item'}>Задания</Link>
      <Link to={'/users'} className={location.includes('/users')? 'navHeader_item__active' : 'navHeader_item'}>Пользователи</Link>
    </div>
  )
}

export {}