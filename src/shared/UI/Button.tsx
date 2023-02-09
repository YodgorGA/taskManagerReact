import React,{FC} from 'react'
import '../styles/button.scss'

interface ButtonProps{
    content:string
    color:string
    parentClass:string
    additionalClass?:string
    callback?:()=>void
}

export const Button:FC<ButtonProps> = ({callback,additionalClass,parentClass,content,color,...ButtonProps}) => {
    
    return (
    <div onMouseDown={callback}className={`${parentClass}_button ${(additionalClass)?additionalClass:''} _button__${color}`}>
        {content}
    </div>
  )
}

export {}