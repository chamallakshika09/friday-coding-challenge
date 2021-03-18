import { ChangeEvent, FC, useMemo, useState } from 'react';
import { getUniqueValues, Vehicle } from '../../utils';
import { Filter } from '../Filter';
import { VehicleCardList } from '../vehicle-card-list';
import { FilterContainer, OuterContainer } from './styles';

interface VehicleSearchProps {
  data: Vehicle[];
}

interface SelectedFilters {
  [key: string]: string | number | undefined;
  bodyType?: string;
  fuelType?: string;
  enginePowerPS?: number;
  enginePowerKW?: number;
  engineCapacity?: number;
}

export const VehicleSearch: FC<VehicleSearchProps> = ({ data }) => {
  const filters = getUniqueValues(data);

  const [selectedBodyType, setSelectedBodyType] = useState<number>(0);
  const [selectedFuelType, setSelectedFuelType] = useState<number>(0);
  const [selectedEngineCapacity, setSelectedEngineCapacity] = useState<number>(0);
  const [selectedEnginePowerPS, setSelectedEnginePowerPS] = useState<number>(0);
  const [selectedEnginePowerKW, setSelectedEnginePowerKW] = useState<number>(0);

  const filteredData = useMemo(() => {
    const selectedFilters: SelectedFilters = {};
    if (selectedBodyType > 0) {
      selectedFilters.bodyType = filters.bodyType[selectedBodyType - 1];
    }
    if (selectedFuelType > 0) {
      selectedFilters.fuelType = filters.fuelType[selectedFuelType - 1];
    }
    if (selectedEngineCapacity > 0) {
      selectedFilters.engineCapacity = filters.engineCapacity[selectedEngineCapacity - 1];
    }
    if (selectedEnginePowerPS > 0) {
      selectedFilters.enginePowerPS = filters.enginePowerPS[selectedEnginePowerPS - 1];
    }
    if (selectedEnginePowerKW > 0) {
      selectedFilters.enginePowerKW = filters.enginePowerKW[selectedEnginePowerKW - 1];
    }
    return data.filter((item) => {
      for (let key in selectedFilters) {
        if (item[key] === undefined || item[key] !== selectedFilters[key]) return false;
      }
      return true;
    });
  }, [
    data,
    filters.bodyType,
    filters.engineCapacity,
    filters.enginePowerKW,
    filters.enginePowerPS,
    filters.fuelType,
    selectedBodyType,
    selectedEngineCapacity,
    selectedEnginePowerKW,
    selectedEnginePowerPS,
    selectedFuelType,
  ]);

  return (
    <OuterContainer>
      <FilterContainer>
        <Filter
          items={filters.bodyType}
          placeholder="Select body type"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedBodyType(e.target.selectedIndex)}
          value={selectedBodyType}
        />
        <Filter
          items={filters.fuelType}
          placeholder="Select fuel type"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedFuelType(e.target.selectedIndex)}
          value={selectedFuelType}
        />
        <Filter
          items={filters.engineCapacity}
          placeholder="Select engine capacity"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedEngineCapacity(e.target.selectedIndex)}
          value={selectedEngineCapacity}
        />
        <Filter
          items={filters.enginePowerPS}
          placeholder="Select engine power PS"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedEnginePowerPS(e.target.selectedIndex)}
          value={selectedEnginePowerPS}
        />
        <Filter
          items={filters.enginePowerKW}
          placeholder="Select engine power KW"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedEnginePowerKW(e.target.selectedIndex)}
          value={selectedEnginePowerKW}
        />
      </FilterContainer>
      <VehicleCardList data={filteredData} />
    </OuterContainer>
  );
};
