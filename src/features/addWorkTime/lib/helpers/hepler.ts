export const convertWorkTimeToMinutes = (value:number,unit:string) =>{
    if(unit === 'Часы'){
        return (value * 60)
    }
    else{
        return value
    }
}

export {}