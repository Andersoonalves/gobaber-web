import React from 'react';
import { FiArrowLeft, FiLogIn, FiUser, FiLock, FiSave } from 'react-icons/fi';
import logImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Button from '../../components/button';
import Input from '../../components/Input/index';

const SignUp: React.FC = () => (
    <>
        <Container>
            <Background />
            <Content>
                <img src={logImg} alt="GoBarber" />
                <form action="">
                    <h1>Create a account</h1>
                    <Input name="name" icon={FiUser} placeholder="Name" />
                    <Input
                        name="email"
                        icon={FiLogIn}
                        type="E-mail"
                        placeholder="E-mail"
                    />
                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Password"
                    />
                    <Button type="submit">Create</Button>
                </form>
                <a href="login">
                    <FiArrowLeft />
                    Bakc to Logon
                </a>
            </Content>
        </Container>
    </>
);

export default SignUp;
