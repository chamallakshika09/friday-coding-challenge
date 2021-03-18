import React, { FC } from 'react';
import { Vehicle } from '../../utils';

import { Card } from '../card';
import { CardText } from '../card-text';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard: FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <Card>
      <CardText fontSize="12px">{`Body Type: ${vehicle.bodyType}`}</CardText>
      <CardText fontSize="12px">{`Fuel Type: ${vehicle.fuelType}`}</CardText>
      <CardText fontSize="12px">{`Engine Capacity: ${vehicle.engineCapacity}`}</CardText>
      <CardText fontSize="12px">{`Engine Power PS: ${vehicle.enginePowerPS}`}</CardText>
      <CardText fontSize="12px">{`Engine Power KW: ${vehicle.enginePowerKW}`}</CardText>
    </Card>
  );
};
