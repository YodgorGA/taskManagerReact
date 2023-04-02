import React,{FC, useState} from 'react'

interface ChangeViewButtonsProps{
  userListVeiw:(string | undefined)
  setView : (()=>void | undefined) | undefined
}
export const ChangeViewButtons:FC<ChangeViewButtonsProps> = ({userListVeiw,setView,...ChangeViewButtonsProps}) => {
    const handleViewChangeButtonClick = () =>{
      setView && setView();
    }
    if(userListVeiw === 'cards'){
      return (
        <div className='rightSidePaginator_listView' onMouseDown={handleViewChangeButtonClick}></div>
      )
    }
    else{
      return (
        <div className='rightSidePaginator_cardView' onMouseDown={handleViewChangeButtonClick}></div>
      )
    }
}

export {}