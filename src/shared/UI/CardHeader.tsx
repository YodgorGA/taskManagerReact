import React,{FC} from 'react'
import styled from '@emotion/styled'

interface CardHeaderProps{
    childButtons?:React.ReactNode,
    title?:string|undefined,
}

export const CardHeader:FC<CardHeaderProps> = ({title,childButtons,...CardHeaderProps}) => {
    
    return (
        <StyledCardHeader {...CardHeaderProps}>
            <StyledTitle>{title}</StyledTitle>
            <StyledButtonGroup>
                {childButtons}
            </StyledButtonGroup>
        </StyledCardHeader>
    )
}

const StyledCardHeader = styled.div<CardHeaderProps>`
    width: inherit;
    height: 28px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`
const StyledTitle = styled.title`
    min-width: 160px;
    max-width: 800px;
    min-height: 30px;
    overflow-y: hidden;
    height: inherit;
    display: flex;
    align-items: flex-start;
    font-family:'Roboto';
    font-size:24px;
    font-weight:300;
    line-height:160%;
`
const StyledButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap:10px;
`
export {}