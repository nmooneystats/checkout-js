import React, { FunctionComponent } from 'react';

import withIconContainer from './withIconContainer';

const IconChevronLeft: FunctionComponent = () => (
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
);

export default withIconContainer(IconChevronLeft);
