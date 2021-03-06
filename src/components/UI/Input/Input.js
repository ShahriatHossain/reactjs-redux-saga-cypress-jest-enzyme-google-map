import React from 'react';
import { Form } from 'react-bootstrap';

import './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = ['InputElement'];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('Invalid');
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <Form.Control
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <Form.Control as="textarea" 
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <Form.Control as="select">
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </Form.Control>
            );
            break;
        default:
            inputElement = <Form.Control
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <Form.Group controlId="formName">
            {inputElement}
        </Form.Group>
    );

};

export default input;