import React,{FC, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from 'shared'
import { ChangeUserListVeiwButton } from 'features/paginator'
import '../styles/paginator.scss'

interface PaginatorProps{
parentClass:string,
showedItemCountStart:number,
showedItemCountEnd:number,
showedItemCountTotal:number,
userListVeiw?:string
setView?: ()=>void | undefined
handlePageChangeFetchCallback?:(page:number)=>void,
}

export const Paginator:FC<PaginatorProps> = ({
    parentClass,
    showedItemCountStart,
    showedItemCountEnd,
    showedItemCountTotal,
    userListVeiw,
    setView,
    handlePageChangeFetchCallback,
    ...PaginatorProps}) => {

    const location = useLocation();
    const [currenPage,setCurrentPage] = useState<number>(1);
    const numberButtonClickHandler = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        if(handlePageChangeFetchCallback !== undefined){
            setCurrentPage(Number(e.currentTarget.textContent)-1);
            handlePageChangeFetchCallback(Number(e.currentTarget.textContent)-1);
        }
    }
    return (
    <div className={`${parentClass}_paginator _paginator`}>
        <div className="_paginator_left leftsidePaginator">
            <Button parentClass='leftsidePaginator'color='disabled' additionalClass='leftsidePaginator_prevButton' content='Назад'/>
            <Button callback={numberButtonClickHandler} parentClass='leftsidePaginator' color='primary' additionalClass='leftsidePaginator_numberButton' content='1'/>
            <Button callback={numberButtonClickHandler} parentClass='leftsidePaginator' color='primary' additionalClass='leftsidePaginator_numberButton' content='2'/>
            <Button callback={numberButtonClickHandler} parentClass='leftsidePaginator' color='primary' additionalClass='leftsidePaginator_numberButton' content='3'/>
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