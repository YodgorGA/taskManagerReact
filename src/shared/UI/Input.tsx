import React,{FC, useEffect, useState} from 'react'
import '../styles/input.scss'

interface InputProps{
    type:string,
    placeholder:string,
    monitorableState?:boolean[]|boolean,
    parentClass?:string;
}

export const Input:FC<InputProps> = ({parentClass,monitorableState,type,placeholder,...InputProps}) => {
    const [module,setModule] = useState<string>('');
    const [value,setValue] = useState<string>('');
    const getInputState = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.currentTarget.value.length <1){
            setModule('')
        }
        else{
            setModule('__active');
        }
        setValue(e.currentTarget.value);
    }
    useEffect(()=>{
        setValue('');
        setModule('');
    },[monitorableState])
    return (
    <input type={type} className={`${parentClass !== undefined?parentClass:''}_input${module}`} onChange={getInputState} value={value} placeholder={placeholder}/>
  )
}

export {}