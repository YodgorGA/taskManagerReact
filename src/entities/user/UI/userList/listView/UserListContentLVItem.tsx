import React,{FC} from 'react'

interface UserListContentLVItemProps{
    text:string,
}
export const UserListContentLVItem:FC<UserListContentLVItemProps> = ({text,...UserListContentLVItemProps}) => {
  return (
    <div className="listCardUserListLV_item">
        {text}
    </div>
  )
}

export {}