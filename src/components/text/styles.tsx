import styled from 'styled-components';

interface TextProps {
  fontSize: string;
}

export const Text = styled.div<TextProps>`
  font-size: ${(p: TextProps) => p.fontSize};
  text-align: left;
  margin: 20px;
  padding: 20px 0;
`;
