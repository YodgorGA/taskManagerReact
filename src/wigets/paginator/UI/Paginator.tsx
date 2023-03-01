import React,{FC, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from 'shared'
import { ChangeUserListVeiwButton } from 'features/paginator'
import { getCountOfActiveButtons, getPageItemsCount } from '../lib/helpers'
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
    const [visibleButtonsNumber,setVisibleButtonNubmer] = useState([1,2,3]);

    const countOfButtons = getCountOfActiveButtons(showedItemCountTotal);

    const prevButtonClickHandler = () =>{
        let tmpArr = visibleButtonsNumber.map(num => num - 3);
        setVisibleButtonNubmer(tmpArr);
    }
    const nextButtonClickHandler = () =>{
        let tmpArr = visibleButtonsNumber.map(num => num + 3);
        setVisibleButtonNubmer(tmpArr);
    }

    const numberButtonClickHandler = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        let eText = Number(e.currentTarget.textContent);
        setPageInfo(getPageItemsCount(8,showedItemCountTotal,eText));

        if(handlePageChangeFetchCallback !== undefined){
            handlePageChangeFetchCallback(eText-1);
        }
    }
    useEffect(()=>{
        if(showedItemCountTotal < 8){
            setPageInfo({
                first:1,
                last:showedItemCountTotal
            });
        }
        else if(showedItemCountTotal > 8){
            setPageInfo({
                first:1,
                last:8
            });
        }
    },[showedItemCountTotal])
    return (
    <div className={`${parentClass}_paginator _paginator`}>
        <div className="_paginator_left leftsidePaginator">
            <Button 
                callback={prevButtonClickHandler} 
                parentClass='leftsidePaginator' 
                color={(visibleButtonsNumber[0]!==1)?'primary':'disabled'} 
                additionalClass='leftsidePaginator_prevButton' 
                content='Назад'
            />
            <Button 
                callback={numberButtonClickHandler} 
                parentClass='leftsidePaginator' 
                color={(countOfButtons > visibleButtonsNumber[0])?'primary':'disabled'}
                additionalClass='leftsidePaginator_numberButton' 
                key={1} 
                content={String(visibleButtonsNumber[0])}
            />
            <Button 
                callback={numberButtonClickHandler} 
                parentClass='leftsidePaginator' 
                color={(countOfButtons > visibleButtonsNumber[1])?'primary':'disabled'}
                additionalClass='leftsidePaginator_numberButton' 
                key={2} 
                content={String(visibleButtonsNumber[1])}
            />
            <Button 
                callback={numberButtonClickHandler} 
                parentClass='leftsidePaginator' 
                color={(countOfButtons > visibleButtonsNumber[2])?'primary':'disabled'}
                additionalClass='leftsidePaginator_numberButton' 
                key={3} 
                content={String(visibleButtonsNumber[2])}
            />
            <Button 
                callback={nextButtonClickHandler} 
                parentClass='leftsidePaginator' 
                color={(countOfButtons > 3)?'primary':'disabled'} 
                additionalClass='leftsidePaginator_nextButton' 
                content='Вперед'
            />
        </div>
        <div className={`_paginator_right rightSidePaginator`}>
            {location.pathname === '/users'?<ChangeUserListVeiwButton setView={setView} userListVeiw={userListVeiw}/>:<div></div>}
            <p>{`Показано ${pageInfo.first} - ${pageInfo.last} из ${showedItemCountTotal}`}</p>
        </div>

    </div>
  )
}

export {}