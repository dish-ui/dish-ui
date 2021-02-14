import React from 'react';
import IComponentProps from '../utils/IComponentProps';
import PropTypes from 'prop-types';

interface ILabelProps extends IComponentProps {
    htmlFor?: string;
}

function Font(props: ILabelProps): React.ReactNode {
    const { children, htmlFor } = props;

    return (
        <label htmlFor={htmlFor} className="dish-Label">
            {children}
        </label>
    );
}

Font.propTypes = {
    htmlFor: PropTypes.string,
};

Font.defaultProps = {};

export default Font;
