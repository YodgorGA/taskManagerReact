import React,{FC, useEffect, useState} from 'react'
import styled from '@emotion/styled'
import { colors,ValueDataKeyFunc,ValueFunc } from 'shared';

interface FilterInputProps{
    width?:string,
    placeholder:string,
    callback?:ValueDataKeyFunc|ValueFunc
    dataSource?:string;
    dataKey?:string;
    hasValue?:boolean;
    monitorableState?:boolean;
    type?:string
}


export const StyledFilterInput = styled.input<FilterInputProps>`
    font-family:"Roboto";
    font-size:14px;
    font-weight:400;
    line-height:150%;
    padding: 5px 10px;
    width: ${({width})=>width||'100%'};
    height: 24px;
    box-sizing: border-box;
    border: 1px solid ${colors.generalColor.white};
    box-shadow: ${({hasValue})=>hasValue
    && `0px 0px 2px 2px ${colors.inputColors.primary.shadow}`
    || `inset 0px 0px 2px 1px ${colors.textColors.labelTextColor}`
    };
    border-radius: 3px;
    &::placeholder{
        color:${colors.textColors.labelTextColor};
    }
    &:hover{
        border-color:${colors.inputColors.primary.hover};
    }
    &:focus{
        border-color:${colors.inputColors.primary.hover};
        box-shadow: 0px 0px 2px 1px ${colors.inputColors.primary.active};
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0; 
    }
`
export const FilterInput:FC<FilterInputProps> = ({type,monitorableState,dataSource,dataKey,callback,placeholder,...FilterInputProps}) => {
    const [value,setValue] = useState<string>('');
    const [hasValue,setHasValue] = useState<boolean>(value.length > 0)
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        let currentTargetValue = e.currentTarget.value
        currentTargetValue.length > 0? setHasValue(true):setHasValue(false)
        setValue(currentTargetValue)
        if(dataKey !== undefined && callback !== undefined){
        callback(e.currentTarget.value,dataKey)
        }
    }
    useEffect(()=>{setValue('');setHasValue(false)},[monitorableState])
    return ( 
    <StyledFilterInput hasValue={hasValue} value={value} type={type&&type||'text'} onChange={changeHandler} placeholder={placeholder} {...FilterInputProps}/>)
}

export {}