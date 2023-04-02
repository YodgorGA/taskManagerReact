import React,{FC} from 'react'
import styled from '@emotion/styled'

interface ResetButtonProps{
    callback?:()=>void,
}

const StyledResetButton = styled.div<ResetButtonProps>`
    height: 20px;
    width: 25px;
    background-image: url('img/filter/reset.png');
    background-repeat: no-repeat;
    background-size: contain;
    &:hover{
        cursor: pointer;
    }
`
export const ResetButton:FC<ResetButtonProps> = ({callback,...ResetButtonProps}) => {
    
    return (
        <StyledResetButton onMouseDown={callback} {...ResetButtonProps}></StyledResetButton>
    )
}
export {}