import React from 'react';
import PropTypes from 'prop-types';
import ComponentProps from '../utils/ComponentProps';

interface ButtonProps extends ComponentProps {
    primary: boolean,
    danger: boolean
}
function Button(props: ButtonProps) {
    const { children, primary, danger } = props
    let classNameSuffix: string;
    if (primary) classNameSuffix = '-primary'
    if (danger) classNameSuffix = '-danger'
    return (
        <div className={ 'pot-button' + classNameSuffix }>
            { children }
        </div>
    )
}

Button.propTypes = {
    primary: PropTypes.bool
}

Button.defaultProps = {
    primary: false,
    danger: false
}

export default Button;
