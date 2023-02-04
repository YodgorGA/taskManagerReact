import React,{FC, useState} from 'react'
import { Input } from 'shared';
import { ApplyEditing, DenyEditing, UnitDropdown } from 'entities/taskPage';

export const AddWorkTime:FC = () => {
    const [addWorkTimeFormState,setAddWorkTimeFormState] = useState<string>('visible');
    const addWorkTimeButtonClickHandler = () =>{
      (addWorkTimeFormState !== "hidden")?setAddWorkTimeFormState("hidden"):setAddWorkTimeFormState("visible")
    }
    const closeForm = () =>{
      setAddWorkTimeFormState('hidden');
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
        <div className={`taskInfoItems_item__addWorkTimeForm addTimeForm__${addWorkTimeFormState}`}>
          <div className="addTimeForm__visible_form">
            <Input parentState={addWorkTimeFormState} placeholder='Количество' type='text' key={1}/>
            <UnitDropdown parentState={addWorkTimeFormState}/>
          </div>
          <div className="addTimeForm__visible_buttons">
            <ApplyEditing callback={closeForm}/>
            <DenyEditing callback={closeForm}/>
          </div>
        </div>
    </>
  )
}

export {}