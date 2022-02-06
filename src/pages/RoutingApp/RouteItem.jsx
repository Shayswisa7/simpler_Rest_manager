import React from 'react';
import { Route } from 'react-router-dom';

const RouteItem = (props) => {
  return (
    <React.Fragment>
      <Route id={props.name} path={'/' + props.name} element={props.element}>
        {props.he}
      </Route>
    </React.Fragment>
  );
};

export default RouteItem;
