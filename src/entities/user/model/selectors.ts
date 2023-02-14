import { UserInfo } from './../lib/types';
import { useAppSelector, useAppDispatch } from 'app/store/hooks';
import { removeLoggedUser, selectuserInfo,setUser } from './userSlice';

export const useUser = () => useAppSelector(selectuserInfo);

export const useUserIsAuth = () => {
    const isAuth = useUser();
    return !!isAuth
}

// export const UserSet = (data:UserInfo) => {
//     const dispatch = useAppDispatch();
//     dispatch(setUser(data));
// }

// export const UserRemove = () =>{
//     const dispatch = useAppDispatch();
//     dispatch(removeLoggedUser());
// }

export {}