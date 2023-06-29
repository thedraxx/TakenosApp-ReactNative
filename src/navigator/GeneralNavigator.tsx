
import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Navigator from './TabNavigator';
import { AuthContext } from '../context';

type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const GeneralNavigator = () => {

    const { auth } = useContext(AuthContext);

    console.log(auth);

    return (
        <>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                {/* <Stack.Screen name="Home" component={Navigator} /> */}
            </Stack.Navigator>
        </>
    );
};

export default GeneralNavigator;
