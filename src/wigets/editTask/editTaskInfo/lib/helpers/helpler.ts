export const getUserFriendlyTypeValue = (value:string) =>{
    switch (value){
        case 'bug':
            return 'Фикс'
        case 'task':
            return 'Создание'
    }
}

export const getUserFriendlyRankValue = (value:string) =>{
    switch (value){
        case 'low':
            return 'Низкий'
        case 'medium':
            return 'Средний'
        case 'high':
            return 'Высокий'
    }
}

export const getUserFriendlyStatusValue = (value:string) =>{
    switch (value){
        case 'opened':
            return 'Открыто'
        case 'inProgress':
            return 'В работе'
        case 'testing':
            return 'Тестирование'
        case 'complete':
            return 'Завершено'
    }
}
