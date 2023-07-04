import styled from 'styled-components/native';
import { Colors } from '../../helpers/Color';

export const Container = styled.View`
    flex:1;
    background-color: ${Colors.white};
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: ${Colors.black};
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;
