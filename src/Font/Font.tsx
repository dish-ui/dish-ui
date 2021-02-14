import React from 'react';
import IComponentProps from '../utils/IComponentProps';
import PropTypes from 'prop-types';

interface IFontProps extends IComponentProps {
    bold: boolean;
    light: boolean;
    italic: boolean;
    semiBold: boolean;
}

function Font(props: IFontProps): React.ReactNode {
    const { children, bold, light, semiBold, italic } = props;
    const style: React.CSSProperties = {};
    bold ? (style.fontWeight = 'bold') : void 0;
    light ? (style.fontWeight = 'lighter') : void 0;
    italic ? (style.fontStyle = 'italic') : void 0;
    semiBold ? (style.fontWeight = 600) : void 0;

    return (
        <span className="pot-Font" style={style}>
            {children}
        </span>
    );
}

Font.propTypes = {
    bold: PropTypes.bool,
    light: PropTypes.bool,
    italic: PropTypes.bool,
    semiBold: PropTypes.bool,
};

Font.defaultProps = {
    bold: false,
    light: false,
    italic: false,
    semiBold: false,
};

export default Font;
