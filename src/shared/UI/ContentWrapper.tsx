import React,{FC} from 'react'
import styled from '@emotion/styled'

interface ContentWrapperProps{
    width?:string,
    children?:React.ReactNode,
    height?:string,
    flexDirection?:string,
    justifyContent?:string,
    alignItems?:string,
    padding?:string,
    margin?:string,
}

const StyledContentWrapper = styled.div<ContentWrapperProps>`
    width:${({width})=>width||'inherit'};
    height:${({height})=>height||'inherit'};
    display:flex;
    flex-direction:${({flexDirection})=>flexDirection||'row'};
    justify-content:${({justifyContent})=>justifyContent||'flex-start'};
    align-items:${({alignItems})=>alignItems||'flex-end'};
    padding:${({padding})=>padding||'0px 0px 0px 0px'};
    margin:${({margin})=>margin||'0px 0px 0px 0px'};
`
export const ContentWrapper:FC<ContentWrapperProps> = ({children,...ContentWrapperProps}) => {
    
    return (
        <StyledContentWrapper {...ContentWrapperProps}>
            {children}
        </StyledContentWrapper>
    )
}
export {}