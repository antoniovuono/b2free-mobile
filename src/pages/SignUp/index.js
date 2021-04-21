import React from 'react';
//import { Text } from 'react-native';
import {SignLink , Container, Text, Form, FormInput, SubmitButton, SignLinkText  } from './styles';
import BackgroundInitial from '../../components/BackgroundInitial';

export default function SignUp({ navigation }) {
  return (

  <BackgroundInitial>

        <Container>
            <Text>B2FREE</Text>

            <Form>

              <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCaptalize="none"
            placeholder="Nome completos"
            />

            <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCaptalize="none"
            placeholder="Digite seu email"

            />
            <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite uma senha"
            />
            <FormInput
             icon="lock-outline"
             secureTextEntry
             placeholder="Confirme sua senha"
            />

            <SubmitButton onPress={() => {}} >Criar</SubmitButton>

            <SignLink onPress={() => navigation.navigate('SignIn')}>

              <SignLinkText>Já tenho uma conta</SignLinkText>
            </SignLink>



            </Form>


         </Container>
  </BackgroundInitial>

    );
}

