import React,{FC, useEffect, useState} from 'react'

interface InputProps{
    type:string,
    placeholder:string,
    purpose?:string,
    monitorableState?:boolean[]|boolean,
}

export const Input:FC<InputProps> = ({monitorableState,type,placeholder,...InputProps}) => {
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
    <input type={type} className={`_input${module}`} onChange={getInputState} value={value} placeholder={placeholder}/>
  )
}

export {}