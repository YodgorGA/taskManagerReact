import styled from '@emotion/styled'
import { FC, useState } from 'react'
import {colors,ValueFunc,ValueDataKeyFunc} from 'shared';



interface InputProps{
  variant:'red'|'primary'|'green';
  type:string;
  placeholder:string;
  width?:string;
  hasValue?:boolean;
  propsValue?:string;
  callback?:ValueFunc|ValueDataKeyFunc
  dataKey?:string;
  monitorableState?:boolean;
}


export const Input:FC<InputProps> = ({dataKey,placeholder,type,callback,propsValue,...InputProps}) =>{
    const [value,setValue] = useState<string>(propsValue!==undefined?propsValue:'')
    const [hasValue,setHasValue] = useState<boolean>(false);
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
      let targeValue = e.currentTarget.value
      setValue(targeValue)
      targeValue.length > 0?setHasValue(true):setHasValue(false)
      if(callback && dataKey){
        callback(targeValue,dataKey)
        console.log(targeValue,'value from input');
      }
    }
    return (
        <StyledInput hasValue={hasValue} placeholder={placeholder} type={type} onChange={changeHandler} value={value} {...InputProps}></StyledInput>
    )
}

const StyledInput = styled.input<InputProps>`
    height: 24px;
    width: ${({width})=>width || 'inherit'};
    border-radius: 3px;
    box-sizing: border-box;
    padding: 5px 10px;
    border:1px solid ${({variant,hasValue})=>hasValue && colors.inputColors[variant].default || colors.disabledColors.disabledElementTextColor};
    font-family:'Inter';
    font-size:14px;
    font-weight:400;
    line-height:100%;
    &::placeholder{
      color:${colors.disabledColors.disabledElementTextColor}
    }
    &:hover {
        box-shadow: 0px 0px 2px 2px ${({variant})=>colors.inputColors[variant].shadow};
    }
    &:focus{
        box-shadow: 0px 0px 2px 2px ${({variant})=>colors.inputColors[variant].shadow};
    }
`
export {}