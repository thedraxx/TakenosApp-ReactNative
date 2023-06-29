import React from 'react';
import { Container, ContainerFlatList, ContainerTitleAndIcon, ContainerTitlePay, ContianerMoneyStatus, ListFooter, ListMovimientos, Separator, TextDate, TextMoney, TextMovement, TextStatus, TextTitlePay } from './style';
import { Movimientos } from '../../database/database';
import Icon from 'react-native-vector-icons/dist/Entypo';

const History = () => {
    return (
        <Container>
            <ListMovimientos
                keyExtractor={(item: any) => item.id}
                data={Movimientos.movimientos}
                maxToRenderPerBatch={5}
                ListFooterComponent={
                    <ListFooter />
                }
                ItemSeparatorComponent={() => <Separator />}
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

export default History;
