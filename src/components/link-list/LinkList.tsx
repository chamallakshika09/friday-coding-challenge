import { FC } from 'react';
import { useHistory } from 'react-router';
import { LinkContainer } from './styles';
import { StyledLink } from '../styled-link';

interface LinkListProps {
  data: string[];
}

export const LinkList: FC<LinkListProps> = ({ data }) => {
  const history = useHistory();

  const renderLinkList = data.map((item: string) => {
    let path =
      history.location.pathname === '/'
        ? `${history.location.pathname}${item}`
        : `${history.location.pathname}/${item}`;
    return (
      <StyledLink key={item} to={path}>
        {item}
      </StyledLink>
    );
  });

  return <LinkContainer>{renderLinkList}</LinkContainer>;
};
