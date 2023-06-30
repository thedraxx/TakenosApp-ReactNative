import React, { useContext, useState } from 'react';
import { Text } from 'react-native';
import { Button, ButtonArea, Container, InputArea, InputText, Logo, Title, TitleButton } from './style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthContext } from '../../context';

type RootStackParamList = {
    Login: undefined;
    Register: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {

    const { loginAction } = useContext(AuthContext);

    const navigation = useNavigation<LoginScreenNavigationProp>();

    const handleEmailChange = (text: string) => {
        setDataInput({ ...dataInput, email: text });
    };

    const handlePasswordChange = (text: string) => {
        setDataInput({ ...dataInput, password: text });
    };

    const [dataInput, setDataInput] = useState<{
        name: string;
        email: string;
        password: string;
    }>({
        name: '',
        email: '',
        password: '',
    });



    return (
        <Container>
            <Logo
                source={require('../../../public/logo.png')}
                alt="Picture of the author"
            />

            <InputArea>
                <Title>
                    Ingresa tus datos
                </Title>
                <InputText
                    placeholder="Email"
                    value={dataInput.email}
                    onChangeText={handleEmailChange}
                />
                <InputText
                    placeholder="Password"
                    value={dataInput.password}
                    onChangeText={handlePasswordChange}
                />
                <TitleButton >
                    <Text>¿Olvidaste tu contraseña?</Text>
                </TitleButton>
                <TitleButton
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text>¿No tienes cuenta? Registrate</Text>
                </TitleButton>
            </InputArea>

            <ButtonArea>
                <Button
                    onPress={() => loginAction(dataInput.email, dataInput.password)}
                >
                    <Text>Entrar</Text>
                </Button>
            </ButtonArea>

        </Container>
    );
};

export default Login;
