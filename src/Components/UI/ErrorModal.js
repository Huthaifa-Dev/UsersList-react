import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import './dist/ErrorModal.css';

const Backdrop = props => {
    return <div className="backdrop" onClick={props.onClick} />;
};

const ModalOverlay = props => {
    return (
        <Card className='modal'>
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <Button onClick={props.onClick}>Okay</Button>
            </footer>
        </Card>
    )
}
const ErrorModal = props => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onClick={props.onClick} />, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default ErrorModal;