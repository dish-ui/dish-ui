import React from 'react';
import IComponentProps from '../utils/IComponentProps';

function ButtonFooter(props: IComponentProps): React.ReactElement {
    const { children } = props;
    return (
        <div className="dish-ButtonFooter" role="Button Footer">
            {children}
        </div>
    );
}

export default ButtonFooter;
