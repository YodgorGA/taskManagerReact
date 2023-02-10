import React,{FC, useEffect, useState} from 'react'
import '../styles/dropdown.scss';

interface DropdownProps{
  monitorableState:boolean[]|boolean;
  dropdownItems:string[];
  defaultContent:string;
  purpose?:string
  parentClass?:string;
}

export const Dropdown:FC<DropdownProps> = ({parentClass,purpose,defaultContent,dropdownItems,monitorableState,...UnitDropdownProps}) => {
  const [state,setState] = useState<string>('closed');
  const [arrow,setArrow] = useState<string>('open');
  const [active,setActive] = useState<string>('default');
  const [content,setContent] = useState<string>(defaultContent);
  
  const dropdownClickHandler = () =>{
    if(state === 'open')
    { 
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
  setState('closed');
  setArrow('open');
  setActive('active');
}
  useEffect(()=>{
    setState('closed');
    setArrow('open');
    setActive('default');
    (defaultContent && setContent(defaultContent));
  },[monitorableState])
  return (
    <div className={`${parentClass !== undefined?parentClass+'_dropdown':''} ${purpose !== undefined?'_dropdown_'+purpose:''} _dropdown__${active}`}>
          <div className="_dropdown_form" onMouseDown={dropdownClickHandler}>
                <div className={`_dropdown_text__${active}`}>{content}</div>
                <div className={`_dropdown_arrow__${arrow}`}></div>
            </div>
            {(state === 'open')? 
                <div className={`_dropdown_droppedfield droppedFieldDropdown__${state}`}>
                  {dropdownItems.map((item)=>{
                    return(
                      <div key={Math.random() }className="droppedFieldDropdown_item">
                        <p onMouseDown={dropdownItemClickHandler}>{item}</p>
                      </div>
                    )
                  })}
            </div>:<div></div>}
    </div>)
}

export {}