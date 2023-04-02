import React,{FC} from 'react'
import { Dropdown as EditTaskInfoDropdown, Label } from 'shared'
//i delete this from EditTaskInfo

interface EditTaskInfoItemProps{
    label:string,
    dropdownPurpose:string,
    dropdownItems:string[],
    dropdownItemsRelatedData?:string[],
    monitorableState:boolean,
    defaultContent:string,
    parentClass:string,
    dataSource:string,
    returnEditParams:(dataSource:string,arg:string,value:string)=>void,
}

export const EditTaskInfoItem:FC<EditTaskInfoItemProps> = ({dataSource,dropdownItemsRelatedData,parentClass,returnEditParams,defaultContent,monitorableState,dropdownItems,dropdownPurpose,label,...EditTaskInfoItemProps}) => {

    return (
        <div className='editTaskInfo_item'>
        <Label content={label}/>
        <EditTaskInfoDropdown 
            parentClass={parentClass}
            dataSource={dataSource}
            returnValue={returnEditParams} 
            monitorableState={monitorableState} 
            purpose={dropdownPurpose} 
            defaultContent={defaultContent} 
            dropdownItems={dropdownItems}
            relatedData={dropdownItemsRelatedData}
        />
        </div>
    )
}

export {}