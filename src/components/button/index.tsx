import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// type is like a interface
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FunctionComponent<ButtonProps> = ({
    children,
    ...restProps
}) => (
    <Container type="button" {...restProps}>
        {children}
    </Container>
);

export default Button;
