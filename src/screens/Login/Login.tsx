import React from 'react';
import { Text } from 'react-native';
import { Button, ButtonArea, Container, InputArea, InputText, Logo, Title, TitleButton } from './style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Login: undefined;
    Register: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {

    const navigation = useNavigation<LoginScreenNavigationProp>();
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
                <InputText placeholder="Email" />
                <InputText placeholder="Password" />
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
                <Button>
                    <Text>Entrar</Text>
                </Button>
                <Button>
                    <Text>Entrar</Text>
                </Button>
            </ButtonArea>

        </Container>
    );
};

export default Login;
