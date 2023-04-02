import React,{FC} from 'react'
import '../styles/cardHeader.scss'

interface CardHeaderProps{
  parentClass:string,
  childButtons?:React.ReactNode,
  title:string | undefined,
}

export const CardHeader:FC<CardHeaderProps> = ({title,parentClass,childButtons,...CardHeaderProps}) => {
  return (
    <div className={`${parentClass}_cardHeader _cardHeader`}>
      <div className="_cardHeader_title">
        {title}
      </div>
      <div className="_cardHeader_childs childsCardHeader">
        {childButtons}
      </div>
    </div>
  )
}

export {}