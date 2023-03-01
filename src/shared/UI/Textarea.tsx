import React,{FC, useEffect, useState} from 'react'
import '../styles/textarea.scss'

interface TextareaProps{
    purpose:string;
    monitorableState:boolean,
    placeholder:string
    returnDataForApiCallback?:(dataSource:string,key:string,value:string)=>void,
    dataSource?:string
    parentClass?:string,
}

export const Textarea:FC<TextareaProps> = ({parentClass,dataSource,returnDataForApiCallback,placeholder,purpose,monitorableState,...TextareaProps}) => {
    const [textareaValue,setTextareaValue] = useState<string>('');
    const [module,setModule] = useState<string>('');
    const textareaChangeHandler = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        (e.currentTarget.value.length <1)?setModule(''):setModule('__active');

        setTextareaValue(e.currentTarget.value);
        if(dataSource && parentClass && returnDataForApiCallback){
            returnDataForApiCallback(dataSource,parentClass,e.currentTarget.value);
        }
    }
    useEffect(()=>{
        setTextareaValue('');
        setModule('');
    },[monitorableState])
    return (
        <textarea onChange={textareaChangeHandler} value={textareaValue} placeholder={placeholder} className={`_textarea_${purpose} _textarea${module}`}/>
    )
}

export {}