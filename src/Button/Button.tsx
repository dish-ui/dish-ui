import React, { SyntheticEvent, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import getNoop from '../utils/getNoop';
import * as DOMHelper from 'dom-lib';

interface ButtonProps {
    appearance: 'default' | 'primary',
    prefix: React.ReactNode,
    onClick: React.EventHandler<SyntheticEvent>
    children: React.ReactNode
}

function Button(props: ButtonProps): React.ReactNode {
    const { appearance, prefix, onClick, children } = props
    const [rippleX, setRippleX] = useState(0);
    const [rippleY, setRippleY] = useState(0);
    const [rippling, setRippling] = useState(false);
    const className = 'pot-btn'
        + ' ' + appearance;

    function clickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        // Ripple effect
        const offset = DOMHelper.getOffset(useRef<HTMLElement>().current);
        const offsetX = (e.pageX || 0) - offset.left;
        const offsetY = (e.pageY || 0) - offset.top;
        const radiusX = Math.max(offset.width - offsetX, offsetX);
        const radiusY = Math.max(offset.height - offsetY, offsetY);
        const radius = Math.sqrt(Math.pow(radiusX, 2) + Math.pow(radiusY, 2));
        setRippleX(offsetX - radius);
        setRippleY(offsetY - radius);
        setRippling(true);
        setTimeout(() => {
            setRippling(false)
        }, 50);
        // User defined click event
        if (onClick) {
            onClick(e);
        }
    }

    return (
        <button className={ className } onClick={ clickHandler }>
            <span
                className={`pot-ripple ${rippling ? 'animate' : ''}`}
                style={{
                    left: rippleX,
                    top: rippleY
                }}
            />
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
