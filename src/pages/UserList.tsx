import React, { useState } from 'react'
import { ChangeViewButtons } from '../components/page/paginator/ChangeViewButtons'
import { Paginator } from '../components/page/paginator/Paginator'
import { UserListContentCV } from '../components/userList/cardView/UserListContentCV'
import { UserListContentLV } from '../components/userList/listView/UserListContentLV'

export const UserList = () => {
  const [view,setView] = useState('list');
  const changeView = () =>{
    (view === 'list')?setView('cards'):setView('list');
  }
  if(view === 'list'){
    return (
      <div className='userList_container _container'>
        <UserListContentLV callback={changeView} userListView={view}/>
        <Paginator 
          showedItemCountStart='1' 
          showedItemCountEnd='5' 
          showedItemCountTotal='5' 
          parentClass='cardUserListLV'
          childnodes={<ChangeViewButtons setView={changeView} userListVeiw={view}/>}
          />
      </div>
    )
  }
  else{
    return (
      <div className='userList_container _container'>
        <UserListContentCV callback={changeView} userListView={view}/>
        <Paginator 
          showedItemCountStart='1' 
          showedItemCountEnd='5' 
          showedItemCountTotal='5' 
          parentClass='cardUserListCV'
          childnodes={<ChangeViewButtons setView={changeView} userListVeiw={view}/>}
          />
      </div>
      )
  }

}

export {}