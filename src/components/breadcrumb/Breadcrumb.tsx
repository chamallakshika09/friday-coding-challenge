import { FC } from 'react';
import { BreadcrumbContainer, BreadcrumbCurrent, BreadcrumbLink, BreadcrumbList, BreadcrumbListItem } from './styles';

interface BreadcrumbProps {
  items: string[];
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  const constructBreadcrumb = items.map((item, index, arr) => {
    if (arr[index + 1]) {
      return (
        <BreadcrumbListItem key={item}>
          <BreadcrumbLink to={`/${item}`}>{item}</BreadcrumbLink>
        </BreadcrumbListItem>
      );
    } else {
      return (
        <BreadcrumbListItem key={item}>
          <BreadcrumbCurrent>{item}</BreadcrumbCurrent>
        </BreadcrumbListItem>
      );
    }
  });

  return (
    <BreadcrumbContainer>
      <BreadcrumbList>
        <BreadcrumbListItem key="home">
          <BreadcrumbLink to="/">Home</BreadcrumbLink>
        </BreadcrumbListItem>
        {constructBreadcrumb}
      </BreadcrumbList>
    </BreadcrumbContainer>
  );
};
