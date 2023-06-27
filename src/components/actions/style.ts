import styled from 'styled-components/native';
import { Colors } from '../../helpers/Color';

export const Container = styled.View`
    width: 90%;
    height: 30%;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 20px;
    elevation: 5;
    background-color: white;
    padding: 10px;
`;


export const ContainerHello = styled.View`
    width: 100%;
    height: 30%;
    border-radius: 10px;
    position: absolute;
    margin-bottom: 0px;
    top: 0px;
`;

export const ContainerMoney = styled.View`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const ContainerButton = styled.View`
    width: 100%;
    height: 50%;
    border-radius: 10px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-top: 100px;
`;

export const Button = styled.TouchableOpacity`
    width: 42%;
    height: 50%;
    background-color: ${Colors.primary};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 15px;
    margin-right: 15px;
    
`;


export const TextButton = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin-left: 5px;

    text-align: center;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;

`;
export const TextHello = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.primary};
    margin-left: 5px;
    margin-top: 15px;
`;


export const TextPrice = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: black;
    margin-left: 5px;
    


`;
