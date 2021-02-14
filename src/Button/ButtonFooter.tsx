import React from 'react';
import IComponentProps from '../utils/IComponentProps';

function ButtonFooter(props: IComponentProps): React.ReactElement {
    const { children } = props;
    return <div className="pot-ButtonFooter">{children}</div>;
}

export default ButtonFooter;
