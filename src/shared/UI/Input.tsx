import React,{FC, useEffect, useState} from 'react'
import 'shared/styles/input.scss'

interface InputProps{
    type:string,
    placeholder:string,
    monitorableState?:boolean[]|boolean,
    parentClass?:string,
    purpose?:string,
    returnValueCallback?:(value:string)=>void,
    returnDataForApiCallback?:(dataSource:string,key:string,value:string)=>void,
    dataSource?:string,
    propsValue?:string,
}


export const Input:FC<InputProps> = ({propsValue,dataSource,returnDataForApiCallback,placeholder,returnValueCallback,type,monitorableState,parentClass,purpose})=>{
    const [module,setModule] = useState<string>('');
    const [value,setValue] = useState<string>(propsValue !==undefined?propsValue:'');
    
    const getInputState = (e:React.ChangeEvent<HTMLInputElement>)=>{
        (e.currentTarget.value.length<1)?setModule(''):setModule('__active');
        setValue(e.currentTarget.value);
        returnValueCallback && returnValueCallback(e.currentTarget.value);
        if(dataSource && parentClass && returnDataForApiCallback){
            returnDataForApiCallback(dataSource,parentClass,e.currentTarget.value);
        }
    }

    useEffect(()=>{
    if(monitorableState !== undefined){
        setValue('');
        setModule('');
    }
    },[monitorableState])
    return (
    <input 
        type={type} 
        className={`_input${purpose !== undefined?'_'+purpose:''}${propsValue !== undefined?'__active':module}`} 
        onChange={getInputState}
        value={value} 
        placeholder={placeholder}
    />
  )
}

export {}