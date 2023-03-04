export const getTaskStatus = (status:string) =>{
    switch (status){
        case 'opened':
            return 'Открыто'
        case 'inProgress':
            return 'В работе'
        case 'testing':
            return 'Тестирование'
        case 'complete':
            return 'Завершено'
        default:
            return 'Не определен'
    }
}

export const getTaskType = (type:string) =>{
    switch (type){
        case 'task':
            return 'Создание'
        case 'bug':
            return 'Фикс'
        default:
            return 'Не определен'
    }
}

export const getTaskRank = (rank:string) =>{
    switch (rank){
        case 'high':
            return 'Высокий'
        case 'medium':
            return 'Средний'
        case 'low':
            return 'Низкий'
        default:
            return 'Не определен'
    }
}


export const convertTimeToHoursMinutes  = (minutes:number) =>{
    const hours = Math.floor(minutes / 60);
    const newMinutes = minutes % 60;
    return `${hours} ч ${newMinutes} мин`

}

export {}