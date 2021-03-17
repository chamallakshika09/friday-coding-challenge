import React, { FC, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Spinner } from '../components/spinner';

const MakeList = lazy(() => import('../pages/make-list/MakeList'));
const ModelList = lazy(() => import('../pages/model-list/ModelList'));
const VehicleList = lazy(() => import('../pages/vehicle-list/VehicleList'));
const PageNotFound = lazy(() => import('../pages/page-not-found/PageNotFound'));

const MainRouter: FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/">
          <MakeList />
        </Route>
        <Route exact path="/:make">
          <ModelList />
        </Route>
        <Route exact path="/:make/:model">
          <VehicleList />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default MainRouter;
