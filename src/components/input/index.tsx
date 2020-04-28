import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

// this input has the same props from a original input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string; // name will be required
    icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...restProps }) => (
    <Container>
        {Icon && <Icon size={20} />}
        <input {...restProps} />
    </Container>
);

export default Input;
