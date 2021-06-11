import React, { useRef } from 'react';
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

  const passwordRef = useRef();

  function handleSubmit() {}

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
            returnKeyType="next"
            onSubmitEditting={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={() => navigation.navigate('Dashboard')}>Acessar</SubmitButton>

          <SignLink onPress={() => navigation.navigate('SignUp')}>
            <SignLinkText>Criar conta gratuita</SignLinkText>
          </SignLink>
        </Form>
      </Container>
  </BackgroundInitial>

  );
}

