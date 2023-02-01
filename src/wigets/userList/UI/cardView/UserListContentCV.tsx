import React,{FC} from 'react'
import { Button } from '../../../../shared/UI/Button'
import { ChangeViewButtons } from '../../../../features/paginator/UI/ChangeViewButtons'
import { Paginator } from '../../../paginator/UI/Paginator'
import { UserListContentLVItem } from '../../../../entities/user/UI/userList/listView/UserListContentLVItem'
import { UserListContentCVItem } from '../../../../entities/user/UI/userList/cardView/UserListContentCVItem'
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
            <UserListContentCVItem/>
            <UserListContentCVItem/>
            <UserListContentCVItem/>
            <UserListContentCVItem/>
            <UserListContentCVItem/>
            <UserListContentCVItem/>
            <UserListContentCVItem/>
            <UserListContentCVItem/>
        </div>
    </div>
  )
}

 export {}