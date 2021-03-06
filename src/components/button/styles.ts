import styled from 'styled-components';
import { shade } from 'polished';

export const container = styled.button`
    margin-top: 16px;
    background: #ff9000;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312e38;
    font-weight: 500;
    width: 100%;
    transition: 0.2s background-color;

    &:hover {
        background: ${shade(0.2, '#ff9000')};
    }
`;
