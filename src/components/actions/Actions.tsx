import React from 'react';
import { Button, Container, ContainerButton, ContainerHello, ContainerMoney, TextButton, TextHello, TextPrice } from './style';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';

const Actions = () => {
    return (
        <Container>
            <ContainerHello>
                <TextHello>Hola Francisco!</TextHello>
                <ContainerMoney>
                    <TextPrice>$109,65</TextPrice>
                    <Icon name="eye" color={'black'} size={20} style={{ marginLeft: 130 }} />
                    <Icon2 name="reload" color={'black'} size={20} style={{ marginRight: 20 }} />
                </ContainerMoney>
            </ContainerHello>
            <ContainerButton>
                <Button>
                    <TextButton>
                        Depositar
                    </TextButton>
                </Button>
                <Button>
                    <TextButton>Retirar</TextButton>
                </Button>
            </ContainerButton>
        </Container>
    );
};

export default Actions;
