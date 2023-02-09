import React,{FC} from 'react'
import { Button } from 'shared'
import { UserListContentCVItem } from 'entities/user'
import { Input } from 'shared/UI/Input'

interface UserListContentCVProps{
    userListView:string
    callback:()=>void
}

export const UserListContentCV:FC<UserListContentCVProps> = ({callback,userListView,...UserListContentCVProps}) => {
  return (
    <div className="userList_contentWrapper _contentWrapper">
        <div className={`userList_searchBar`}>
          <Input placeholder='Имя пользователя' type='text'/>
          <Button color='primary' content='Поиск' parentClass='userList'/>
        </div>
        <div className="userList_cards cardsUserList">
            <UserListContentCVItem profilePhotoUrl='/img/pageHeader/userImage.png'/>
            <UserListContentCVItem profilePhotoUrl='/img/pageHeader/userImage.png'/>
            <UserListContentCVItem profilePhotoUrl='/img/pageHeader/userImage.png'/>
            <UserListContentCVItem profilePhotoUrl='/img/pageHeader/userImage.png'/>
            <UserListContentCVItem profilePhotoUrl='/img/pageHeader/userImage.png'/>
            <UserListContentCVItem profilePhotoUrl='/img/pageHeader/userImage.png'/>
            <UserListContentCVItem profilePhotoUrl='/img/pageHeader/userImage.png'/>
            <UserListContentCVItem profilePhotoUrl='/img/pageHeader/userImage.png'/>
        </div>
    </div>
  )
}

 export {}