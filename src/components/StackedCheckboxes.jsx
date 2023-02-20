import React from 'react';
// Component
import CheckboxInput from './CheckboxInput';
// Checkbox data
import { upperCheckboxes } from '../data/cheboxesData';

const StackedCheckboxes = () => {
    return (
        <div className='stacked-cheboxes'>
            <div className='title'>Stacked Checkboxes</div>
            {upperCheckboxes.map((checkbox, index) => (
                <CheckboxInput key={index} label={checkbox.label} id={index} />
            ))}
        </div>
    )
}

export default StackedCheckboxes