import React,{FC, useState} from 'react'

interface FilterInputProps{
    placeholder:string,
}

export const FilterInput:FC<FilterInputProps> = ({placeholder,...FilterInputProps}) => {
    const [inputValue,setInputValue] = useState<string>('');
    const [module,setModule] = useState<string>('');
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if(e.currentTarget.value.length <1){
            setModule('')
        }
        else{
            setModule('__active');
        }
        setInputValue(e.currentTarget.value);
    }
    return (
    <input className={`_filter_input${module}`}type='text' placeholder={placeholder} value={inputValue} onChange={changeHandler}/>
  )
}

export {}