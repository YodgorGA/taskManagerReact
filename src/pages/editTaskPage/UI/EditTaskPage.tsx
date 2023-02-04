import React,{FC} from 'react'
import { Button, CardHeader } from 'shared'

export const EditTaskPage = ({}) => {
  return (
    <div className='editTaskPage_container _container'>
        <div className="editTaskPage_contentWrapper _contentWrapper">
            <CardHeader parentClass='editTaskPage' title='Редактирование'
            childButtons={[
                <Button color='primary' content='Сохранить' parentClass='editTaskPage' key={0}/>,
                <Button color='white' content='Отмена' parentClass='editTaskPage' key={1}/>
            ]}/>
            <div className="editTaskPage_card _card cardEditTaskPage">

            </div>
        </div>
    </div>
  )
}

export {}