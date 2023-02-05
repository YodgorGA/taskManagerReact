import React,{FC, useState} from 'react'
import { Dropdown as UnitDropdown} from 'shared';
import { Input } from 'shared';
import { ApplyEditing, DenyEditing } from 'entities/taskPage';


export const AddWorkTime:FC = () => {
    const [addWorkTimeFormState,setAddWorkTimeFormState] = useState<string>('hidden');
    const [isApplyPressed,setIsApplyPressed] = useState<boolean>(false);
    const [isDenyPressed,setIsDenyPressed] = useState<boolean>(false);
    const addWorkTimeButtonClickHandler = () =>{
      (addWorkTimeFormState !== "hidden")?setAddWorkTimeFormState("hidden"):setAddWorkTimeFormState("visible")
    }
    const applyChanges = () =>{
      setIsApplyPressed(true);
      setAddWorkTimeFormState('hidden');
      setIsApplyPressed(false);
    }
    const denyChanges = () =>{
      setIsDenyPressed(true);
      setAddWorkTimeFormState('hidden');
      setIsApplyPressed(false);
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
            <Input monitorableState={[isApplyPressed,isDenyPressed]} placeholder='Количество' type='text' key={1}/>
            <UnitDropdown defaultContent='Единица измерения' dropdownItems={['Минуты','Часы']} monitorableState={[isApplyPressed,isDenyPressed]}/>
          </div>
          <div className="addTimeForm__visible_buttons">
            <ApplyEditing callback={applyChanges}/>
            <DenyEditing callback={denyChanges}/>
          </div>
        </div>
    </>
  )
}

export {}