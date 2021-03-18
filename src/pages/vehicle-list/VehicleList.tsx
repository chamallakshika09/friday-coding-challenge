import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from '../../components/breadcrumb';
import { Container } from '../../components/container';
import { ErrorDisplay } from '../../components/error-display';
import { Spinner } from '../../components/spinner';
import { Text } from '../../components/text';
import { VehicleSearch } from '../../components/vehicle-search';
import { useDataFetch } from '../../hooks';
import { Vehicle } from '../../utils';

const VehicleList: FC = () => {
  const params = useParams();

  const { make, model } = params as { make: string; model: string };

  const { state, fetchData } = useDataFetch(`/vehicles?make=${make}&model=${model}`);
  const { loading, error, data } = state as {
    loading: boolean;
    error: string;
    data: Vehicle[];
  };

  if (loading) {
    return <Spinner />;
  }

  const renderItems = () => {
    if (error) {
      return <ErrorDisplay fetchData={fetchData} />;
    } else if (data.length) {
      return <VehicleSearch data={data} />;
    } else {
      return <Text fontSize="16px">No vehicles available on {model}</Text>;
    }
  };

  return (
    <Container>
      <Breadcrumb items={[make, model]} />
      {renderItems()}
    </Container>
  );
};

export default VehicleList;
