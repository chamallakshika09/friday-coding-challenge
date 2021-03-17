import React, { FC } from 'react';
import { Container, Text } from './styles';

export const ErrorText: FC = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};
