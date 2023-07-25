import React,{FC, useState} from 'react'
import { EditUserInfoForm } from 'features/editUserInfo'
import { Divider as UserPageDivider,Button, CardHeader } from 'shared'
import { UserInfo as UserPageUserInfo } from 'wigets/user/userInfo'
import { UserTaskListWidget } from 'wigets/user/userTaskList'

interface UserPageProps{
    
}

export const UserPage:FC<UserPageProps> = ({...UserPageProps}) => {
    const parentClass = 'userPage';
    const [modalVisibility,setModalVisibility] = useState<string>('hidden');
    const toggleModalVisibilityButtonClickHandler = () =>{
        modalVisibility === 'hidden'?setModalVisibility('visible'):setModalVisibility('hidden');
    }
    return (
        <div className={`${parentClass}_container _container`}>
            <div className={`${parentClass}_contentWrapper _contentWrapper`}>
                <CardHeader title={`User Name From API`} childButtons={[
                    <Button variant='white' content='Добавить задачу' key={0}/>,
                    <Button callback={toggleModalVisibilityButtonClickHandler} variant='primary' content='Редактировать' key={1}/>
                ]}/>
                <div className={`${parentClass}_card _card cardUserPage`}>
                    <UserPageUserInfo userProfilePhoto='/img/pageHeader/userImage.png'/>
                    <UserPageDivider/>
                    <UserTaskListWidget/>
                </div>
            </div>
            <div className={`${parentClass}_modal _modal__${modalVisibility}`}>
                <EditUserInfoForm closeFormCallback={toggleModalVisibilityButtonClickHandler}/>
            </div>
        </div>
    )
}

export {}