import React, { FunctionComponent } from 'react';
import { IconChevronLeft } from '../ui/icon';

const OrderSummaryHeader: FunctionComponent = ({ children }) => (
    <header className="cart-header">
       <IconChevronLeft />
       { children }
    </header>
);

export default OrderSummaryHeader;
