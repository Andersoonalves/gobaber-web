import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Button from '../../components/button';
import Input from '../../components/Input';

const SignIn: React.FC = () => (
    <>
        <Container>
            <Content>
                <img src={logImg} alt="GoBarber" />
                <form action="">
                    <h1>Login</h1>
                    <Input
                        name="name"
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
                    <Button type="submit">SigIn</Button>
                    <a href="forgot"> Forgot Password</a>
                </form>
                <a href="login">
                    <FiLogIn />
                    Create Account
                </a>
            </Content>
            <Background />
        </Container>
    </>
);

export default SignIn;
