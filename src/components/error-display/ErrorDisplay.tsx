import { FC, Fragment } from 'react';
import { Button } from '../button';
import { ErrorText } from '../error-text';

interface ErrorDisplayProps {
  fetchData: () => void;
}

export const ErrorDisplay: FC<ErrorDisplayProps> = ({ fetchData }) => {
  return (
    <Fragment>
      <ErrorText>Failed to fetch data</ErrorText>
      <Button onClick={fetchData}>Retry</Button>
    </Fragment>
  );
};
