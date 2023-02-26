import React,{FC, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from 'shared'
import { ChangeUserListVeiwButton } from 'features/paginator'
import { getCountOfButtons, getPageItemsCount } from '../lib/helpers'
import '../styles/paginator.scss'

interface PaginatorProps{
    parentClass:string,
    showedItemCountTotal:number,
    userListVeiw?:string
    setView?: ()=>void | undefined
    handlePageChangeFetchCallback?:(page:number)=>void,
}

export const Paginator:FC<PaginatorProps> = ({parentClass,showedItemCountTotal,userListVeiw,setView,handlePageChangeFetchCallback,...PaginatorProps}) => {
    const location = useLocation();
    const [pageInfo,setPageInfo] = useState<{first:number,last:number}>({first:1,last:8})
    const countOfButtons = getCountOfButtons(showedItemCountTotal);
    const numberButtonClickHandler = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        let eText = Number(e.currentTarget.textContent);
        setPageInfo(getPageItemsCount(8,showedItemCountTotal,eText));

        if(handlePageChangeFetchCallback !== undefined){
            handlePageChangeFetchCallback(eText-1);
        }
    }

    return (
    <div className={`${parentClass}_paginator _paginator`}>
        <div className="_paginator_left leftsidePaginator">
            <Button parentClass='leftsidePaginator' color='disabled' additionalClass='leftsidePaginator_prevButton' content='Назад'/>
                {
                    countOfButtons.map((button)=>{
                        return <Button callback={numberButtonClickHandler} parentClass='leftsidePaginator' color='primary' additionalClass='leftsidePaginator_numberButton' key={countOfButtons[button]} content={String(countOfButtons[button]+1)}/>
                    })
                    //кнопок должно быть 3 по дефолту
                    //1 - всегда активно
                    //2 - активная, если на ней есть данные
                    //3 - активная, если на ней есть данные
                    //Кнопки ВПЕРЕД НАЗАД управляют номерами 3х кнопок. Меняют номера сразу по 3шт
                    //НАЗАД - активна, если текущие номера влючают цифры > 3
                    //ВПЕРЕД - активна, если текущие номера не включают номер последней доступной страницы
                }
            <Button parentClass='leftsidePaginator' color='disabled' additionalClass='leftsidePaginator_nextButton' content='Вперед'/>
        </div>
        <div className={`_paginator_right rightSidePaginator`}>
            {location.pathname === '/users'?<ChangeUserListVeiwButton setView={setView} userListVeiw={userListVeiw}/>:<div></div>}
            <p>{`Показано ${pageInfo.first} - ${pageInfo.last} из ${showedItemCountTotal}`}</p>
        </div>

    </div>
  )
}

export {}