import React, { FC } from 'react'
import '../styles/divider.scss';

interface DividerProps{
  purpose?:string,
}

export const Divider:FC<DividerProps> = ({purpose,...DividerProps}) => {
  return (
    <div className={`${purpose !== undefined? purpose+'_divider':''} _divider`}></div>
  )
}

export {}