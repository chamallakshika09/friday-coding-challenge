import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Text } from './styles';

const PageNotFound = () => {
  return (
    <Container>
      <Text>Oh no!!</Text>
      <Text>You’re either misspelling the URL or requesting a page that's no longer here.</Text>
      <Link className="btn-back" to="/">
        Back To Make List
      </Link>
    </Container>
  );
};

export default PageNotFound;
