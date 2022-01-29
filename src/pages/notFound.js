import React from 'react';
import { Link } from 'react-router-dom';

const NOTFOUND = () => {
  return (
    <React.Fragment>
      <h1>NOT FOUND 404!</h1>
      <Link className="nav-link" to="/">
        Go Home
      </Link>
    </React.Fragment>
  );
};
export default NOTFOUND;
