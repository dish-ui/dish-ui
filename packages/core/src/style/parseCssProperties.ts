import {CSSProperties} from './style';

export default function parseCssProperties(properties: CSSProperties, selector: string): string {
  let cssText = '';

  const parse = (obj, selector) => {
    cssText += selector + '{';
    Object.keys(obj).forEach((property) => {
      if (typeof obj[property] === 'object') {
        cssText += '}';
        parse(obj[property], property.replace(/&/g, selector));
      } else {
        cssText +=
          property.replace(/[A-Z]/g, (letter) => '-' + letter.toLowerCase()) +
          ':' +
          obj[property] +
          ';';
      }
    });
    if (!/}$/.test(cssText)) {
      cssText += '}';
    }
  };

  parse(properties, selector);
  return cssText;
}
