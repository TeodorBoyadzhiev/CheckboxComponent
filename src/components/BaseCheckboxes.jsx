import React from 'react';
// Component
import CheckboxInput from './CheckboxInput';
// Checkbox data
import { upperCheckboxes } from '../data/cheboxesData';

const BaseCheckboxes = () => {
    return (
        <div className='base-cheboxes'>
            <div className='title'>Base Checkboxes</div>
            {upperCheckboxes.slice(0, 1).map((checkbox, index) => (
                <CheckboxInput key={index} label={checkbox.label} id={index} />
            ))}
        </div>
    )
}

export default BaseCheckboxes