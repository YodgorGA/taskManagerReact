import React,{FC} from 'react'
import { Dropdown as EditTaskInfoDropdown } from 'shared'

interface EditTaskInfoItemProps{
    label:string,
    dropdownPurpose:string,
    dropdownItems:string[],
    monitorableState:boolean,
    defaultContent:string,
}

export const EditTaskInfoItem:FC<EditTaskInfoItemProps> = ({defaultContent,monitorableState,dropdownItems,dropdownPurpose,label,...EditTaskInfoItemProps}) => {
    return (
        <div className='editTaskInfo_item'>
        <label className='_label'>
            {label}
        </label>
        <EditTaskInfoDropdown monitorableState={monitorableState} purpose={dropdownPurpose} defaultContent={defaultContent} dropdownItems={dropdownItems}/>
        </div>
    )
}

export {}