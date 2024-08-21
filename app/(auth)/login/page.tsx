'use client'

import React from 'react';
import {useFormState} from 'react-dom';
import {login, logout, signup} from '@/app/actions/auth';

const SignupForm = () => {
    const [signupState, signupAction, pending] = useFormState(signup, undefined);
    const [LoginState, loginAction] = useFormState(login, {message: ''});

    return (
        <div>
            {/*<form action={signupAction}>*/}
            {/*    <div>*/}
            {/*        <label htmlFor="name">Name</label>*/}
            {/*        <input id="name" name="name" placeholder="Name"/>*/}
            {/*    </div>*/}
            {/*    {signupState?.errors?.name && <p>{signupState.errors.name}</p>}*/}

            {/*    <div>*/}
            {/*        <label htmlFor="email">Email</label>*/}
            {/*        <input id="email" name="email" type="email" placeholder="Email"/>*/}
            {/*    </div>*/}
            {/*    {signupState?.errors?.email && <p>{signupState.errors.email}</p>}*/}

            {/*    <div>*/}
            {/*        <label htmlFor="password">Password</label>*/}
            {/*        <input id="password" name="password" type="password"/>*/}
            {/*    </div>*/}

            {/*    {signupState?.errors?.password && (*/}
            {/*        <div>*/}
            {/*            <ul>*/}
            {/*                {signupState.errors.password.map((error) => (*/}
            {/*                    <li key={error}>- {error}</li>*/}
            {/*                ))}*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*    <p aria-live="polite">{signupState?.message}</p>*/}
            {/*    <button aria-disabled={pending} type="submit">*/}
            {/*        {pending ? 'Отправка...' : 'Зарегистрироваться'}*/}
            {/*    </button>*/}
            {/*</form>*/}

            {/*<form action={loginAction}>*/}
            {/*    <div>*/}
            {/*        <label htmlFor="emailLogin">Email</label>*/}
            {/*        <input id="emailLogin" name="email" type="email" placeholder="Email"/>*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        <label htmlFor="passwordLogin">Password</label>*/}
            {/*        <input id="passwordLogin" name="password" type="password"/>*/}
            {/*    </div>*/}
            {/*    <p aria-live="polite">{LoginState?.message}</p>*/}
            {/*    <button aria-disabled={pending} type="submit">*/}
            {/*        {pending ? 'Отправка...' : 'ВОЙТИ'}*/}
            {/*    </button>*/}
            {/*</form>*/}

            {/*<form action={logout}>*/}
            {/*    <button>Выйти</button>*/}
            {/*</form>*/}
        </div>
    );
};

export default SignupForm;