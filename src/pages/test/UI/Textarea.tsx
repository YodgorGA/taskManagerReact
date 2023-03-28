import React,{FC, useEffect, useState} from 'react'
import styled from '@emotion/styled'
import {StyledFilterInput} from './FilterInput'
import { colors, ValueDataKeyFunc, ValueFunc } from 'shared';

interface TextareaProps{
    width?:string,
    height?:string,
    placeholder:string,
    callback?:ValueDataKeyFunc|ValueFunc
    dataSource?:string;
    dataKey?:string;
    hasValue?:boolean;
    monitorableState?:boolean;
}

const StyledTextarea = styled.textarea<TextareaProps>`
    font-family:"Roboto";
    font-size:14px;
    font-weight:400;
    line-height:150%;
    padding: 5px 10px;
    resize:none;
    width: ${({width})=>width||'100%'};
    height: ${({height})=>height||'100px'};
    box-sizing: border-box;
    border: 1px solid ${colors.generalColor.white};
    box-shadow: ${({hasValue})=>hasValue
    && `0px 0px 2px 2px ${colors.inputColors.primary.shadow}`
    || `inset 0px 0px 2px 1px ${colors.textColors.labelTextColor}`
    };
    border-radius: 5px;
    &::-webkit-scrollbar{
        width: 0px;
        height: 0;
    }
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
`
export const Textarea:FC<TextareaProps> = ({callback,dataKey,monitorableState,placeholder,...TextareaProps}) => {
    const [value,setValue] = useState<string>('');
    const [hasValue,setHasValue] = useState<boolean>(value.length > 0)
    const changeHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
        let currentTargetValue = e.currentTarget.value
        currentTargetValue.length > 0? setHasValue(true):setHasValue(false)
        setValue(currentTargetValue)
        if(dataKey !== undefined && callback !== undefined){
        callback(e.currentTarget.value,dataKey)
        }
    }
    useEffect(()=>{setValue('');setHasValue(false)},[monitorableState])
    return(
        <StyledTextarea onChange={changeHandler} hasValue={hasValue} placeholder={placeholder} {...TextareaProps}/>
    )
}
export {}