export const transformDate = (date:string) =>{
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
}

export const getIdFromLocation = (location:{pathname:string}) =>{
    let subStings:string[] = location.pathname.split('/');
    return subStings[2];
}