import React from 'react';
// Component
import CheckboxInput from './CheckboxInput';
// Checkbox data
import { bottomCheckboxes } from '../data/cheboxesData';

const BottomCheckboxes = () => {
    return (
        <div className='bottom-checkboxes'>
            {bottomCheckboxes.map((checkbox, index) => (
                <CheckboxInput
                    key={index}
                    label={checkbox.label}
                    checked={checkbox.checked}
                    disabled={checkbox.disabled}
                    title={checkbox.title}
                    indeterminate={checkbox.indeterminate}
                />
            ))}
        </div>
    )
}

export default BottomCheckboxes