import { LocationType } from "../types/types";

export const getIdFromLocation = (location:LocationType) =>{
    let subStings:string[] = location.pathname.split('/');
    return subStings[2];
}

export {}