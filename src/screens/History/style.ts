import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: #fff;
    align-items: center;
    justify-content: center;
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


export const ContainerFlatList = styled.View`
    width: 100%;
    border-radius: 10px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  
`;

export const TextHello = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: black;
    margin-left: 10px;
    margin-top: 15px;
`;

export const ListMovimientos = styled.FlatList`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding-top: 10px;
`;


export const TextTitlePay = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: black;
    margin-left: 5px;
`;

export const TextMovement = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: gray;
    margin-left: 5px;
`;
export const TextDate = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: gray;
    margin-left: 5px;
`;


export const ContainerTitlePay = styled.View`
    width: 100%;
    border-radius: 10px;
    justify-content:flex-start;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
    margin-top: 10px;
`;

export const ContainerTitleAndIcon = styled.View`
    width: 50%;
    height: 100%;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
`;


export const ContianerMoneyStatus = styled.View`
    width: 70%;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
`;

export const TextMoney = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: black;
    margin-left: 5px;
    
`;

export const TextStatus = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: gray;
    margin-left: 5px;
`;


export const ListFooter = styled.View`
    padding-top: 15px;
`;


export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: #CED0CE;
`;
