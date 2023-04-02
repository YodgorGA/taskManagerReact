import React,{FC} from 'react'
import styled from '@emotion/styled'
import { colors } from 'shared'
import { PaginationFunc,VoidFunc } from 'shared'

interface ButtonProps{
    variant:'primary'|'red'|'green'|'disabled'|'white',
    content?:string,
    callback?:VoidFunc|PaginationFunc,
    width?:string,
    padding?:string,
}

export const StyledButton = styled.div<ButtonProps>`
    box-sizing: content-box;
    width: ${({width})=>width || 'fit-content'};
    padding:${({padding})=>padding||'0px 20px'} ;
    height: 22px;
    font-family:'Roboto';
    font-size:16px;
    font-weight:400;
    line-height:119%;   
    color:${({variant})=>colors.buttonTextColors[variant]};
    background-color: ${({variant})=>colors.buttonColors[variant].stayed};
    border: 1px solid ${({variant})=>colors.buttonColors[variant].stayed};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        background-color: ${({variant})=>colors.buttonColors[variant].hover};
        border: 1px solid ${({variant})=>colors.buttonColors[variant].hover};
    }
    &:active{
        background-color: ${({variant})=>colors.buttonColors[variant].active};
        border: 1px solid ${({variant})=>colors.buttonColors[variant].active};
    }
`
export const Button:FC<ButtonProps> = ({variant,content,callback,...ButtonProps}) => {
    const clickHandler = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        if(variant !== 'disabled'){
            callback && callback(e)
        }
    }
    return (
        <StyledButton onClick={clickHandler} variant={variant} {...ButtonProps}>
            {content}
        </StyledButton>
    )
}
export {}