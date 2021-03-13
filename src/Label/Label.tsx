import React from 'react';
import IComponentProps from '../utils/IComponentProps';
import PropTypes from 'prop-types';
import getComponentClassName from '../utils/getComponentClassName';

interface ILabelProps extends IComponentProps {
    htmlFor?: string;
}

function Font(props: ILabelProps): React.ReactNode {
    const { children, htmlFor } = props;

    return (
        <label
            htmlFor={htmlFor}
            className={getComponentClassName('Label')}
            role="Label"
        >
            {children}
        </label>
    );
}

Font.propTypes = {
    htmlFor: PropTypes.string,
};

Font.defaultProps = {};

export default Font;
