"use client";

import React from "react";
import {
    Modal,
    ModalContent, useDisclosure,
} from "@nextui-org/react";
import Form from "@/app/(auth)/Login/Forms/form";
import LoginButton from "@/app/(auth)/Login/sessionsComponents/LoginButton";
import Avatar from "@/app/(auth)/Login/sessionsComponents/Avatar";

interface IProps {
    isAuth?: boolean,
    userEmail?: string,
    userName?: string,
    userAvatar?: string | null,
}

export default function Login({isAuth, userEmail, userName, userAvatar}: IProps ) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <LoginButton onOpen={onOpen} isAuth={isAuth}/>
            <Avatar isAuth={isAuth} userEmail={userEmail} userName={userName} userAvatar={userAvatar}/>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <Form onClose={onClose}/>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
