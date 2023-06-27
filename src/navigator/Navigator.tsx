import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import History from '../screens/History/History';
import Support from '../screens/Support/Support';
import Account from '../screens/Account/Account';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon2 from 'react-native-vector-icons/dist/Feather';
import { ContainerImage, ImageLogo } from './style';
import { Colors } from '../helpers/Color';

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: `${Colors.primary}`,
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen
                name="Inicio"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                    headerStyle: {
                        backgroundColor: 'transparent',
                        shadowColor: 'transparent',
                        elevation: 0,
                    },
                    headerTitle: () => (
                        <ContainerImage>
                            <ImageLogo source={require('../../public/logo.png')} />
                            <Icon2 name="bell" color={Colors.primary} size={25} style={{
                                padding: 5,
                                backgroundColor: 'white',
                                borderRadius: 50,
                            }} />
                        </ContainerImage>
                    ),

                }}
            />
            <Tab.Screen
                name="Historial"
                component={History}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="archive" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Soporte"
                component={Support}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="message" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cuenta"
                component={Account}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    ),
                }}

            />
        </Tab.Navigator>
    );
};

export default Navigator;
