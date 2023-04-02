import React,{FC, useEffect, useState} from 'react'
import 'shared/styles/textarea.scss'

interface TextareaProps{
    purpose:string;
    monitorableState?:boolean,
    placeholder:string
    returnDataForApiCallback?:(dataSource:string,key:string,value:string)=>void,
    dataSource?:string
    parentClass?:string,
    propsValue?:string,
}


export const Textarea:FC<TextareaProps> = ({propsValue,parentClass,dataSource,returnDataForApiCallback,placeholder,purpose,monitorableState,...TextareaProps}) => {
    const [textareaValue,setTextareaValue] = useState<string>(propsValue !==undefined?propsValue:'');
    const [module,setModule] = useState<string>('');
    const textareaChangeHandler = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        (e.currentTarget.value.length <1)?setModule(''):setModule('__active');
        setTextareaValue(e.currentTarget.value);
        if(dataSource && parentClass && returnDataForApiCallback){
            returnDataForApiCallback(dataSource,parentClass,e.currentTarget.value);
        }
    }

    useEffect(()=>{
        if(monitorableState !== undefined){
            setTextareaValue('')
            setModule('')
        }
    },[monitorableState])
    return (
        <textarea 
            onChange={textareaChangeHandler} 
            value={textareaValue} 
            placeholder={placeholder} 
            className={`_textarea_${purpose} _textarea${propsValue !== undefined?'__active':module}`}
        />
    )
}

export {}