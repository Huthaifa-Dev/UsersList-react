import React, { useState, useRef } from "react";

import './dist/UserForm.css';


import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [warning, setWarning] = useState();



    const warningHandler = () => {
        setWarning(null);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
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
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    return (
        <React.Fragment>
            {warning && <ErrorModal title={warning.title} message={warning.message} onClick={warningHandler} />}
            <Card className="user-form__controls">
                <form onSubmit={addUserHandler}>

                    <div className="user-form__control">
                        <label htmlFor='username'>Username</label>
                        <input id='username' type='text' ref={nameInputRef} />
                    </div>
                    <div className="user-form__control">
                        <label htmlFor='age'>Age (Years)</label>
                        <input id='age' type='number' ref={ageInputRef} />
                    </div>
                    <div className="user-form__actions">
                        <Button type='submit'>Add User</Button>
                    </div>

                </form>
            </Card>
        </React.Fragment>

    )
}

export default UserForm;