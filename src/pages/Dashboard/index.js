import React from "react";

import { Container, Text, Cadeira1,TextInside,SubText,PrcngtText } from './styles';

export default function Dashboard() {

  return (
    <Container>
    <Text>Cadeiras Disponiveis</Text>


    <Cadeira1>
      <TextInside>Cadeira 01</TextInside>
      <SubText>Cadeira disponivel</SubText>
      <PrcngtText>50%/50%</PrcngtText>

    </Cadeira1>

    <Cadeira1>
      <TextInside>Cadeira 02</TextInside>
      <SubText>Cadeira disponivel</SubText>
      <PrcngtText>50%/50%</PrcngtText>

    </Cadeira1>

    <Cadeira1>
      <TextInside>Cadeira 03</TextInside>
      <SubText>Cadeira disponivel</SubText>
      <PrcngtText>50%/50%</PrcngtText>

    </Cadeira1>

    </Container>
  );
}
