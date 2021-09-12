import { PropertiesFallback } from 'csstype';

type CSSProperties = {
  [K in keyof PropertiesFallback | string]?: CSSProperties | string;
};

export default function parseCssProperties(property: CSSProperties, selector: string): string {
  let cssText = '';

  const parse = (obj, selector) => {
    cssText += selector + '{';
    Object.keys(obj).map((property) => {
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

  parse(property, selector);
  return cssText;
}
