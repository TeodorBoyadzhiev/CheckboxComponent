import React, { useState, useEffect, useRef } from 'react';
// Styles
import '../styles.css';
// Components
import Form from 'react-bootstrap/Form';


const CheckboxInput = ({ id, label, title, checked, disabled, indeterminate }) => {
    const [indeterminetBox, setInterminetBox] = useState(false);

    const cRef = useRef();

    useEffect(() => {
        if (indeterminate && indeterminetBox === false) {
            cRef.current && (cRef.current.indeterminate = true)
        }
    }, [cRef, indeterminetBox]);

    const handleClick = () => {
        setInterminetBox(!indeterminetBox)
    }

    return (
        <div className='checkbox-wrapper'>
            {indeterminate ?
                <>
                    <div className='title'>{title}</div>
                    {['checkbox'].map((type) => (
                        <label key={`default-${type}`} className="d-flex align-items-center">
                            <Form.Check
                                className='checkbox'
                                type={type}
                                id={id}
                                checked={checked}
                                disabled={disabled}
                                onChange={handleClick}
                                ref={cRef}
                            />
                            <span>{label}</span>
                        </label>
                    ))}
                </>
                : <>
                    <div className='title'>{title}</div>
                    {['checkbox'].map((type) => (
                        <label key={`default-${type}`} className="d-flex align-items-center">
                            <Form.Check
                                className='checkbox'
                                type={type}
                                id={id}
                                checked={checked}
                                disabled={disabled}
                            />
                            <span>{label}</span>
                        </label>
                    ))}
                </>
            }
        </div>
    )
}

export default CheckboxInput