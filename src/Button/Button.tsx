import React from 'react';
import PropTypes from 'prop-types';
import IComponentProps from '../utils/IComponentProps';
import ButtonFooter from './ButtonFooter';

interface IButtonProps extends IComponentProps {
    primary: boolean;
    danger: boolean;
}
function Button(props: IButtonProps): React.ReactNode {
    const { children, primary, danger } = props;

    // For class name suffix
    // The order should be reversed priority order
    let classNameSuffix: string = '';
    if (danger) classNameSuffix = 'danger';
    if (primary) classNameSuffix = 'primary';

    return <div className={'pot-button' + classNameSuffix}>{children}</div>;
}

Button.propTypes = {
    primary: PropTypes.bool,
    danger: PropTypes.bool,
};

Button.defaultProps = {
    primary: false,
    danger: false,
};

Button.Footer = ButtonFooter;

export default Button;
