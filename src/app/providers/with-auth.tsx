import { useUserIsAuth } from "entities/user"
import { useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const withAuth = (Component: () => JSX.Element) => () =>{
    const isAuth = useUserIsAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect (()=>{
        if (isAuth === false){
            location.state = {from:location.pathname}
            navigate('/login',{state:{from:location.pathname}})
        }
    },[isAuth])
    return (
        <Component/>
    )
}

export {}