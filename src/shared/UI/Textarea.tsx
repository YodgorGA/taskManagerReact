import React,{FC, useEffect, useState} from 'react'
import '../styles/textarea.scss'

interface TextareaProps{
    purpose:string;
    monitorableState:boolean,
}

export const Textarea:FC<TextareaProps> = ({purpose,monitorableState,...TextareaProps}) => {
    const [commentValue,setCommentValue] = useState<string>('');
    const [module,setModule] = useState<string>('');
    const textareaChangeHandler = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        if(e.currentTarget.value.length <1){
            setModule('')
        }
        else{
            setModule('__active');
        }
        setCommentValue(e.currentTarget.value);
    }
    useEffect(()=>{
        setCommentValue('');
        setModule('');
    },[monitorableState])
    return (
        <textarea onChange={textareaChangeHandler} value={commentValue} placeholder={'Текст комментария'} className={`_textarea_${purpose} _textarea${module}`}/>
    )
}

export {}