import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: black;
  flex: 0 0 21%;
  margin: 10px;
  height: 20px;
  &:hover {
    color: blue;
  }
`;
