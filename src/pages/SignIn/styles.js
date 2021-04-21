import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Input from '../../components/Input';

import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.IOS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;
export const SignLinkText = styled.Text`
  color: #FE4A49;
  font-weight: bold;
  align-self: center;
`;

export const Text = styled.Text`

    color:  red;
    font-size: 55px;
    font-weight: bold;

`;
