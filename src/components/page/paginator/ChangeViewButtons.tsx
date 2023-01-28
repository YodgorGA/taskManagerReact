import React,{FC, useState} from 'react'

interface ChangeViewButtonsProps{
  userListVeiw:string
  setView : ()=>void
}
export const ChangeViewButtons:FC<ChangeViewButtonsProps> = ({userListVeiw,setView,...ChangeViewButtonsProps}) => {
    const handleViewChangeButtonClick = () =>{
      setView();
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