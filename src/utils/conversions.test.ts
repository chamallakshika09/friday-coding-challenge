import { getUniqueValues } from './conversions';
import { VEHICLES } from './Vehicles';

describe('getUniqueValues', () => {
  it('should return an Object with empty arrays when empty array was given as input', () => {
    expect(getUniqueValues([])).toEqual({
      fuelType: [],
      bodyType: [],
      engineCapacity: [],
      enginePowerPS: [],
      enginePowerKW: [],
    });
  });

  it('should return an Object with unique value arrays when a vehicle array was given as input', () => {
    expect(getUniqueValues(VEHICLES)).toEqual({
      fuelType: ['Benzin', 'Diesel'],
      bodyType: ['Limousine'],
      engineCapacity: [1119, 1242, 1299, 1388, 1399, 1560, 1596, 1753],
      enginePowerPS: [50, 60, 68, 75, 80, 90, 95, 101],
      enginePowerKW: [37, 44, 50, 55, 59, 66, 70, 74],
    });
  });
});
