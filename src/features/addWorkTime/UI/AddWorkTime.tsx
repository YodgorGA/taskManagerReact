import React,{FC, useState} from 'react'

export const AddWorkTime:FC = () => {
    const [addWorkTimeFormState,setAddWorkTimeFormState] = useState<string>('visible');
    const addWorkTimeButtonClickHandler = () =>{
      (addWorkTimeFormState !== "hidden")?setAddWorkTimeFormState("hidden"):setAddWorkTimeFormState("visible")
    }
    return (
    <>
        <div className="taskInfoItems_item__inWorkTime workTimeItem">
            <label>
                Затраченное время
                <div onMouseDown={addWorkTimeButtonClickHandler} className="workTimeItem_button addWorkTime">
                <div className="addWorkTime_icon"></div>
                Добавить
                </div>
            </label>
            <p>С апишки получу</p>
        </div>
        <div className={`taskInfoItems_item__addWorkTimeForm addTimeForm__${addWorkTimeFormState}`}></div>
    </>
  )
}

export {}