import React, { useRef } from 'react';
//import { Text } from 'react-native';
import {SignLink , Container, Text, Form, FormInput, SubmitButton, SignLinkText  } from './styles';
import BackgroundInitial from '../../components/BackgroundInitial';

export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {}

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
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            />

            <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCaptalize="none"
            placeholder="Digite seu email"
            returnKeyType="next"
            ref={emailRef}
            onSubmitEditing={() => passwordRef.current.focus()}

            />
            <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite uma senha"
            returnKeyType="send"
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
            />
            <FormInput
             icon="lock-outline"
             secureTextEntry
             placeholder="Confirme sua senha"
             returnKeyType="send"
             ref={passwordRef}
             onSubmitEditing={handleSubmit}
            />

            <SubmitButton onPress={handleSubmit}>Criar uma conta</SubmitButton>

            <SignLink onPress={() => navigation.navigate('SignIn')}>

              <SignLinkText>Já tenho uma conta</SignLinkText>
            </SignLink>



            </Form>


         </Container>
  </BackgroundInitial>

    );
}

