import React from 'react';
import { Route } from 'react-router';

import Tables from './Tables';

export default (
    <React.Fragment>
        <Route component={ Tables } path="/tables/tables" />
    </React.Fragment>
);
