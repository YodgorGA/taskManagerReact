import { UserInfo } from "entities/user";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const withAuth = (Component: () => JSX.Element) => () =>{
    let currentUser:UserInfo;
    const navigate = useNavigate();
    const location = useLocation();

    useEffect (()=>{
        const lsAuthInfo = localStorage.getItem('persist:root');
        
        if(lsAuthInfo !== null){
            const AuthInfoObj = JSON.parse(lsAuthInfo);
            currentUser = JSON.parse(AuthInfoObj.currentUser);
        }
        if(currentUser === null){
            navigate('/login',{state:{from:location.pathname}})
        }
    },[])
    return (
        <Component/>
    )
}

export {}