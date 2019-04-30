import React from 'react';

import {
    Container
} from './../../../components';

const DeepNestedRouteTwo = () => (
    <Container>
        <section>
            <h1>
                Second Eagerly Loaded Route
            </h1>
            <p>
                Hello from the second eagerly loaded, deeply nested route.
            </p>
        </section>
    </Container>
);

export default DeepNestedRouteTwo;