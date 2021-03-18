import { FC } from 'react';
import { Vehicle } from '../../utils';
import { Text } from '../text';
import { VehicleCard } from '../vehicle-card/VehicleCard';
import { CardContainer } from './styles';

interface VehicleCardListProps {
  data: Vehicle[];
}

export const VehicleCardList: FC<VehicleCardListProps> = ({ data }) => {
  if (data.length === 0) {
    return <Text fontSize="16px">No vehicles available for selected filters </Text>;
  }

  const renderCardList = data.map((item: Vehicle, index: number) => {
    return <VehicleCard key={index} vehicle={item} />;
  });

  return <CardContainer>{renderCardList}</CardContainer>;
};
