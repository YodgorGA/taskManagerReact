import React,{FC} from 'react'

interface ApplyEditingProps{
  callback:()=>void;
}

export const ApplyEditing:FC<ApplyEditingProps> = ({callback}) => {
    const applyButtonClickHandler = () =>{
        callback()
    }
    return (
    <div onClick={applyButtonClickHandler} className="addTimeForm__visible_applyBtn"></div>
  )
}

export {}