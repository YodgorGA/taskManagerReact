export const resetInput = (setter:(value:boolean)=>void) =>{
    setter(true);
    setTimeout(()=>{
        setter(false)
    },0)
}

export {}