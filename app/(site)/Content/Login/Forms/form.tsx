import React, {useState} from 'react';
import SignIn from "./Signin";
import Signup from "./Signup";
import {PressEvent} from "@react-types/shared";

interface Props {
    onClose?: (e: PressEvent) => void,
}

export enum CurrentForm {
    singIn = "sign in",
    singUp = "sign up",
}

const Form = ({onClose}: Props) => {
    const [currentForm, setCurrentForm] = useState<CurrentForm>(CurrentForm.singIn);

    switch (currentForm) {
        case CurrentForm.singIn:
            return <SignIn onClose={onClose} setCurrentForm={setCurrentForm}/>;
        case CurrentForm.singUp:
            return <Signup onClose={onClose} setCurrentForm={setCurrentForm}/>;
        default:
            return <SignIn onClose={onClose} setCurrentForm={setCurrentForm}/>
    }
};

export default Form;