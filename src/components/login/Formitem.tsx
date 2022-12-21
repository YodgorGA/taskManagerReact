import React,{FC, useState} from 'react'

interface FormitemProps{
    label:string,
    purpose:string,
    type:string
}

export const Formitem:FC<FormitemProps> = ({type,label,purpose,...FormitemProps}) => {
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
    return (
    <div className="formLoginPage_item itemFormLoginPage">
        <label className='itemFormLoginPage_label' htmlFor='email'>{label}</label>
        <input type={type} className={`itemFormLoginPage_${purpose} _input${module}`} onChange={getInputState} value={text}/>
    </div>
  )
}

export {}