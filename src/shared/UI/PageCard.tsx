import React,{FC} from 'react'
import styled from '@emotion/styled'
import { colors } from 'shared'

interface PageCardProps{
    width?:string,
    height?:string,
    flexDirection?:string,
    justifyContent?:string,
    alignItems?:string,
    children?:React.ReactNode,
}

const StyledPageCard = styled.div<PageCardProps>`
    padding: 20px;
    margin-top: 20px;
    background-color: ${colors.generalColor.white};
    box-sizing: border-box;
    box-shadow: 0px 0px 5px 3px ${colors.disabledColors.disabledElementColor};
    border-radius: 5px;

    width:${({width})=>width||'inherit'};
    height:${({height})=>height||'fit-content'};
    display:flex;
    flex-direction:${({flexDirection})=>flexDirection||'column'};
    justify-content:${({justifyContent})=>justifyContent||'space-between'};
    align-items:${({alignItems})=>alignItems||'center'};
`
export const PageCard:FC<PageCardProps> = ({children,...PageCardProps}) => {
    
    return (
        <StyledPageCard {...PageCardProps}>
            {children}
        </StyledPageCard>
    )
}
export {}