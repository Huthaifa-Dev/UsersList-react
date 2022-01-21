import React from "react";

import './dist/UserForm.css';


import Button from '../UI/Button';
import Card from '../UI/Card';
import { useState } from 'react';
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [warning, setWarning] = useState();

    const onNameChange = (event) => {
        setEnteredName(event.target.value);
    }

    const onAgeChange = (event) => {
        setEnteredAge(event.target.value);
    }

    const warningHandler = () => {
        setWarning(null);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
            setWarning({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 1) {
            setWarning({
                title: 'Invalid age',
                message: 'Please enter a valid age (age > 0).'
            });
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        setEnteredAge('');
        setEnteredName('');
    }

    return (
        <div>
            {warning && <ErrorModal title={warning.title} message={warning.message} onClick={warningHandler} />}
            <Card className="user-form__controls">
                <form onSubmit={addUserHandler}>

                    <div className="user-form__control">
                        <label htmlFor='username'>Username</label>
                        <input id='username' type='text' value={enteredName} onChange={onNameChange} />
                    </div>
                    <div className="user-form__control">
                        <label htmlFor='age'>Age (Years)</label>
                        <input id='age' type='number' value={enteredAge} onChange={onAgeChange} />
                    </div>
                    <div className="user-form__actions">
                        <Button type='submit'>Add User</Button>
                    </div>

                </form>
            </Card>
        </div>

    )
}

export default UserForm;