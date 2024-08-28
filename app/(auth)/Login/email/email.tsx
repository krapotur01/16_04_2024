import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
    verificationCode?: string;
    currentMail: string;
}

export default function Email({verificationCode, currentMail}: EmailProps) {

    const switchMailComponent = (current: string) => {
        switch (current) {
            case "sign-up":
                return <>
                    <Heading style={h1}>Подтверждение электронной почты</Heading>
                    <Text style={mainText}>
                        Спасибо, что решили стать нашим клиентом. Мы хотим убедиться,
                        что это действительно вы. Пожалуйста, введите следующий проверочный код в форме
                        регистрации.
                        Если вы не хотите создавать учетную запись, вы можете проигнорировать это
                        сообщение.
                    </Text>
                </>;
            case "reset-password":
                return <>
                    <Heading style={h1}>Сброс пароля: востановление доступа</Heading>
                    <Text style={mainText}>
                        Мы хотим убедиться, что это действительно вы. Пожалуйста, введите следующий проверочный код в
                        форме востановления пароля.
                        Если это были не вы, проигнорируйте это
                        сообщение.
                    </Text>
                </>;
            default:
                return <>
                    <Heading style={h1}>Подтверждение электронной почты</Heading>
                    <Text style={mainText}>
                        Спасибо, что решили стать нашим клиентом. Мы хотим убедиться,
                        что это действительно вы. Пожалуйста, введите следующий проверочный код в форме
                        регистрации.
                        Если вы не хотите создавать учетную запись, вы можете проигнорировать это
                        сообщение.
                    </Text>
                </>;
        }
    }

    return (
        <Html>
            <Head/>
            <Preview>Подтверждение электронной почты</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={coverSection}>
                        <Section style={upperSection}>
                            {switchMailComponent(currentMail)}
                            <Section style={verificationSection}>
                                <Text style={verifyText}>КОД</Text>
                                <Text style={codeText}>{verificationCode}</Text>
                                <Text style={validityText}>
                                    (Этот код будет действовать 10 минут)
                                </Text>
                            </Section>
                        </Section>
                        <Hr/>
                        <Section style={lowerSection}>
                            <Text style={cautionText}>
                                Мы никогда не отправим вам электронное письмо с просьбой сообщить или подтвердить свой
                                пароль, номер кредитной карты или банковского счета.
                                Будьте бдительны!
                            </Text>
                        </Section>
                    </Section>
                    <Text style={footerText}>
                        Это сообщение отправлено в целях предоставления возможности для регистрации или востановления
                        пароля на сайте.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: "#fff",
    color: "#212121",
};

const container = {
    padding: "20px",
    margin: "0 auto",
    backgroundColor: "#eee",
};

const h1 = {
    color: "#333",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
};

const text = {
    color: "#333",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    margin: "24px 0",
};

const coverSection = {backgroundColor: "#fff"};

const upperSection = {padding: "25px 35px"};

const lowerSection = {padding: "25px 35px"};

const footerText = {
    ...text,
    fontSize: "12px",
    padding: "0 20px",
};

const verifyText = {
    ...text,
    margin: 0,
    fontWeight: "bold",
    textAlign: "center" as const,
};

const codeText = {
    ...text,
    fontWeight: "bold",
    fontSize: "36px",
    margin: "10px 0",
    textAlign: "center" as const,
};

const validityText = {
    ...text,
    margin: "0px",
    textAlign: "center" as const,
};

const verificationSection = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const mainText = {...text, marginBottom: "14px"};

const cautionText = {...text, margin: "0px"};
