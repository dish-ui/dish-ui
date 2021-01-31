import React from 'react';
import PropTypes from 'prop-types';

interface FontProps {
    size: number,
    weight: number,
    children: React.ReactNode
}

function Font(props: FontProps): React.ReactNode {
    const { size, weight, children } = props;

    const style: React.CSSProperties = {};
    size ? style.fontSize = size : void 0;
    weight ? style.fontWeight = weight : void 0;
    return (
        <span style={style}>
            { children }
        </span>
    );
}


Font.propTypes = {
    size: PropTypes.number,
    weight: PropTypes.number
}

Font.defaultProps = {}

export default Font
