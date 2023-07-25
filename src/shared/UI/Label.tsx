import styled from '@emotion/styled'
import React,{FC} from 'react'

interface LabelProps{
    content:string
}

export const Label:FC<LabelProps> = ({content,...LabelProps}) => {
    return (
        <StyledLabel>
            {content}
        </StyledLabel>
    )
}


const StyledLabel = styled.label`
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 171%;
    color: #CCCCCC;
    margin-bottom: 0px !important;
`
export {}