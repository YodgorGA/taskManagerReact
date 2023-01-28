import React,{FC, useState} from 'react'
import FilterDropdownItem from './FilterDropdownItem';

interface FilterDropdownProps{
placeholder:string,
items:string[],
purpose:string,
}
export const FilterDropdown:FC<FilterDropdownProps> = ({placeholder,items,purpose,...FilterDropdownProps}) => {
    const [state,setState] = useState<string>('closed');
    const [arrow,setArrow] = useState<string>('open');
    const hanldeDropdownClick = () =>{
        if(state === 'open')
        { 
            setState('closed');
            setArrow('open');
        }
        else{
            setState('open');
            setArrow('close');
        }
    }
    if(state === 'closed'){
        return (
            <div className={`_filter_dropdown dropdownFilter_${purpose}__default`}>
                <div className="dropdownFilter_form" onMouseDown={hanldeDropdownClick}>
                    <div className="dropdownFilter_text">{placeholder}</div>
                    <div className={`dropdownFilter_arrow__${arrow}`}></div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className={`_filter_dropdown dropdownFilter_${purpose}__active`}>
                <div className="dropdownFilter_form" onMouseDown={hanldeDropdownClick}>
                    <div className="dropdownFilter_text__active">{placeholder}</div>
                    <div className={`dropdownFilter_arrow__${arrow}`}></div>
                </div>
                <div className={`dropdownFilter_droppedfield droppedFieldDropdown__${state}`}>
                    {items.map((item)=>{
                        return <FilterDropdownItem item={item}/>
                    })}
                </div>
            </div>
        )
    }
    
}

export {}