import React,{FC} from 'react'

interface DenyEditingProps{
  callback:()=>void;
}

export const DenyEditing:FC<DenyEditingProps> = ({callback}) => {
    const denyButtonClickHandler = () =>{
      callback()
    }
    return (
    <div onClick={denyButtonClickHandler} className="addTimeForm__visible_denyBtn"></div>
  )
}

export {}