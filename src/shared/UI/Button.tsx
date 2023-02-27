import React,{FC} from 'react'
import '../styles/button.scss'

interface ButtonProps{
    content:string
    color:string
    parentClass:string
    additionalClass?:string
    callback?:(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>void
}

export const Button:FC<ButtonProps> = ({callback,additionalClass,parentClass,content,color,...ButtonProps}) => {
    const clickHandler = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        if(color !== 'disabled'){
            callback && callback(e)
        }
    }
    return (
    <div onMouseDown={clickHandler}className={`${parentClass}_button ${(additionalClass)?additionalClass:''} _button__${color}`}>
        {content}
    </div>
  )
}

export {}