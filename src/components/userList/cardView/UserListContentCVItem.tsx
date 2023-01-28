import React,{FC} from 'react'

interface UserListContentCVItemProps{

}

export const UserListContentCVItem:FC<UserListContentCVItemProps> = ({...UserListContentCVItemProps}) => {
  return (
    <div className="cardsUserList_item _card cardUserLiscCV">
        <div className="cardUserListCV_top">
            <div className="cardUserListCV_avatar"></div>
            <div className="cardUserListCV_fullname">Вставить имя из апишки</div>
        </div>
        <div className="cardUserListCV_bot">
            <pre>
                Разработчик.
                Реалист.
                Очаровательное маленькое дерево.
            </pre>
        </div>
    </div>
  )
}

export {}