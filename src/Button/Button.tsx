import React from 'react';
import PropTypes from 'prop-types';

interface ButtonProps {
    appearance: 'default' | 'primary'
}

class Button extends React.Component<ButtonProps> {
    render() {
        const className = 'pot-button'
            + this.props.appearance === 'primary' ? ' primary' : ''

        return (
            <button className={className}>
                { this.props.children }
            </button>
        );
    }

    static propTypes = {
        appearance: PropTypes.oneOf(['default', 'primary']),
    }

    static defaultProps = {
        appearance: 'default'
    }
}

export default Button;
