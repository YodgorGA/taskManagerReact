import React,{FC, useState} from 'react'

interface FormitemProps{
    isLabelNeed:boolean,
    parentClass:string,
    label?:string,
    purpose?:string,
    type:string,
    additionalClass:string,
    placeholder?:string,
}

export const Formitem:FC<FormitemProps> = ({placeholder,additionalClass,isLabelNeed,parentClass,type,label,purpose,...FormitemProps}) => {
    const [module,setModule] = useState<string>('');
    const [text,setText] = useState<string>('');
    const getInputState = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.currentTarget.value.length <1){
            setModule('')
        }
        else{
            setModule('__active');
            console.log(e.currentTarget.value.length);
        }
        setText(e.currentTarget.value);
    }
    if(isLabelNeed === true){
        return (
            <div className={`${parentClass}_textInput textInput__${additionalClass}`}>
                <label className={`textInput__${additionalClass}_label`} htmlFor='email'>{label}</label>
                <input type={type} className={`textInput__${additionalClass}${(purpose)?'_'+purpose:''}${module} _input${module}`} onChange={getInputState} value={text}/>
            </div>
        )
    }
    else{
        return (
            <div className={`${parentClass}_textInput textInput__${additionalClass}`}>
                <input placeholder={placeholder} type={type} className={`textInput__${additionalClass}${(purpose)?'_'+purpose:''}${module} _input${module}`} onChange={getInputState} value={text}/>
            </div>
        )
    }
}

export {}