import React,{FC, useEffect, useState} from 'react'
import '../styles/input.scss'

interface InputProps{
    type:string,
    placeholder:string,
    monitorableState?:boolean[]|boolean,
    parentClass?:string;
    returnValueCallback?:(key:string,value:string)=>void
    purpose?:string
}

export const Input:FC<InputProps> = ({purpose,returnValueCallback,parentClass,monitorableState,type,placeholder,...InputProps}) => {
    const [module,setModule] = useState<string>('');
    const [value,setValue] = useState<string>('');
    
    const getInputState = (e:React.ChangeEvent<HTMLInputElement>)=>{
        (e.currentTarget.value.length<1)?setModule(''):setModule('__active');
        setValue(e.currentTarget.value);
        if(parentClass !== undefined){
            returnValueCallback && returnValueCallback(parentClass,e.currentTarget.value);
        }
    }
    useEffect(()=>{
        setValue('');
        setModule('');
    },[monitorableState])
    return (
    <input type={type} className={`_input_${purpose}${module}`} onChange={getInputState} value={value} placeholder={placeholder}/>
  )
}

export {}