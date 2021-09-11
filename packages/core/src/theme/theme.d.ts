type Palette = {
  [K in 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900]: string;
};

export interface Theme {
  palette: {
    primary: Palette,
    danger: Palette,
    success: Palette,
    info: Palette,
    error: Palette,
    warn: Palette,
  },
  typography: {
    common: number;
    h6: number;
    h5: number;
    h4: number;
    h3: number;
    h2: number;
    h1: number;
  }
}
