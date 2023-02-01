import React,{FC, useState} from 'react'
import { UserListContentLVItem } from '../../../../entities/user/UI/userList/listView/UserListContentLVItem'


interface UserListContentLVProps{
    userListView:string
    callback:()=>void
}
export const UserListContentLV:FC<UserListContentLVProps> = ({callback,userListView,...UserListContentLVProps}) => {
    
    return(
        <div className="userList_contentWrapper _contentWrapper">
            <div className="userList_card _card cardUserListLV">
                <div className="cardUserListLV_content">
                    <div className="cardUserListLV_list listCardUserListLV">
                        <UserListContentLVItem text='Евгений Онегин'/>
                        <UserListContentLVItem text='Сделать отрисовку элементов'/>
                        <UserListContentLVItem text='По полученным от бд'/>
                        <UserListContentLVItem text='Данным'/>
                        <UserListContentLVItem text='Оооооооооооооооооооочень длинное имя'/>
                    </div>
                </div>
            </div>
        </div>
        )
    }

export {}