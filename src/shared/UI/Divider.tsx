import React, { FC } from 'react'
import styled from '@emotion/styled';
import {colors} from 'shared'
interface DividerProps{
  height?:string;
}

export const Divider:FC<DividerProps> = ({height,...DividerProps}) => {
  return (
    <StyledDivider height={height} />
  )
}

const StyledDivider = styled.div<DividerProps>`
    width: 1px;
    height: ${({height})=>height ||'600px'};
    background-color: ${colors.disabledColors.disabledElementColor};
    margin-right: 19px;
`
export {}