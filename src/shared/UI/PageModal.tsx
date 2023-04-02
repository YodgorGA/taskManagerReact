import React,{FC} from 'react'
import styled from '@emotion/styled'

interface PageModalProps{
    visible:boolean,
    children?:React.ReactNode
}


export const PageModal:FC<PageModalProps> = ({children,visible,...PageModalProps}) => {
    
    return (
        <StyledPageModal visible={visible}>
            {
                visible && children
            }
        </StyledPageModal>
        
    )

}

const StyledPageModal = styled.div<PageModalProps>`
    display:${({visible})=>visible?'block':'none'};
    position:absolute;
    width: inherit;
    height: inherit;
    z-index:11;
    background-color: rgb(0, 0,0 ,25%);
`

export {}