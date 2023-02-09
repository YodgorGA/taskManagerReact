import React, { useState } from 'react'
import { ChangeUserListVeiwButton } from 'features/paginator'
import { Paginator } from 'wigets/paginator'
import { UserListCardViewWidget } from 'wigets/userList'
import { UserListListViewWidget } from 'wigets/userList'

export const UserList = () => {
  const [view,setView] = useState('list');
  const changeView = () =>{
    (view === 'list')?setView('cards'):setView('list');
  }
  return (
      <div className='userList_container _container'>
        {
          view === 'list'?<UserListListViewWidget callback={changeView} userListView={view}/>:<UserListCardViewWidget callback={changeView} userListView={view}/>
        }
        <Paginator 
          showedItemCountStart='1' 
          showedItemCountEnd='5' 
          showedItemCountTotal='5' 
          parentClass='cardUserListLV'
          setView={changeView}
          userListVeiw={view}
          />
      </div>
    )
}    

export {}