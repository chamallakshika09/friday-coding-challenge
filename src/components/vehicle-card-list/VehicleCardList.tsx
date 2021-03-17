import { FC } from 'react';
import { Vehicle } from '../../utils';
import { VehicleCard } from '../vehicle-card/VehicleCard';
import { CardContainer } from './styles';

interface VehicleCardListProps {
  data: Vehicle[];
}

export const VehicleCardList: FC<VehicleCardListProps> = ({ data }) => {
  const renderCardList = data.map((item: Vehicle, index: number) => {
    return <VehicleCard key={index} vehicle={item} />;
  });

  return <CardContainer>{renderCardList}</CardContainer>;
};
