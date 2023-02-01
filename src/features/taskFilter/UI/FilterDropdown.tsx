import React,{FC, useState} from 'react'

interface FilterDropdownProps{
    placeholder:string,
    items:string[],
    purpose:string,
}
export const FilterDropdown:FC<FilterDropdownProps> = ({placeholder,items,purpose,...FilterDropdownProps}) => {
    const [state,setState] = useState<string>('closed');
    const [arrow,setArrow] = useState<string>('open');
    const [active,setActive] = useState<string>('default');
    const hanldeDropdownClick = () =>{
        if(state === 'open')
        { 
            setState('closed');
            setArrow('open');
            setActive('default');
        }
        else{
            setState('open');
            setArrow('close');
            setActive('active');
        }
    }
    return (
        <div className={`_filter_dropdown dropdownFilter_${purpose}__${active}`}>
            <div className="dropdownFilter_form" onMouseDown={hanldeDropdownClick}>
                <div className={`dropdownFilter_text__${active}`}>{placeholder}</div>
                <div className={`dropdownFilter_arrow__${arrow}`}></div>
            </div>
            {(state === 'open')? 
                <div className={`dropdownFilter_droppedfield droppedFieldDropdown__${state}`}>
                {items.map((item)=>{return (
                    <div className="droppedFieldDropdown_item">
                        <p>{item}</p>
                    </div>
                )})}
            </div>:<div></div>
            }
        </div>
    )
}

export {}