type PaletteColor = {
  [K in 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900]: string;
};

interface Palette {
  primary: PaletteColor;
  danger: PaletteColor;
  success: PaletteColor;
  info: PaletteColor;
  error: PaletteColor;
  warn: PaletteColor;
  background: PaletteColor;
}

interface FontConfig<T> {
  h6: T;
  h5: T;
  h4: T;
  h3: T;
  h2: T;
  h1: T;
  text: T;
}

export interface Theme {
  palette: Palette;
  typography: {
    fontFamily: string;
    fontSize: FontConfig<number>;
    color: FontConfig<string> | string;
    spacing: number;
    shadow: {
      // Just four numbers
      [K in 2 | 4 | 8 | 16]: number;
    };
  };
}
