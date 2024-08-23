"use client";

import React from "react";
import {
    Modal,
    ModalContent, useDisclosure,
} from "@nextui-org/react";
import Form from "@/app/(auth)/Login/Forms/form";
import LoginButton from "@/app/(auth)/Login/sessionsComponents/LoginButton";
import LogoutButton from "@/app/(auth)/Login/sessionsComponents/LogoutButton";

interface IProps {
    isAuth?: boolean
}

export default function Login({isAuth}: IProps ) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <LoginButton onOpen={onOpen} isAuth={isAuth}/>
            <LogoutButton isAuth={isAuth} />
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
