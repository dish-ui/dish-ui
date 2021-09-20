import { PropertiesFallback } from 'csstype';

type CSSProperties = {
  [K in keyof PropertiesFallback | string]?: CSSProperties | string;
};
