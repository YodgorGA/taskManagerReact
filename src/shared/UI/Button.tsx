import React,{FC} from 'react'
import '../styles/button.scss'

interface ButtonProps{
    content:string
    color:string
    parentClass:string
    additionalClass?:string
    purpose?:string
    pagintationCallback?:(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>void
    callback?:()=>void;
}

export const Button:FC<ButtonProps> = ({pagintationCallback,purpose,callback,additionalClass,parentClass,content,color,...ButtonProps}) => {
    const clickHandler = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        if(color !== 'disabled'){
            if(purpose === 'paginationNubmer'){
                pagintationCallback && pagintationCallback(e)
            }
            else{
                callback && callback()
            }
            
        }
    }
    return (
    <div onMouseDown={clickHandler} className={`${parentClass}_button ${(additionalClass)?additionalClass:''} _button__${color}`}>
        {content}
    </div>
  )
}

export {}