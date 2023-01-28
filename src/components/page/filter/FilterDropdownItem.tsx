import React,{FC} from 'react'

interface FilterDropdownItemProps{
item:string,
}

const FilterDropdownItem:FC<FilterDropdownItemProps> = ({item,...FilterDropdownItemProps}) => {
  return (
    <div className="droppedFieldDropdown_item">
        <p>{item}</p>
    </div>
  )
}

export default FilterDropdownItem