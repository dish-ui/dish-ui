import React from 'react';
import IComponentProps from '../utils/IComponentProps';

function ButtonFooter(props: IComponentProps): React.ReactNode {
    const { children } = props;
    return <div className="pot-button-footer">{children}</div>;
}

export default ButtonFooter;
