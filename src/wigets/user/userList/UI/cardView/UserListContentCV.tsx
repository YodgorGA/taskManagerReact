import React,{FC, useState} from 'react'
import { Button } from 'shared'
import { UserListContentCVItem } from 'entities/user'
import { Input } from 'shared/UI/Input'

interface UserListContentCVProps{
    userListView:string
    callback:()=>void
}

export const UserListContentCV:FC<UserListContentCVProps> = ({callback,userListView,...UserListContentCVProps}) => {
  const [isInputClear,setIsInputClear] = useState<boolean>(true);
  const findUserButtonClickHandler = () =>{
    setIsInputClear(false);
    setTimeout(()=>{setIsInputClear(true)},0)
  }
  return (
    <div className="userList_contentWrapper _contentWrapper">
        <div className={`userList_searchBar`}>
          <Input parentClass='_input' monitorableState={isInputClear} placeholder='Имя пользователя' type='text'/>
          <Button callback={findUserButtonClickHandler} color='primary' content='Поиск' parentClass='userList'/>
        </div>
        <div className="userList_cards cardsUserList">
            <UserListContentCVItem profilePhotoUrl='/img/pageHeader/userProfile.png'/>
            <UserListContentCVItem profilePhotoUrl='/img/pageHeader/userProfile.png'/>
            <UserListContentCVItem profilePhotoUrl='/img/pageHeader/userProfile.png'/>
            <UserListContentCVItem profilePhotoUrl='/img/pageHeader/userProfile.png'/>
            <UserListContentCVItem profilePhotoUrl='/img/pageHeader/userProfile.png'/>
            <UserListContentCVItem profilePhotoUrl='/img/pageHeader/userProfile.png'/>
            <UserListContentCVItem profilePhotoUrl='/img/pageHeader/userProfile.png'/>
            <UserListContentCVItem profilePhotoUrl='/img/pageHeader/userProfile.png'/>
        </div>
    </div>
  )
}

 export {}