import styled from 'styled-components/native';
import { Colors } from '../../helpers/Color';

export const Container = styled.View`
  width: 100%;
    height: 100%;
    background-color: ${Colors.white};
    align-items: center;
    justify-content: center;
    flex:1;
`;

export const Logo = styled.Image`
    width: 250px;
    height: 50px;
    position: relative;
    resize-mode: contain;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;  
    align-items: center;
    justify-content: center;
`;

export const InputText = styled.TextInput`
    width: 100%;
    height: 60px;
    background-color: ${Colors.white};
    border-radius: 30px;
    padding-left: 20px;
    font-size: 16px;
    color: ${Colors.black};
    margin-bottom: 15px;
    border: 1px solid ${Colors.black};
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight:500;
    color: ${Colors.black};
    margin-bottom: 20px;
`;

export const ButtonArea = styled.View `
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 60px;
    background-color: ${Colors.white};
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    border: 1px solid ${Colors.primary};
    margin-left: 15px;
    margin-right: 15px;
`;

export const TitleButton = styled.TouchableOpacity`
    font-size: 16px;
    font-weight: 500;
    color: ${Colors.primary};
`;
