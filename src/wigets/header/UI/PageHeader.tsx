import React,{FC} from 'react'
import styled from '@emotion/styled'
import { colors } from 'shared'

interface PageHeaderProps{
    navbar?:React.ReactNode,
    currentUser?:React.ReactNode,
}



export const PageHeader:FC<PageHeaderProps> = ({navbar,currentUser,...PageHeaderProps}) => {
    
    return (
        <StyledPageHeader {...PageHeaderProps}>
            <PageHeaderLogo/>
            { navbar }
            { currentUser }
        </StyledPageHeader>
    )
}

const StyledPageHeader = styled.div<PageHeaderProps>`
    width:1440px;
    height:60px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    box-shadow: 0px 4px 4px ${colors.disabledColors.disabledElementColor};
    z-index: 10;
`

const PageHeaderLogo = styled.div`
    width:120px;
    height:20px;
    background-image: url('img/pageHeader/Logo.svg');
    box-sizing:border-box;
    background-repeat:no-repeat;
    margin:20px;
`


export {}