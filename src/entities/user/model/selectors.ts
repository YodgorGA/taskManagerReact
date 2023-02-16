import { useAppSelector} from 'app/store/hooks';
import { selectUserInfo } from './userSlice';

export const useUser = () => useAppSelector(selectUserInfo);

export const useUserIsAuth = () => {
    const isAuth = useUser().id;
    return !isAuth === null
}

export {}