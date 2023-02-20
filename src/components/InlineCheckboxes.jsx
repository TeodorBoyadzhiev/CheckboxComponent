import React from 'react';
// Component
import CheckboxInput from './CheckboxInput';
// Checkbox data
import { upperCheckboxes } from '../data/cheboxesData';

const InlineCheckboxes = () => {
    return (
        <div className='inline-cheboxes'>
            <div className='title'>Inline Checkboxes</div>
            <div className='inputs-container'>
                {upperCheckboxes.map((checkbox, index) => (
                    <CheckboxInput key={index} label={checkbox.label} id={index} />
                ))}
            </div>
        </div>
    )
}

export default InlineCheckboxes