import { Properties } from 'csstype';

export default function parseCssProperties(property: Properties): string {
  let cssText = '';

  const parse = (obj) => {
    Object.keys(property).forEach((property) => {
      cssText +=
        property.replace(/[A-Z]/g, (letter) => letter.toLowerCase()) +
        ':' +
        obj[property] +
        ';';
    });
  };

  parse(property);
  return cssText;
}
