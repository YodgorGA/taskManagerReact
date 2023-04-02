export const getPriorityName = (priority:string) =>{
    switch(priority){
      case 'low':
        return 'Низкий';
      case 'medium':
        return 'Средний';
      case 'high':
        return 'Высокий';
      default :
        return 'Без ранга'  
    }
  }

export const getStatusName = (engName:string) =>{
    switch (engName){
        case 'open':
            return 'Открыто'
        case 'process':
            return 'В работе'
        case 'test':
            return 'Тестирование'
        case 'done':
            return 'Завершено'
        default :
            return 'Не указан'
    }
}


export const getListItemButtonItemsState = (propStatus:string|undefined) => {
  switch (propStatus){
    case 'opened':
      return {
        test:false,
        reopen:false,
      }
    case 'testing':
      return{
        test:false,
        reopen:true,
      }
    case 'inProgress':
      return {
        test:true,
        reopen:true,
      }
    case 'complete':
      return {
        test:false,
        reopen:true,
      }
    default:
      return{
        test:false,
        reopen:false
      }
  }
}

export const getTaskFilterInitialState = () => {
  const initialTaskFilterState ={
    type:undefined,
    title:undefined,
    assignedId:undefined,
    status:undefined,
    rank:undefined
  }
  return initialTaskFilterState;
}

export const getTaskDropdownStaticArgument = (parentClass:string,value:string) =>{
  switch (parentClass){
    case 'type':
      if(value === 'Фикс'){
        return 'bug'
      }
      else{ 
        return 'task';
      }
    case 'status':
      if(value === 'Завершено'){
        return 'complete'
      }
      else if(value === 'Тестирование'){ 
        return 'testing';
      }
      else if(value === 'В работе'){
        return 'inProgress'
      }
      else{
        return 'opened'
      }
    case 'rank':
      if(value === 'Высокий'){
        return 'high'
      }
      else if(value === 'Средний'){
        return 'medium'
      }
      else{
        return 'low'
      }
    default:
      return 'Ошибка'
  }
}

export {}