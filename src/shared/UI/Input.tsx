import React,{FC, useEffect, useState} from 'react'
import '../styles/input.scss'

interface InputProps{
    type:string,
    placeholder:string,
    monitorableState?:boolean[]|boolean,
    parentClass?:string,
    purpose?:string,
    returnValueCallback?:(value:string)=>void,
    returnDataForFilterCallback?:(dataSource:string,key:string,value:string)=>void,
    dataSource?:string
}


export const Input:FC<InputProps> = ({dataSource,returnDataForFilterCallback,placeholder,returnValueCallback,type,monitorableState,parentClass,purpose})=>{
    const [module,setModule] = useState<string>('');
    const [value,setValue] = useState<string>('');
    
    const getInputState = (e:React.ChangeEvent<HTMLInputElement>)=>{
        (e.currentTarget.value.length<1)?setModule(''):setModule('__active');
        setValue(e.currentTarget.value);
        returnValueCallback && returnValueCallback(e.currentTarget.value);
        if(dataSource && parentClass && returnDataForFilterCallback){
            returnDataForFilterCallback(dataSource,parentClass,e.currentTarget.value);
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