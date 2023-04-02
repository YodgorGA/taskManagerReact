import React,{FC, useEffect, useState} from 'react'
import styled from '@emotion/styled'
import { getListItemButtonItemsState, useChangeTaskStausMutation, useRemoveTaskMutation } from 'entities/task'
import { colors, VoidFunc } from 'shared'
import { useNavigate } from 'react-router-dom'

interface DropdownProps{
    id:string,
    assignedId:string,
    fetchData?: VoidFunc,
    taskDataStatus:string | undefined,
}

interface DropdownStateProps{
    isOpen?:boolean
}   


interface MenuItemProps{
    isItemActive?:boolean
}


export const TaskListButton:FC<DropdownProps> = ({taskDataStatus,fetchData,assignedId,id,...TaskListButtonProps}) => {
    const navigate = useNavigate()
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const [isMenuItemActive,setIsMenuItemActive] = useState<{test:boolean,reopen:boolean}>({test:false,reopen:false});

    const [changeTaskStatus] = useChangeTaskStausMutation();
    const [removeTask] = useRemoveTaskMutation();

    const toggleDropdown = ()=>{
        isOpen? setIsOpen(false):setIsOpen(true)
    }

    const toTestButtonClickHandler = () =>{
        changeTaskStatus({id:id,status:'testing'})
    }
    const reopenButtonClickHandler = () =>{
        changeTaskStatus({id:id,status:'opened'})
    }
    const removeButtonClickHandler = () =>{
        removeTask(id).then(()=>{
            fetchData && fetchData()
        })
    }
    const editButtonClickHandler = () => {
        navigate(`/tasks/${id}`)
        console.log(id);
        
    }

    useEffect(()=>{
            setIsMenuItemActive(getListItemButtonItemsState(taskDataStatus))
      },[taskDataStatus])
    return (
        <DropdownContainer taskDataStatus={taskDataStatus} id={id} assignedId={assignedId}  {...TaskListButtonProps}>
            <DropdownButton isOpen={isOpen} onClick={toggleDropdown}/>
            {
                isOpen &&  
                <DropdownMenu {...TaskListButtonProps}>
                    <DropdownMenuItem 
                        onClick={toTestButtonClickHandler} key={0} isItemActive={isMenuItemActive.test}>
                        На тестирование
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                        onClick={editButtonClickHandler} key={1} isItemActive={true}>
                        Редактировать
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                        onClick={reopenButtonClickHandler} key={2} isItemActive={isMenuItemActive.reopen}>
                        Переоткрыть
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                        onClick={removeButtonClickHandler} key={3} isItemActive={true}>
                        Удалить
                    </DropdownMenuItem>
                </DropdownMenu>
            }
           
        </DropdownContainer>
    )
}

const DropdownMenuItem = styled.div<MenuItemProps>`
    color:${({isItemActive})=>isItemActive 
    && colors.generalColor.primaryColor
    ||colors.disabledColors.disabledElementTextColor};
    cursor: pointer;
    &:last-child{
        color:${colors.generalColor.redColor};
    }
`


const DropdownMenu = styled.div`
    top:20px;
    right:0px;
    z-index:9;
    display:flex;
    position: absolute;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    font-family:'Inter';
    font-size:12px;
    font-weight:400px;
    line-height:117%;
    background-color:${colors.generalColor.white};
    width:115px;
    gap:2px;
    padding:5px;
    box-sizing:border-box;
    border-radius:5px;
    border:1px solid ${colors.generalColor.white};
    box-shadow: 0px 0px 2px 1px ${colors.inputColors.primary.shadow};
    
`

const DropdownButton = styled.div<DropdownStateProps>`
    border-radius:5px;
    position:relative;
    width:inherit;
    height:20px;
    width:20px;
    width: 20px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: ${({isOpen})=>isOpen 
    && "url('img/taskList/taskDropdownActive.svg')"
    || "url('img/taskList/taskDropdown.svg')"};
    cursor: pointer;
`

const DropdownContainer = styled.div<DropdownProps>`
    width:120px;
    height:fit-content;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    position:relative;
    align-items:flex-end;
    margin-left:10px;
`

export {}