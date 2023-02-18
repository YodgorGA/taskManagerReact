import { useAppSelector} from 'app/store/hooks';
import { selectUser, userSliceProps } from './userSlice';

export const useUserState = () => useAppSelector<userSliceProps>(selectUser)
export const useUserIsAuth = () =>{
    const isAuth = useUserState().currentUser?.id !== null
    return !isAuth
}

export {}