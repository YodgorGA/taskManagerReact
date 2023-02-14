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

export {} 