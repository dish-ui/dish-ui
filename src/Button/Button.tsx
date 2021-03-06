import React from 'react';
import PropTypes from 'prop-types';
import IComponentProps from '../utils/IComponentProps';
import ButtonFooter from './ButtonFooter';
import getComponentClassName from '../utils/getComponentClassName';

interface IButtonProps extends IComponentProps {
    primary: boolean;
    danger: boolean;
    link: boolean;
}

function Button(props: IButtonProps): React.ReactElement {
    const { children, primary, danger, link } = props;

    // For class name suffix
    // The order should be reversed priority order
    let classNameSuffix: string = '';
    if (link) classNameSuffix = 'link';
    if (danger) classNameSuffix = 'danger';
    if (primary) classNameSuffix = 'primary';

    return (
        <button
            className={getComponentClassName('Button', classNameSuffix)}
            role="Button"
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    primary: PropTypes.bool,
    danger: PropTypes.bool,
    link: PropTypes.bool,
};

Button.defaultProps = {
    primary: false,
    danger: false,
    link: false,
};

Button.Footer = ButtonFooter;

export default Button;
