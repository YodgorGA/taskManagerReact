import React,{FC, useState} from 'react'

interface InputProps{
    type:string,
    placeholder:string,
    purpose?:string,
}

export const Input:FC<InputProps> = ({type,placeholder,...InputProps}) => {
    const [module,setModule] = useState<string>('');
    const [text,setText] = useState<string>('');
    const getInputState = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.currentTarget.value.length <1){
            setModule('')
        }
        else{
            setModule('__active');
        }
        setText(e.currentTarget.value);
    }
    return (
    <input type={type} className={`_input${module}`}onChange={getInputState} value={text} placeholder={placeholder}/>
  )
}

export {}