import { render, screen } from '@testing-library/react';
import { VEHICLES } from '../../utils';
import { VehicleCard } from './VehicleCard';

describe('VehicleCard', () => {
  it('should render a single vehicle card', () => {
    const vehicle = VEHICLES[0];
    render(<VehicleCard vehicle={vehicle} />);

    const makeElement = screen.getByText(`Make: ${vehicle.make}`);
    const modelElement = screen.getByText(`Model: ${vehicle.model}`);
    const bodyTypeElement = screen.getByText(`Body Type: ${vehicle.bodyType}`);
    const fuelTypeElement = screen.getByText(`Fuel Type: ${vehicle.fuelType}`);
    const engineCapacityElement = screen.getByText(`Engine Capacity: ${vehicle.engineCapacity}`);
    const enginePowerPsElement = screen.getByText(`Engine Power PS: ${vehicle.enginePowerPS}`);
    const enginePowerKwElement = screen.getByText(`Engine Power KW: ${vehicle.enginePowerKW}`);

    expect(makeElement).toBeDefined();
    expect(modelElement).toBeDefined();
    expect(bodyTypeElement).toBeDefined();
    expect(fuelTypeElement).toBeDefined();
    expect(engineCapacityElement).toBeDefined();
    expect(enginePowerPsElement).toBeDefined();
    expect(enginePowerKwElement).toBeDefined();
  });
});
