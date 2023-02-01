import React,{FC} from 'react'
import { Button } from '../../../shared/UI/Button'
import { ChangeViewButtons } from '../../../features/paginator/UI/ChangeViewButtons'

interface PaginatorProps{
parentClass:string,
showedItemCountStart:string,
showedItemCountEnd:string,
showedItemCountTotal:string,
childnodes?:React.ReactNode
}

export const Paginator:FC<PaginatorProps> = ({
    parentClass,showedItemCountStart,
    showedItemCountEnd,showedItemCountTotal,
    childnodes,
    ...PaginatorProps}) => {
        
    return (
    <div className={`${parentClass}_paginator _paginator`}>
        <div className="_paginator_left leftsidePaginator">
            <Button parentClass='leftsidePaginator'color='disabled' additionalClass='leftsidePaginator_prevButton' content='Назад'/>
            <Button parentClass='leftsidePaginator' color='primary' additionalClass='leftsidePaginator_numberButton' content='1'/>
            <Button parentClass='leftsidePaginator'color='disabled' additionalClass='leftsidePaginator_nextButton' content='Вперед'/>
        </div>
        <div className={`_paginator_right rightSidePaginator`}>
            {childnodes}
            <p>{`Показано ${showedItemCountStart} - ${showedItemCountEnd} из ${showedItemCountTotal}`}</p>
        </div>

    </div>
  )
}

export {}