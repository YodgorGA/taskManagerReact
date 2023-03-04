export const resetField = (setter:(value:boolean)=>void) =>{
    setter(true);
    setTimeout(()=>{
        setter(false)
    },0)
}

export {}