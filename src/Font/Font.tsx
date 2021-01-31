import React from 'react';
import PropTypes from 'prop-types';

interface FontProps {
    size: number,
    weight: number
}

export default class Font extends React.Component<FontProps, {}> {
    render(): React.ReactNode {
        const sizeStyle = this.props.size ? {
            fontSize: this.props.size
        } : {};
        const weightStyle = this.props.weight ? {
            fontWeight: this.props.weight
        } : {};
        return (
            <span
                style={{
                    ...sizeStyle,
                    ...weightStyle
                }}
            >
                { this.props.children }
            </span>
        );
    }

    static propTypes = {
        size: PropTypes.number,
        weight: PropTypes.number
    }

    static defaultProps = {}
}
