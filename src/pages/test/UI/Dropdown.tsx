import React,{FC, useEffect, useState} from 'react'
import styled from '@emotion/styled'
import { ValueDataKeyFunc, ValueFunc } from 'shared';
import { colors } from 'shared'
import { css } from '@emotion/react';

export interface DropdownProps{
    width?:string,
    active?:boolean,
    hasValue?:boolean,
    monitorableState?:boolean[]|boolean,
    dropdownItems?:string[],
    relatedData?:string[],
    defaultContent?:string,
    purpose?:string,
    dataKey?:string,
    propsValue?:string
    returnValue?: ValueDataKeyFunc | ValueFunc;
}


export const Dropdown:FC<DropdownProps> = ({monitorableState,returnValue,dataKey,defaultContent,dropdownItems,...DropdownProps}) => {
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const [isItemPicked,setIsItemPicked] = useState<boolean>(false);
    const [dropdownValue,setDropdownValue] = useState<string|null|undefined>(defaultContent)
    const dropdownClickHandler = () =>{
        setIsOpen(!isOpen);
    };
    const itemClickHandler = (e:React.MouseEvent<HTMLDivElement>) =>{
        setDropdownValue(e.currentTarget.textContent)
        setIsItemPicked(true);
        setIsOpen(false)
        if(dataKey && e.currentTarget.textContent !== null && returnValue){
            returnValue(e.currentTarget.textContent,dataKey);
        } 
    }
    useEffect(()=>{
        setIsItemPicked(false);
        setDropdownValue(defaultContent);
    },[monitorableState])
    return (
        <div style={{position:'relative'}}>
            <StyledDropdown hasValue={isItemPicked} active={isOpen} onClick={dropdownClickHandler} {...DropdownProps}  >
                {dropdownValue}
            </StyledDropdown>
            {
                isOpen && <DropdownMenu {...DropdownProps}>
                    {dropdownItems?.map((item)=>{
                        return <DropdownItem onClick={itemClickHandler}>{item}</DropdownItem>
                    })}
                </DropdownMenu>
            }
            
        </div>

    )
}

const DropdownItem = styled.div`
    font-family:'Inter';
    font-size:14px;
    font-weight:400;
    line-height:100%;
    height: 18px;
    width: 100%;
    background-color: ${colors.generalColor.white};
    cursor: pointer;
    padding: 2px 10px;
    box-sizing: border-box;
    overflow: hidden;
    &:hover{
        background-color: #E6E1FF;
    }
    &:active{
        background-color: #beb3f4;
    }
`

const DropdownMenu = styled.div<DropdownProps>`
    width: ${({width})=>width||'inherit'};
    box-sizing:border-box;
    min-height:fit-content;
    background-color: ${colors.generalColor.white};
    top:25px;
    left:0px;
    border-radius: 3px;
    padding: 5px 0px;
    z-index: 10;
    position:absolute;
    box-shadow: 0px 0px 2px 2px ${colors.inputColors.primary.shadow};
`

const activeDnButton = css`
    box-shadow:0px 0px 2px 2px ${colors.inputColors.primary.shadow};
    color:${colors.textColors.darkTextColor};
`
const defaultDnButton = css`
    border:1px solid ${colors.generalColor.white};
    box-shadow:inset 0px 0px 2px 1px ${colors.disabledColors.disabledElementTextColor};
    color:${colors.disabledColors.disabledElementTextColor};
`

const StyledDropdown = styled.div<DropdownProps>`
    height: 24px;
    width:${({width})=>width||'inherit'};
    background-color: ${colors.generalColor.white};
    ${({active})=>active && activeDnButton || defaultDnButton}
    ${({hasValue})=>hasValue && activeDnButton}
    border-radius: 3px;
    box-sizing: border-box;
    position: relative;
    padding:2px 5px 0px 10px;
    font-family:'Inter';
    font-size:14px;
    font-weight:400;
    line-height:140%;
    &:hover{
        border-color:${colors.generalColor.primaryColor}
    }
`
export {}