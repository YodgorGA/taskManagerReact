import React,{FC} from 'react'
import { Divider as UserPageDivider,Button, CardHeader } from 'shared'
import { UserInfo as UserPageUserInfo } from 'wigets/userInfo'
import { UserTaskListWidget } from 'wigets/userTaskList'

interface UserPageProps{
    
}

export const UserPage:FC<UserPageProps> = ({...UserPageProps}) => {
    const parentClass = 'userPage';
    return (
        <div  className={`${parentClass}_container _container`}>
            <div className={`${parentClass}_contentWrapper _contentWrapper`}>
                <CardHeader parentClass={parentClass} title={`User Name From API`} childButtons={[
                    <Button color='white' content='Добавить задачу' parentClass='_cardHeader' key={0}/>,
                    <Button color='primary' content='Редактировать' parentClass='_cardHeader' key={1}/>
                ]}/>
                <div className={`${parentClass}_card _card cardUserPage`}>
                    <UserPageUserInfo userProfilePhoto='/img/pageHeader/userImage.png'/>
                    <UserPageDivider/>
                    <UserTaskListWidget/>
                </div>
            </div>
        </div>
    )
}

export {}