import React from 'react';
import { Container, ContainerFlatList, ContainerHello, ContainerTitleAndIcon, ContainerTitlePay, ContianerMoneyStatus, ListFooter, ListMovimientos, Separator, TextDate, TextHello, TextMoney, TextMovement, TextStatus, TextTitlePay } from './style';
import { Movimientos } from '../../database/database';
import Icon from 'react-native-vector-icons/dist/Entypo';


const Movments = () => {

    return (
        <Container>
            <ContainerHello>
                <TextHello>Movimientos</TextHello>
            </ContainerHello>

            <ListMovimientos
                keyExtractor={(item: any) => item.id}
                data={Movimientos.movimientos.slice(0, 5)}
                ItemSeparatorComponent={() => <Separator />}
                ListFooterComponent={
                    <ListFooter />
                }
                renderItem={({ item }: any) => (
                    <ContainerFlatList>
                        <ContainerTitleAndIcon>
                            {
                                item.status === 'completado' ?
                                    <Icon
                                        name={'check'}
                                        color={'green'}
                                        size={20}
                                        style={{
                                            marginLeft: 20,
                                            padding: 10,
                                            backgroundColor: 'rgba(0, 255, 0, 0.1)',
                                            borderRadius: 50,
                                        }}
                                    />
                                    :
                                    item.status === 'pendiente' ?
                                        <Icon
                                            name={'clock'}
                                            color={'orange'}
                                            size={20}
                                            style={{
                                                marginLeft: 20,
                                                padding: 10,
                                                backgroundColor: 'rgba(255, 165, 0, 0.1)',
                                                borderRadius: 50,
                                            }}
                                        />
                                        :
                                        <Icon
                                            name={'cross'}
                                            color={'red'}
                                            size={20}
                                            style={{
                                                marginLeft: 20,
                                                padding: 10,
                                                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                                                borderRadius: 50,
                                            }}
                                        />
                            }

                            <ContainerTitlePay>
                                <TextTitlePay>{item.nombre}</TextTitlePay>
                                <TextMovement>{item.tipo}</TextMovement>
                                <TextDate>{item.fecha}</TextDate>
                            </ContainerTitlePay>
                        </ContainerTitleAndIcon>
                        <ContianerMoneyStatus>
                            <TextMoney>${item.monto} USD</TextMoney>
                            <TextStatus>{item.status}</TextStatus>
                        </ContianerMoneyStatus>
                    </ContainerFlatList>
                )}
            />
        </Container>
    );
};

export default Movments;
