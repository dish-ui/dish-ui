import { Properties } from 'csstype';

export default function parseCssProperties(property: Properties, selector: string): string {
  let cssText = '';

  const parse = (obj, selector) => {
    cssText += selector + '{';
    Object.keys(property).map((property) => {
      if (typeof obj[property] !== 'string') {
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
    if (!/}/g.test(cssText)) {
      cssText += '}';
    }
  };

  parse(property, selector);
  return cssText;
}
