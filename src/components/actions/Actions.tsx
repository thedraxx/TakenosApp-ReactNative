import React, { useState } from 'react';
import { Button, ButtonAdd, Container, ContainerButton, ContainerButtons, ContainerHello, ContainerMoney, TextButton, TextHello, TextPrice } from './style';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';

const Actions = () => {

    const [showMoneyWallet, setShowMoneyWallet] = useState(false);

    return (
        <Container>
            <ContainerHello>
                <TextHello>Hola Francisco!</TextHello>
                <ContainerMoney>
                    <TextPrice>
                        {showMoneyWallet ? '$109,65' : '******'}
                    </TextPrice>
                    <ContainerButtons>
                        <ButtonAdd
                            onPress={() => setShowMoneyWallet(!showMoneyWallet)}
                        >
                            {
                                showMoneyWallet ?
                                    <Icon name="eye" color={'black'} size={20} />
                                    :
                                    <Icon name="eye-with-line" color={'black'} size={20} />
                            }
                        </ButtonAdd>
                        <ButtonAdd>
                            <Icon2 name="reload" color={'black'} size={20} style={{ marginRight: 20 }} />
                        </ButtonAdd>
                    </ContainerButtons>

                </ContainerMoney>
            </ContainerHello>
            <ContainerButton>
                <Button>
                    <TextButton>
                        <Icon name="download" color={'white'} size={18} style={{ marginRight: 10 }} />
                        {' Depositar'}
                    </TextButton>
                </Button>
                <Button>
                    <TextButton>
                        <Icon name="upload" color={'white'} size={18} style={{ marginRight: 10, marginLeft: 10 }} />
                        {' Retirar'}
                    </TextButton>
                </Button>
            </ContainerButton>
        </Container>
    );
};

export default Actions;
