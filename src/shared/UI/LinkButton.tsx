import React,{FC} from 'react'
import { Link } from 'react-router-dom'
import '../styles/button.scss'

interface LinkButtonProps{
    to:string,
    state?:{} | string[] | number[] | string | number | boolean | boolean[]
    content:string
    color:string
    parentClass:string
    additionalClass?:string
    callback?:()=>void
}

export const LinkButton:FC<LinkButtonProps> = ({callback,color,content,parentClass,additionalClass,state,to,...LinkButtonProps}) => {
  return (
    <Link onClick={callback} to={to} state={state} className={`${parentClass}_button ${(additionalClass)?additionalClass:''} _button__${color}`}>
        {content}
    </Link>
  )
}

export {}