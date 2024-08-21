import React from 'react';
import LogoutButton from "./LogoutButton";
import {verifySession} from "@/app/lib/dal";
import LoginButton from "./LoginButton";

interface IProps {
    onOpen: () => void,
}

const SessionComponent = async ({onOpen}: IProps) => {
    const session = await verifySession();

    return (
        <div className="flex gap-3">
            {/*<LoginButton onOpen={onOpen} session={!session}/>*/}
            {/*<LogoutButton session={!session}/>*/}
        </div>
    );
};

export default SessionComponent;