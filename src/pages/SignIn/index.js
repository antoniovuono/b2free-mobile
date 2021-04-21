import React from 'react';
//import { Text } from 'react-native';

import BackgroundInitial from '../../components/BackgroundInitial';
import Button from '../../components/Button';
import Input from '../../components/Input';


import {   Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  Text, } from './styles';

export default function SignIn({ navigation }) {
  return (

  <BackgroundInitial>
    <Container>
      <Text>B2FREE</Text>
      <Form>
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
            placeholder="Sua senha secreta"
          />

          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>

          <SignLink onPress={() => navigation.navigate('SignUp')}>
            <SignLinkText>Criar conta gratuita</SignLinkText>
          </SignLink>
        </Form>
      </Container>
  </BackgroundInitial>

  );
}

