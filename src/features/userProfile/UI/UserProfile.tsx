import React,{FC, useState} from 'react'
import styled from '@emotion/styled'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'app/store/hooks';
import { removeCurrentUser, useUserIsAuth, useUserState } from 'entities/user';
import { colors, locationState } from 'shared';

interface UserProfileButtonProps{
    
}

interface MenuItemProps{
    variant?:"red"|"dark"
}
export const UserProfile:FC<UserProfileButtonProps> = ({...UserProfileProps}) => {
    const [isOpen,setIsOpen] = useState<boolean>(false);

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isAuth = useUserIsAuth();
    const currentUser = useUserState().currentUser;
    const userProfilePhoto = (currentUser?.photoUrl)? currentUser.photoUrl : '/img/pageHeader/userProfile.png';

    const toggleMenu = () =>{
        isOpen?setIsOpen(false):setIsOpen(true)
    }

    const goToProfile = () =>{
        navigate(`/users/${currentUser?.id}`)
        setIsOpen(false);
    }

    const logOut = ()=>{
        dispatch(removeCurrentUser());
        if(isAuth === false){
            navigate('/login',{state:{from:location.pathname} as locationState});
        }
    }
    return (
        <UserPrifileContainer {...UserProfileProps}>
            <UserProfileButton onClick={toggleMenu} >
                <UserProfileButtonItem>{currentUser?.username}</UserProfileButtonItem>
                <UserProfileButtonItem><img src={userProfilePhoto}></img></UserProfileButtonItem>
            </UserProfileButton>
            {
                isOpen && 
                <UserProfileMenu>
                    <UserProfileMenuItem onClick={goToProfile}variant='dark'>Посмотреть профиль</UserProfileMenuItem>
                    <UserProfileMenuItem onClick={logOut} variant='red'>Выйти из системы</UserProfileMenuItem>
                </UserProfileMenu>
            }
        </UserPrifileContainer>
    )
}

const UserPrifileContainer = styled.div`
    position:relative;
`

const UserProfileButton = styled.div<UserProfileButtonProps>`
    min-width: 140px;
    max-width: 250px;
    height: 42px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    font-family:"Roboto";
    font-size:16px;
    font-weight:400;
    line-height:172%;
    margin-right: 20px;
    cursor: pointer;

`
const UserProfileButtonItem = styled.div`
    &:first-of-type{
        max-width: 200px;
        height: 41px;
        padding-top: 16px;
    }
    &:last-of-type{
        width: 39px;
        height: 39px;
        border-radius: 20px;
        margin-left: 10px;
        & img{
            width: inherit;
            height: inherit;
            border-radius: inherit;
        }
    }
`

const UserProfileMenu = styled.div`
    position:absolute;
    width: 136px;
    height: fit-content;
    border-radius: 5px;
    background-color: ${colors.generalColor.white};
    box-shadow: 0px 0px 2px 2px ${colors.inputColors.primary.shadow};
    top:45px;
    right:20px;
    font-family:"Inter";
    font-size:12px;
    font-weight:400;
    line-height:117%;
    padding:5px;
    gap:5px;
    box-sizing:border-box;
`

const UserProfileMenuItem = styled.div<MenuItemProps>`
    cursor: pointer;
    color:${({variant})=>variant === 'red'
    ? colors.generalColor.redColor
    : colors.textColors.darkTextColor
    };
`
export {}