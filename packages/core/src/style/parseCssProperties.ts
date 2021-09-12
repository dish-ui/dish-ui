import { Properties } from 'csstype';

export default function parseCssProperties(property: Properties, selector: string): string {
  let cssText = '';

  const parse = (obj, selector) => {
    cssText += selector + '{'
    Object.keys(property).map((property) => {
      cssText +=
        property.replace(/[A-Z]/g, (letter) => letter.toLowerCase()) +
        ':' +
        obj[property] +
        ';';
    });
    cssText += selector + '}'
  };

  parse(property, selector);
  return cssText;
}
