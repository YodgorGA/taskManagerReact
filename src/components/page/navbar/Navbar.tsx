import React,{FC}from 'react'
import { useLocation } from 'react-router-dom'
import { NavItem } from './NavItem';

export const Navbar:FC = () => {
    const location = useLocation();
    return (
    <div className="headerPage_nav navHeader">
        <NavItem content='Задания' location={location.pathname} purpose='/tasks'/>
        <NavItem content='Пользователи' location={location.pathname} purpose='/users'/>
    </div>
  )
}

export {}