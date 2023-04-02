import React,{FC} from 'react'
import styled from '@emotion/styled'
import { useLocation, useNavigate } from 'react-router-dom';
import { colors } from 'shared';

interface NavbarProps{

}

interface NavItemProps{
    isActive?:boolean;
}

export const Navbar:FC<NavbarProps> = ({...NavbarProps}) => {
    const locationPath = useLocation().pathname;
    const navigate = useNavigate();
    return (
        <StyledNavbar {...NavbarProps}>
            <NavItem 
                onClick={()=>navigate('/')}
                isActive={locationPath.includes('/users')? false:true}
            >
                Задания
            </NavItem>
            <NavItem 
                onClick={()=>navigate('/users')}
                isActive={locationPath.includes('/users')? true:false}
            >
                Пользователи
            </NavItem>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.nav<NavbarProps>`
    width: 260px;
    height: inherit;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap:10px;
`
const NavItem = styled.div<NavItemProps>`
    color:${colors.textColors.darkTextColor};
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 3px solid ${({isActive})=>isActive 
    && colors.generalColor.primaryColor
    || colors.generalColor.white
    };
    font-family:'Open Sans';
    font-weight:400;
    font-size:24px;
    line-height:137%;
    cursor: pointer;
`

export {}