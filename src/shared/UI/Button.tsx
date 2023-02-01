import React,{FC} from 'react'
import { useAppDispatch } from '../../app/store/hooks'
interface ButtonProps{
    content:string
    color:string
    parentClass:string
    additionalClass?:string
}

export const Button:FC<ButtonProps> = ({additionalClass,parentClass,content,color,...ButtonProps}) => {
    return (
    <div className={`${parentClass}_button ${(additionalClass)?additionalClass:''} _button__${color}`}>
        {content}
    </div>
  )
}

export {}