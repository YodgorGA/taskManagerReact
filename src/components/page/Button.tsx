import React,{FC} from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { fetchUserById, getUserData } from '../../features/userReducer'
import { useGetUserByIdQuery, useGetAllUsersMutation } from '../../features/api/authAPI'
interface ButtonProps{
    content:string
    color:string
    parentClass:string
    additionalClass?:string
}

export const Button:FC<ButtonProps> = ({additionalClass,parentClass,content,color,...ButtonProps}) => {
    const dispatch = useAppDispatch();
    const {data = []} = useGetUserByIdQuery('');
    const [getAllUsers,{isError}] = useGetAllUsersMutation();
    const buttonClickHandler = async ()=>{
        await getAllUsers('').unwrap();
    }
    return (
    <div className={`${parentClass}_button ${(additionalClass)?additionalClass:''} _button__${color}`} onMouseDown={buttonClickHandler}>
        {content}
    </div>
  )
}

export {}