import React from 'react';
import PropTypes from 'prop-types';

interface ButtonProps {
    appearance: 'default' | 'primary',
    prefix: React.ReactNode,
    children: React.ReactNode
}

function Button(props: ButtonProps): React.ReactNode {
    const { appearance, prefix, children } = props
    const className = 'pot-btn'
        + ' ' + appearance

    return (
        <button className={ className }>
            <span className="pot-btn-prefix">{ prefix }</span>
            <span className="pot-btn-text">{ children }</span>
        </button>
    );
}

Button.propTypes = {
    appearance: PropTypes.oneOf(['default', 'primary']),
    prefix: PropTypes.any
}

Button.defaultProps = {
    appearance: 'default'
}

export default Button;
