import React,{FC} from 'react'
import { Button } from 'shared'
import { ChangeUserListVeiwButton } from 'features/paginator'
import '../styles/paginator.scss'
import { useLocation } from 'react-router-dom'

interface PaginatorProps{
parentClass:string,
showedItemCountStart:string,
showedItemCountEnd:string,
showedItemCountTotal:string,
userListVeiw?:string
setView?: ()=>void | undefined
}

export const Paginator:FC<PaginatorProps> = ({
    parentClass,showedItemCountStart,showedItemCountEnd,showedItemCountTotal,userListVeiw,setView,
    ...PaginatorProps}) => {
    const location = useLocation();
    return (
    <div className={`${parentClass}_paginator _paginator`}>
        <div className="_paginator_left leftsidePaginator">
            <Button parentClass='leftsidePaginator'color='disabled' additionalClass='leftsidePaginator_prevButton' content='Назад'/>
            <Button parentClass='leftsidePaginator' color='primary' additionalClass='leftsidePaginator_numberButton' content='1'/>
            <Button parentClass='leftsidePaginator'color='disabled' additionalClass='leftsidePaginator_nextButton' content='Вперед'/>
        </div>
        <div className={`_paginator_right rightSidePaginator`}>
            {location.pathname === '/users'?<ChangeUserListVeiwButton setView={setView} userListVeiw={userListVeiw}/>:<div></div>}
            <p>{`Показано ${showedItemCountStart} - ${showedItemCountEnd} из ${showedItemCountTotal}`}</p>
        </div>

    </div>
  )
}

export {}