import React,{FC} from 'react'
import { Link } from 'react-router-dom'

interface NavitemProps{
    content:string,
    location:string,
    purpose:string,
}
export const NavItem:FC<NavitemProps> = ({content,location,purpose,...NavitemProps}) => {
    if(purpose === location){
        return(
            <Link to={purpose} className={`navHeader_item__active`}>
                {content}
            </Link>
        )
    }
    else{
        return(
            <Link to={purpose} className={`navHeader_item`}>
                {content}
            </Link>
        )
    }
}

export {}