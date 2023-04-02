import React,{FC} from 'react'
import styled from '@emotion/styled'
import { colors } from 'shared'

interface PageContainerProps{
    width?:string,
    children?:React.ReactNode,
    height?:string,
    flexDirection?:string,
    justifyContent?:string,
    alignItems?:string,
}

const StyledPageContainer = styled.div<PageContainerProps>`
    width: ${({width})=>width||'1440px'};
    height: ${({height})=>height||'727px'};
    background-color: ${colors.generalColor.pageWrapperGrayColor};
    display: flex;
    flex-direction: ${({flexDirection})=>flexDirection||'column'};
    justify-content: ${({justifyContent})=>justifyContent||'space-between'};
    align-items: ${({alignItems})=>alignItems||'center'};
    position: relative;
`
export const PageContainer:FC<PageContainerProps> = ({children,...PageContainerProps}) => {
    
    return (
        <StyledPageContainer {...PageContainerProps}>
            {children}
        </StyledPageContainer>
    )
}
export {}