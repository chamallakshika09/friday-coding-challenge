import { FC, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from '../../components/breadcrumb';
import { Container } from '../../components/container';
import { ErrorDisplay } from '../../components/error-display';
import { LinkList } from '../../components/link-list';
import { Spinner } from '../../components/spinner';
import { Text } from '../../components/text';
import { useDataFetch } from '../../hooks';

const ModelList: FC = () => {
  const params = useParams();

  const { make } = params as { make: string };

  const { state, fetchData } = useDataFetch(`/models?make=${make}`);
  const { loading, error, data } = state as {
    loading: boolean;
    error: string;
    data: string[];
  };

  if (loading) {
    return <Spinner />;
  }

  const renderItems = () => {
    if (error) {
      return <ErrorDisplay fetchData={fetchData} />;
    } else if (data.length) {
      return (
        <Fragment>
          <Text fontSize="20px">Please select a model to continue</Text>
          <LinkList data={data} />
        </Fragment>
      );
    } else {
      return <Text fontSize="16px">No models available on {make}</Text>;
    }
  };

  return (
    <Container>
      <Breadcrumb items={[make]} />
      {renderItems()}
    </Container>
  );
};

export default ModelList;
