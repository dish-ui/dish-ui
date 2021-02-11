import React from 'react';
import PropTypes from 'prop-types';
import ComponentProps from '../utils/ComponentProps';

interface ButtonProps extends ComponentProps {
    primary: boolean
}
function Button(props: ButtonProps) {
    const { children, primary } = props
    return (
        <div className={ 'pot-button' + primary ? '-primary' : '' }>
            { children }
        </div>
    )
}

Button.propTypes = {
    primary: PropTypes.bool
}

export default Button;
