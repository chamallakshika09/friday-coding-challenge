import { FC, Fragment } from 'react';
import { Container } from '../../components/container';
import { ErrorDisplay } from '../../components/error-display';
import { LinkList } from '../../components/link-list';
import { Spinner } from '../../components/spinner';
import { Text } from '../../components/text';
import { useDataFetch } from '../../hooks';

const MakeList: FC = () => {
  const { state, fetchData } = useDataFetch('/makes');

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
          <Text fontSize="20px">Please select a make to continue</Text>
          <LinkList data={data} />
        </Fragment>
      );
    } else {
      return <Text fontSize="16px">No data available</Text>;
    }
  };

  return <Container>{renderItems()}</Container>;
};

export default MakeList;
