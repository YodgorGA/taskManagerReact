import React,{FC, useEffect, useState} from 'react'
import { ValueDataKeyFunc, ValueFunc } from 'shared';
import 'shared/styles/dropdown.scss';

interface DropdownProps{
  monitorableState:boolean[]|boolean,
  dropdownItems:string[],
  relatedData?:string[],
  defaultContent:string,
  purpose?:string,
  dataKey?:string,
  returnValue?: ValueDataKeyFunc | ValueFunc;
  propsValue?:string
}

export const Dropdown:FC<DropdownProps> = ({propsValue,relatedData,returnValue,dataKey,purpose,defaultContent,dropdownItems,monitorableState,...UnitDropdownProps}) => {
  const [state,setState] = useState<string>('closed');
  const [arrow,setArrow] = useState<string>('open');
  const [active,setActive] = useState<string>('default');
  const [content,setContent] = useState<string>(propsValue !== undefined?propsValue:defaultContent);
  
  
  const dropdownClickHandler = () =>{
    if(state === 'open'){ 
        setState('closed');
        setArrow('open');
        (content !== defaultContent)?setActive('active'):setActive('default');
    }
    else{
        setState('open');
        setArrow('close');
        setActive('active');
    }
}
  const dropdownItemClickHandler = (e:React.MouseEvent<HTMLParagraphElement, MouseEvent>) =>{
  e.currentTarget.textContent && setContent(e.currentTarget.textContent);
  if(dataKey !== undefined && e.currentTarget.textContent !== null && returnValue){
    returnValue(e.currentTarget.textContent,dataKey);
  }
  setState('closed');
  setArrow('open');
  setActive('active');
  }
  useEffect(()=>{
    if(propsValue !== undefined){
      setContent(propsValue)
      setState('closed');
      setArrow('open');
      setActive('active');
    }
    else{
      setContent(defaultContent);
      setState('closed');
      setArrow('open');
      setActive('default')
    }
  },[propsValue,monitorableState])
  return (
    <div className={`${dataKey !== undefined?'_dropdown_'+dataKey:''} ${purpose !== undefined?'_dropdown_'+purpose:''} _dropdown__${active}`}>
          <div className="_dropdown_form" onMouseDown={dropdownClickHandler}>
                <div className={`_dropdown_text__${active}`}>{content}</div>
                <div className={`_dropdown_arrow__${arrow}`}></div>
            </div>
            {state === 'open' && ( 
                <div className={`_dropdown_droppedfield droppedFieldDropdown__${state}`}>
                  {dropdownItems.map((item)=>{
                    return(
                      <div key={Math.random() }className="droppedFieldDropdown_item">
                        <p onMouseDown={dropdownItemClickHandler}>{item}</p>
                      </div>
                    )
                  })}
            </div>)}
    </div>)
}

export {}