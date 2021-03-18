export type Vehicle = {
  [key: string]: string | number | undefined;
  make: string;
  model: string;
  enginePowerPS: number;
  enginePowerKW: number;
  fuelType: string;
  bodyType: string;
  engineCapacity: number;
};
