import React,{FC, useEffect, useState} from 'react'
import { Input, Dropdown as UnitDropdown, resetField} from 'shared';
import { ApplyEditing, DenyEditing, useAddWorkTimeMutation,addWorkTimeBody } from 'entities/task';
import { convertWorkTimeToMinutes } from '../lib/helpers/hepler';
import { FilterInput } from 'pages/test/UI/FilterInput';
import { Dropdown } from 'pages/test/UI/Dropdown';

interface AddWorkTimeProps{
  elapsedTimeForView:string,
  elapsedTimeForLib:number,
  currentUser:string,
  taskId:string
}


export const AddWorkTime:FC<AddWorkTimeProps> = ({taskId,currentUser,elapsedTimeForLib,elapsedTimeForView,...AddWorkTimeProps}) => {
    const [addWorkTimeFormState,setAddWorkTimeFormState] = useState<string>('hidden');
    const [isFormClear,setIsFormClear] = useState<boolean>(false);
    const [duration,setDuration] = useState('0');
    const [unit,setUnit] = useState('Минуты');

    const [changeWorkTime] = useAddWorkTimeMutation();

    const denyChanges = () =>{
      resetField(setIsFormClear);
      setAddWorkTimeFormState('hidden');
    }

    const addWorkTimeButtonClickHandler = () =>{
      (addWorkTimeFormState !== "hidden")?setAddWorkTimeFormState("hidden"):setAddWorkTimeFormState("visible")
    }

    const getDuration = (value:string) =>{
      Number(value) > 0? setDuration(value):console.error('Count of time which you want to add must be positive')
    }

    const getUnit = (value:string) =>{
      setUnit(value)
    }

    const applyChanges = () =>{
      changeWorkTime({
        id:taskId,
        body:{
          currentUser:currentUser,
          timeInMinutes:convertWorkTimeToMinutes(Number(duration),unit)
        }
      })
      resetField(setIsFormClear);
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
            <p>{elapsedTimeForView}</p>
        </div>
        <div className={`taskInfoItems_item__addWorkTimeForm addTimeForm__${addWorkTimeFormState}`}>
          <div className="addTimeForm__visible_form">
            <FilterInput 
              callback={getDuration}
              monitorableState={isFormClear} 
              dataKey='minutes'
              placeholder='Количество'
              key={1}
              type='number'
            />
              
            <Dropdown 
              returnValue={getUnit}
              dataKey='unit'
              width='185px'
              defaultContent='Единица измерения' 
              dropdownItems={['Минуты','Часы']} 
              monitorableState={isFormClear}
              key={2}
            />
              
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