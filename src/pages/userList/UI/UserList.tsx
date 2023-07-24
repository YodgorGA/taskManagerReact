import React, { useEffect, useState } from 'react'
import { Paginator } from 'wigets/paginator'
import { UserListCardViewWidget } from 'wigets/user/userList'
import { UserListListViewWidget } from 'wigets/user/userList'
import { useGetUsersAllQuery } from 'entities/user' 

export const UserList = () => {
  const [view,setView] = useState('cards');
  const getAllUsers = useGetUsersAllQuery();
  
  const changeView = () =>{
    (view === 'list')?setView('cards'):setView('list');
  }
  
  useEffect(()=>{
      console.log(getAllUsers);
  },[])
  return (
      <div className='userList_container _container'>
        {
          view === 'list'
          ?<UserListListViewWidget callback={changeView} userListView={view}/>
          :<UserListCardViewWidget callback={changeView} userListView={view}/>
        }
        <Paginator handlePageChangeFetchCallback={()=>1} showedItemCountTotal={40}/>
      </div>
    )
}    

export {}