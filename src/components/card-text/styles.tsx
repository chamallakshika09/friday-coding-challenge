import styled from 'styled-components';

interface CardTextProps {
  fontSize: string;
}

export const CardText = styled.div<CardTextProps>`
  font-size: ${(p: CardTextProps) => p.fontSize};
  text-align: left;
  padding: 2px 8px;
`;
