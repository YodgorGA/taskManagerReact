import React,{FC, useEffect, useState} from 'react'
import styled from '@emotion/styled'
import { Button, colors } from 'shared'
import { useLocation } from 'react-router-dom'
import { ChangeUserListVeiwButton } from 'features/paginator'
import { getCountOfActiveButtons, getPageItemsCount } from '../lib/helpers'
import 'wigets/paginator/styles/paginator.scss'

interface PaginatorProps{
    showedItemCountTotal:number,
    userListVeiw?:string,
    setView?: ()=>void | undefined,
    handlePageChangeFetchCallback?:(page:number)=>void,
    width?:string;
}


export const Paginator:FC<PaginatorProps> = ({width,handlePageChangeFetchCallback,setView,showedItemCountTotal,userListVeiw,...PaginatorProps}) => {
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
        let eventTargetText = Number(e.currentTarget.textContent);
        setPageInfo(getPageItemsCount(8,showedItemCountTotal,eventTargetText));

        if(handlePageChangeFetchCallback !== undefined){
            handlePageChangeFetchCallback(eventTargetText-1);
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
        <PaginatorContainer showedItemCountTotal={showedItemCountTotal} {...PaginatorProps}>
            <PaginatorButtons>
                <Button 
                    callback={prevButtonClickHandler} 
                    variant={(visibleButtonsNumber[0]!==1)?'primary':'disabled'} 
                    key={0}
                    content='Назад'
                />
                <Button
                    padding='0px 10px'
                    callback={numberButtonClickHandler} 
                    variant={(countOfButtons > visibleButtonsNumber[0])?'primary':'disabled'}
                    key={1} 
                    content={String(visibleButtonsNumber[0])}
                />
                <Button 
                    padding='0px 10px'
                    callback={numberButtonClickHandler} 
                    variant={(countOfButtons > visibleButtonsNumber[1])?'primary':'disabled'}
                    key={2} 
                    content={String(visibleButtonsNumber[1])}
                />
                <Button
                    padding='0px 10px'
                    callback={numberButtonClickHandler} 
                    variant={(countOfButtons > visibleButtonsNumber[2])?'primary':'disabled'}
                    key={3} 
                    content={String(visibleButtonsNumber[2])}
                />
                <Button 
                    callback={nextButtonClickHandler} 
                    variant={(countOfButtons > visibleButtonsNumber[2])?'primary':'disabled'} 
                    key={4}
                    content='Вперед'
                />
            </PaginatorButtons> 
            <PaginatorInfo>
                {
                    location.pathname === '/users'&&
                    <ChangeUserListVeiwButton setView={setView} userListVeiw={userListVeiw}/>
                }
                <p>{`Показано ${pageInfo.first} - ${pageInfo.last} из ${showedItemCountTotal}`}</p>
            </PaginatorInfo>
        </PaginatorContainer>
    )
}

const PaginatorContainer = styled.div<PaginatorProps>`
    height: 24px;
    width:${({width})=>width || '1280px'};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 15px;
    font-family:"Roboto";
    font-weight:400;
    line-height:172%;
`
const PaginatorButtons = styled.div`
    min-width: 176px;
    height: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`
const PaginatorInfo = styled.div`
    min-width: 125px;
    height: 24px;
    display: flex;
    flex-direction: row;
    font-size:14px;
    color:${colors.textColors.darkTextColor};
`
export {}