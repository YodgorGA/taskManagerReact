import React,{FC} from 'react'
import '../styles/label.scss'

interface LabelProps{
    content:string
}

export const Label:FC<LabelProps> = ({content,...LabelProps}) => {
    return (
        <div className='_label'>
            {content}
        </div>
    )
}

export {}