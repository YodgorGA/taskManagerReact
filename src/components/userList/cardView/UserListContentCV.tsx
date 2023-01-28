import React,{FC} from 'react'
import { Formitem } from '../../login/Formitem'
import { Button } from '../../page/Button'
import { ChangeViewButtons } from '../../page/paginator/ChangeViewButtons'
import { Paginator } from '../../page/paginator/Paginator'
import { UserListContentLVItem } from '../listView/UserListContentLVItem'
import { UserListContentCVItem } from './UserListContentCVItem'

interface UserListContentCVProps{
    userListView:string
    callback:()=>void
}

export const UserListContentCV:FC<UserListContentCVProps> = ({callback,userListView,...UserListContentCVProps}) => {
  return (
    <div className="userList_contentWrapper _contentWrapper">
        <div className={`userList_searchBar`}>
          <Formitem placeholder='Имя пользователя' isLabelNeed={false} parentClass='userList' additionalClass='userList' purpose='userSearch' type='text'/>
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