type pagInfoT = {
    firstIN:number,
    lastIN:number,
}


export const getPageItemsCount = (limit:number,total:number,page:number) =>{
    let first = 1;
    let last = 8;
    for(let i = 1 ; i < page; i ++){
        if(page !== 1){
            if(last + limit < total){
                first = last + 1
                last = first + limit
            }
            else if(last + limit > total && last < total){
                first = last + 1
                last = total
            }
        }
    }
    return {first,last}
}

export const getCountOfButtons = (total:number) =>{
    let buttons = [];
    
    if(total % 8 !== 0){
        for(let i = 0 ; i <= (total / 8); i++){
            buttons.push(i)
        }
    }
    else{
        for(let i = 0; i <= (total / 8) -1 ;i ++){
            buttons.push(i)
        }
        
    }
    return buttons
}
export {}