import React from 'react';
import PropTypes from 'prop-types';
import getNoop from '../utils/getNoop';

interface ButtonProps {
    appearance: 'default' | 'primary',
    prefix: React.ReactNode,
    onClick: React.EventHandler<any>
    children: React.ReactNode
}

function Button(props: ButtonProps): React.ReactNode {
    const { appearance, prefix, onClick, children } = props
    const className = 'pot-btn'
        + ' ' + appearance

    return (
        <button className={ className } onClick={ onClick }>
            <span className="pot-btn-prefix">{ prefix }</span>
            <span className="pot-btn-text">{ children }</span>
        </button>
    );
}

Button.propTypes = {
    appearance: PropTypes.oneOf(['default', 'primary']),
    onClick: PropTypes.func,
    prefix: PropTypes.any
}

Button.defaultProps = {
    appearance: 'default',
    onClick: getNoop()
}

export default Button;
