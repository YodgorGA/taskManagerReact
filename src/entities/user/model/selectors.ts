import { useAppSelector} from 'app/store/hooks';
import { selectUser, userSliceState } from './userSlice';

export const useUserState = () => useAppSelector<userSliceState>(selectUser)
export const useUserIsAuth = () =>{
    const isAuth = useUserState().currentUser?.id !== null
    return !isAuth
}

export {}