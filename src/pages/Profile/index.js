import React, {useContext} from "react";
import {
    Container, 
    Message,
    Name,
    NewLink,
    NewText,
    LogoutButton,
    LogoutTexte
} from './styles'

import Header from "../../components/Header";

import { AuthContext } from "../../contexts/auth";

import { useNavigation } from "@react-navigation/native";

export default function Profile(){
    const {user, signOut} = useContext(AuthContext);
    const navigation = useNavigation();

    return(
        <Container>
            <Header title="Meu Perfil" />

            <Message>
                Hey, Bem Vindo de volta!
            </Message>

            <Name numberOfLines={1}>
                {user && user.name}
            </Name>

            <NewLink onPress={ () => navigation.navigate('Movimentações')}>
                <NewText>Fazer registro</NewText>
            </NewLink>

            <LogoutButton onPress={ () => signOut()}>
                <LogoutTexte>Sair</LogoutTexte>
            </LogoutButton>
        </Container>
    )
}