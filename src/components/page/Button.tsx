import React,{FC} from 'react'

interface ButtonProps{
    content:string
    color:string
}

export const Button:FC<ButtonProps> = ({content,color,...ButtonProps}) => {
  return (
    <div className={`formLoginPage_button _button${color}`}>
        {content}
    </div>
  )
}

export {}