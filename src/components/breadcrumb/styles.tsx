import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BreadcrumbContainer = styled.nav`
  margin: 20px;
  align-self: flex-start;
`;

export const BreadcrumbList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const BreadcrumbListItem = styled.li`
  &:not(:first-child)::before {
    content: '→';
  }
`;

export const BreadcrumbLink = styled(Link)`
  color: blue;
  padding: 0.5em 1em;
`;

export const BreadcrumbCurrent = styled.span`
  padding: 0.5em 1em;
`;
