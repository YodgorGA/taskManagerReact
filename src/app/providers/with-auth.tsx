import { useUserIsAuth } from "entities/user";
import { useEffect,useLayoutEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const withAuth = (Component: () => JSX.Element) => () =>{
    const [isAuth,setIsAuth] = useState(useUserIsAuth())
    // const isAuth = useUserIsAuth()
    const navigate = useNavigate();
    const location = useLocation();

    useEffect (()=>{
        if(isAuth === false){
           navigate('/login',{state:{from:location.pathname}})
        }
    },[])
    return (
        <Component/>
    )
}

export {}