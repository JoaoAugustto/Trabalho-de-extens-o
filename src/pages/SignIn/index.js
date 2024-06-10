import React, {useState, useContext} from "react";
import {Platform, ActivityIndicator} from 'react-native'

import {
    Background, 
    Container, 
    Logo, 
    AreaInput, 
    Input, 
    SubmitButton, 
    SubmitText, 
    Link, 
    LinkText
} from './styles';

import { useNavigation } from '@react-navigation/native'

import {AuthContext} from '../../contexts/auth'

export default function SignIn(){
    const navigation = useNavigation();
    const {signIn, loadingAuth} = useContext(AuthContext);

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    function hendleLogin(){
        signIn(email, password);
    }

    return(
        <Background>
            <Container
               behavior={Platform.os === 'ios' ? 'padding' : ''}
               enabled
            >
                <Logo 
                source={require('../../assets/Logo.png')}
                />

                <AreaInput>
                <Input
                    placeholder="Seu email"
                    value={email}
                    onChangeText={(texte) => setEmail(texte)}
                />
                </AreaInput>

                <AreaInput>
                <Input
                    placeholder="Sua Senha"
                    value={password}
                    onChangeText={(texte) => setPassword(texte)}
                    secureTextEntry={true}
                />
                </AreaInput>

                <SubmitButton activeOpacity={0.8} onPress={hendleLogin}>
                    {
                        loadingAuth ? (
                           <ActivityIndicator size={20} color="#FFF"/> 
                        ) : (
                            <SubmitText>Acessar</SubmitText>
                        )
                    }
                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignUp') }>
                    <LinkText>Criar uma conta!</LinkText>
                </Link>

            </Container>

        </Background>
    )
}