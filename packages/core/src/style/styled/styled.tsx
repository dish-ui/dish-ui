import React, { PropsWithChildren, useEffect } from 'react';
import { CSSProperties } from '../style';
import clsx from 'clsx';
import parseCssProperties from '../parseCssProperties';
import PropTypes from 'prop-types';

// This should be written in JS

// eslint-disable-next-line @typescript-eslint/ban-types
export default function styled<T, Component extends React.ElementType>(
  Component: Component,
  id: string,
  style: CSSProperties
): React.ElementType {
  const StyledComponent = React.forwardRef(function StyledComponent(props: PropsWithChildren<T>, ref) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { children, className } = props;

    // Add the style element to head
    useEffect(() => {
      if (document.querySelector(`style.dish__${id}`) === null) {
        const styleElement = document.createElement('style');
        styleElement.classList.add(`dish__${id}`);
        styleElement.innerHTML = parseCssProperties(style, `.${id}`);
        document.head.appendChild(styleElement);
      }
    }, []);

    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <Component className={clsx(`dish__${id}`, className.split(/ /g))} ref={ref} {...props}>
        {children}
      </Component>
    );
  })
  StyledComponent.propTypes = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    className: PropTypes.string,
  };
  return StyledComponent;
}

// MUI used 149 lines code
// We used 1/3 of it
// Because we are the dog that don't want to write comments :D
