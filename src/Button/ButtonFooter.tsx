import React from 'react';
import ComponentProps from '../utils/ComponentProps';

function ButtonFooter(props: ComponentProps): React.ReactNode {
    const { children } = props;
    return <div className="pot-button-footer">{children}</div>;
}

export default ButtonFooter;
