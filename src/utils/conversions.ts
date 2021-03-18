import { Vehicle } from './types';

export const getUniqueValues = (vehicles: Vehicle[]) => {
  const fuelTypeSet = new Set<string>();
  const bodyTypeSet = new Set<string>();
  const engineCapacitySet = new Set<number>();
  const enginePowerPSSet = new Set<number>();
  const enginePowerKWSet = new Set<number>();

  vehicles.forEach((vehicle) => {
    fuelTypeSet.add(vehicle.fuelType);
    bodyTypeSet.add(vehicle.bodyType);
    engineCapacitySet.add(vehicle.engineCapacity);
    enginePowerPSSet.add(vehicle.enginePowerPS);
    enginePowerKWSet.add(vehicle.enginePowerKW);
  });

  return {
    fuelType: Array.from(fuelTypeSet).sort(),
    bodyType: Array.from(bodyTypeSet).sort(),
    engineCapacity: Array.from(engineCapacitySet).sort((a, b) => a - b),
    enginePowerPS: Array.from(enginePowerPSSet).sort((a, b) => a - b),
    enginePowerKW: Array.from(enginePowerKWSet).sort((a, b) => a - b),
  };
};
