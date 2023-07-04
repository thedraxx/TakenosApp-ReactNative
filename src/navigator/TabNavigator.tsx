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

const IconHome = () => (
    <Icon name="home" color={Colors.primary} size={20} />
);

const IconArchive = () => (
    <Icon name="archive" color={Colors.primary} size={20} />
);

const IconMessage = () => (
    <Icon name="message" color={Colors.primary} size={20} />
);

const IconUser = () => (
    <Icon name="user" color={Colors.primary} size={20} />
);

const HeaderTitle = () => (
    <ContainerImage>
        <ImageLogo source={require('../../public/logo.png')} />
        <Icon2
            name="bell"
            color={Colors.primary}
            size={25}
            style={{
                padding: 5,
                backgroundColor: 'white',
                borderRadius: 50,
            }}
        />
    </ContainerImage>
);

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
                    tabBarIcon: IconHome,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        shadowColor: 'transparent',
                        elevation: 0,
                    },
                    headerTitle: HeaderTitle,
                }}
            />
            <Tab.Screen
                name="Historial"
                component={History}
                options={{
                    tabBarIcon: IconArchive,
                    headerStyle: {
                        backgroundColor: 'white',
                        shadowColor: 'transparent',
                        elevation: 0,
                    },
                }}
            />
            <Tab.Screen
                name="Soporte"
                component={Support}
                options={{
                    tabBarIcon: IconMessage,
                }}
            />
            <Tab.Screen
                name="Cuenta"
                component={Account}
                options={{
                    tabBarIcon: IconUser,
                }}
            />
        </Tab.Navigator>
    );
};

export default Navigator;
