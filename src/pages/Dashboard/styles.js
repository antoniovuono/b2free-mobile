import styled from  'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.IOS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  background-color: #FE4A49;
`;

export const Text = styled.Text`

    color:  #EDEDF0;
    font-size: 30px;
    font-weight: bold;
    margin-top: 60px;

`;

export const Cadeira1 = styled.View`

    margin-top: 30px;
    height: 80px;
    width: 80%;
    background-color: #EDEDF0;
    justify-content: center;



`;

export const TextInside = styled.Text`

  color: black;
  font-weight: bold;
  font-size: 20px;
  margin-left: 30px;


`;

export const SubText = styled.Text`
  margin-top: 3px;
  color: black;
  margin-left: 30px;
  font-weight: bold;
  color: #B8ADAD;
`;

export const PrcngtText = styled.Text`

  margin-top: -30px;
   color: black;
   font-weight: bold;
    font-size: 15px;
    margin-left: 220px;
`;
