// =====================================================
// Font Family Types
// =====================================================

// Web-safe font families
export const FontFamily = {
  // Sans-Serif Fonts
  ARIAL: 'Arial, Helvetica, sans-serif',
  HELVETICA: 'Helvetica, Arial, sans-serif',
  VERDANA: 'Verdana, Geneva, sans-serif',
  TAHOMA: 'Tahoma, Geneva, sans-serif',
  TREBUCHET: 'Trebuchet MS, sans-serif',
  IMPACT: 'Impact, Charcoal, sans-serif',
  GILL_SANS: 'Gill Sans, Gill Sans MT, Calibri, sans-serif',
  SEGOE_UI: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  ROBOTO: 'Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
  OPEN_SANS: 'Open Sans, Helvetica, Arial, sans-serif',
  LATO: 'Lato, Montserrat, sans-serif',
  MONTSERRAT: 'Montserrat, sans-serif',
  POPPINS: 'Poppins, sans-serif',
  INTER: 'Inter, system-ui, sans-serif',

  // Serif Fonts
  TIMES_NEW: '"Times New Roman", Times, serif',
  GEORGIA: 'Georgia, serif',
  GARAMOND: 'Garamond, serif',
  COURIER: 'Courier New, Courier, monospace',
  PALATINO: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
  BASKERVILLE: 'Baskerville, "Baskerville Old Face", Garamond, serif',
  GAMBIT: 'Gambit, serif',

  // Monospace Fonts
  MONO: '"Courier New", Courier, monospace',
  CONSOLAS: 'Consolas, "Courier New", monospace',
  MONACO: 'Monaco, Menlo, Ubuntu, monospace',
  FIRA_CODE: '"Fira Code", monospace',
  SOURCE_CODE: '"Source Code Pro", monospace',

  // Cursive/Fantasy Fonts
  CURSIVE: '"Comic Sans MS", "Chalkboard SE", sans-serif',
  FANTASY: 'Fantasy, cursive',
  PAPYRUS: 'Papyrus, fantasy',
  COPPERPLATE: 'Copperplate, Papyrus, fantasy',
} as const;

// Type for font family values
export type FontFamilyType = typeof FontFamily[keyof typeof FontFamily];

// =====================================================
// Font Weight Types
// =====================================================

export const FontWeight = {
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900,
} as const;

// Named font weights
export const FontWeightName = {
  THIN: 'thin',
  EXTRA_LIGHT: 'extra-light',
  LIGHT: 'light',
  REGULAR: 'regular',
  MEDIUM: 'medium',
  SEMI_BOLD: 'semi-bold',
  BOLD: 'bold',
  EXTRA_BOLD: 'extra-bold',
  BLACK: 'black',
} as const;

export type FontWeightType = number;
export type FontWeightNameType = typeof FontWeightName[keyof typeof FontWeightName];

// =====================================================
// Font Size Types
// =====================================================

export const FontSize = {
  XXS: '0.625rem',    // 10px
  XS: '0.75rem',      // 12px
  SM: '0.875rem',     // 14px
  BASE: '1rem',       // 16px
  LG: '1.125rem',     // 18px
  XL: '1.25rem',      // 20px
  XXL: '1.5rem',      // 24px
  XXXL: '1.875rem',   // 30px
  XXXXL: '2rem',      // 32px
  XXXXXL: '2.5rem',   // 40px
  XXXXXXL: '3rem',    // 48px
} as const;

// Numeric font sizes (in rem)
export const FontSizeRem = {
  XXS: 0.625,
  XS: 0.75,
  SM: 0.875,
  BASE: 1,
  LG: 1.125,
  XL: 1.25,
  XXL: 1.5,
  XXXL: 1.875,
  XXXXL: 2,
  XXXXXL: 2.5,
  XXXXXXL: 3,
} as const;

// Numeric font sizes (in px)
export const FontSizePx = {
  XXS: 10,
  XS: 12,
  SM: 14,
  BASE: 16,
  LG: 18,
  XL: 20,
  XXL: 24,
  XXXL: 30,
  XXXXL: 32,
  XXXXXL: 40,
  XXXXXXL: 48,
} as const;

export type FontSizeType = string;
export type FontSizeRemType = number;
export type FontSizePxType = number;

// =====================================================
// Font Style Types
// =====================================================

export const FontStyle = {
  NORMAL: 'normal',
  ITALIC: 'italic',
  OBLIQUE: 'oblique',
} as const;

export type FontStyleType = typeof FontStyle[keyof typeof FontStyle];

// =====================================================
// Line Height Types
// =====================================================

export const LineHeight = {
  TIGHT: 1.1,
  SNUG: 1.25,
  NORMAL: 1.5,
  RELAXED: 1.625,
  LOOSE: 2,
} as const;

export const LineHeightPx = {
  TIGHT: '1.1',
  SNUG: '1.25',
  NORMAL: '1.5',
  RELAXED: '1.625',
  LOOSE: '2',
} as const;

export type LineHeightType = number;
export type LineHeightPxType = string;

// =====================================================
// Letter Spacing Types
// =====================================================

export const LetterSpacing = {
  TIGHTER: '-0.05em',
  TIGHT: '-0.025em',
  NORMAL: '0',
  WIDE: '0.025em',
  WIDER: '0.05em',
  WIDEST: '0.1em',
} as const;

export const LetterSpacingPx = {
  TIGHTER: -0.8,
  TIGHT: -0.4,
  NORMAL: 0,
  WIDE: 0.4,
  WIDER: 0.8,
  WIDEST: 1.6,
} as const;

export type LetterSpacingType = string;
export type LetterSpacingPxType = number;

// =====================================================
// Text Transform Types
// =====================================================

export const TextTransform = {
  NONE: 'none',
  CAPITALIZE: 'capitalize',
  UPPERCASE: 'uppercase',
  LOWERCASE: 'lowercase',
} as const;

export type TextTransformType = typeof TextTransform[keyof typeof TextTransform];

// =====================================================
// Text Decoration Types
// =====================================================

export const TextDecoration = {
  NONE: 'none',
  UNDERLINE: 'underline',
  OVERLINE: 'overline',
  LINE_THROUGH: 'line-through',
  BLINK: 'blink',
} as const;

export type TextDecorationType = typeof TextDecoration[keyof typeof TextDecoration];

// =====================================================
// Text Align Types
// =====================================================

export const TextAlign = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center',
  JUSTIFY: 'justify',
  JUSTIFY_ALL: 'justify-all',
  START: 'start',
  END: 'end',
} as const;

export type TextAlignType = typeof TextAlign[keyof typeof TextAlign];

// =====================================================
// Font Variant Types
// =====================================================

export const FontVariant = {
  NORMAL: 'normal',
  SMALL_CAPS: 'small-caps',
  ALL_SMALL_CAPS: 'all-small-caps',
  PETITE_CAPS: 'petite-caps',
  ALL_PETITE_CAPS: 'all-petite-caps',
  UNICASE: 'unicase',
  INHERIT: 'inherit',
} as const;

export type FontVariantType = typeof FontVariant[keyof typeof FontVariant];

// =====================================================
// Pre-defined Font Combinations
// =====================================================

export interface FontConfig {
  family: string;
  weight: number;
  size: string;
  lineHeight: string | number;
  letterSpacing: string;
  style: string;
  textTransform: string;
  textDecoration: string;
  textAlign: string;
}

// Pre-defined font configurations
export const FontConfig = {
  // Heading styles
  H1: {
    family: FontFamily.ROBOTO,
    weight: FontWeight.BOLD,
    size: FontSize.XXXXXL,
    lineHeight: LineHeight.TIGHT,
    letterSpacing: LetterSpacing.TIGHT,
    style: FontStyle.NORMAL,
    textTransform: TextTransform.NONE,
    textDecoration: TextDecoration.NONE,
    textAlign: TextAlign.LEFT,
  } as FontConfig,

  H2: {
    family: FontFamily.ROBOTO,
    weight: FontWeight.SEMI_BOLD,
    size: FontSize.XXXXL,
    lineHeight: LineHeight.TIGHT,
    letterSpacing: LetterSpacing.TIGHT,
    style: FontStyle.NORMAL,
    textTransform: TextTransform.NONE,
    textDecoration: TextDecoration.NONE,
    textAlign: TextAlign.LEFT,
  } as FontConfig,

  H3: {
    family: FontFamily.ROBOTO,
    weight: FontWeight.SEMI_BOLD,
    size: FontSize.XXXL,
    lineHeight: LineHeight.SNUG,
    letterSpacing: LetterSpacing.NORMAL,
    style: FontStyle.NORMAL,
    textTransform: TextTransform.NONE,
    textDecoration: TextDecoration.NONE,
    textAlign: TextAlign.LEFT,
  } as FontConfig,

  H4: {
    family: FontFamily.ROBOTO,
    weight: FontWeight.MEDIUM,
    size: FontSize.XXL,
    lineHeight: LineHeight.SNUG,
    letterSpacing: LetterSpacing.NORMAL,
    style: FontStyle.NORMAL,
    textTransform: TextTransform.NONE,
    textDecoration: TextDecoration.NONE,
    textAlign: TextAlign.LEFT,
  } as FontConfig,

  H5: {
    family: FontFamily.ROBOTO,
    weight: FontWeight.MEDIUM,
    size: FontSize.XL,
    lineHeight: LineHeight.NORMAL,
    letterSpacing: LetterSpacing.NORMAL,
    style: FontStyle.NORMAL,
    textTransform: TextTransform.NONE,
    textDecoration: TextDecoration.NONE,
    textAlign: TextAlign.LEFT,
  } as FontConfig,

  H6: {
    family: FontFamily.ROBOTO,
    weight: FontWeight.MEDIUM,
    size: FontSize.LG,
    lineHeight: LineHeight.NORMAL,
    letterSpacing: LetterSpacing.WIDE,
    style: FontStyle.NORMAL,
    textTransform: TextTransform.NONE,
    textDecoration: TextDecoration.NONE,
    textAlign: TextAlign.LEFT,
  } as FontConfig,

  // Body text styles
  BODY_LARGE: {
    family: FontFamily.ROBOTO,
    weight: FontWeight.REGULAR,
    size: FontSize.LG,
    lineHeight: LineHeight.RELAXED,
    letterSpacing: LetterSpacing.NORMAL,
    style: FontStyle.NORMAL,
    textTransform: TextTransform.NONE,
    textDecoration: TextDecoration.NONE,
    textAlign: TextAlign.LEFT,
  } as FontConfig,

  BODY: {
    family: FontFamily.ROBOTO,
    weight: FontWeight.REGULAR,
    size: FontSize.BASE,
    lineHeight: LineHeight.NORMAL,
    letterSpacing: LetterSpacing.NORMAL,
    style: FontStyle.NORMAL,
    textTransform: TextTransform.NONE,
    textDecoration: TextDecoration.NONE,
    textAlign: TextAlign.LEFT,
  } as FontConfig,

  BODY_SMALL: {
    family: FontFamily.ROBOTO,
    weight: FontWeight.REGULAR,
    size: FontSize.SM,
    lineHeight: LineHeight.NORMAL,
    letterSpacing: LetterSpacing.NORMAL,
    style: FontStyle.NORMAL,
    textTransform: TextTransform.NONE,
    textDecoration: TextDecoration.NONE,
    textAlign: TextAlign.LEFT,
  } as FontConfig,

  // Special text styles
  CAPTION: {
    family: FontFamily.ROBOTO,
    weight: FontWeight.REGULAR,
    size: FontSize.XS,
    lineHeight: LineHeight.NORMAL,
    letterSpacing: LetterSpacing.WIDE,
    style: FontStyle.NORMAL,
    textTransform: TextTransform.NONE,
    textDecoration: TextDecoration.NONE,
    textAlign: TextAlign.LEFT,
  } as FontConfig,

  OVERLINE: {
    family: FontFamily.ROBOTO,
    weight: FontWeight.MEDIUM,
    size: FontSize.XXS,
    lineHeight: LineHeight.NORMAL,
    letterSpacing: LetterSpacing.WIDEST,
    style: FontStyle.NORMAL,
    textTransform: TextTransform.UPPERCASE,
    textDecoration: TextDecoration.NONE,
    textAlign: TextAlign.LEFT,
  } as FontConfig,

  BUTTON: {
    family: FontFamily.ROBOTO,
    weight: FontWeight.SEMI_BOLD,
    size: FontSize.BASE,
    lineHeight: LineHeight.NORMAL,
    letterSpacing: LetterSpacing.NORMAL,
    style: FontStyle.NORMAL,
    textTransform: TextTransform.NONE,
    textDecoration: TextDecoration.NONE,
    textAlign: TextAlign.CENTER,
  } as FontConfig,

  LINK: {
    family: FontFamily.ROBOTO,
    weight: FontWeight.MEDIUM,
    size: FontSize.BASE,
    lineHeight: LineHeight.NORMAL,
    letterSpacing: LetterSpacing.NORMAL,
    style: FontStyle.NORMAL,
    textTransform: TextTransform.NONE,
    textDecoration: TextDecoration.UNDERLINE,
    textAlign: TextAlign.LEFT,
  } as FontConfig,

  CODE: {
    family: FontFamily.CONSOLAS,
    weight: FontWeight.REGULAR,
    size: FontSize.SM,
    lineHeight: LineHeight.RELAXED,
    letterSpacing: LetterSpacing.NORMAL,
    style: FontStyle.NORMAL,
    textTransform: TextTransform.NONE,
    textDecoration: TextDecoration.NONE,
    textAlign: TextAlign.LEFT,
  } as FontConfig,
} as const;

// =====================================================
// Helper Function to Generate CSS
// =====================================================

/**
 * Generates CSS string from FontConfig
 */
export const generateFontCSS = (config: FontConfig): string => {
  return `
    font-family: ${config.family};
    font-weight: ${config.weight};
    font-size: ${config.size};
    line-height: ${config.lineHeight};
    letter-spacing: ${config.letterSpacing};
    font-style: ${config.style};
    text-transform: ${config.textTransform};
    text-decoration: ${config.textDecoration};
    text-align: ${config.textAlign};
  `.trim();
};

/**
 * Generates inline styles object from FontConfig
 */
export const generateFontStyles = (config: FontConfig) => {
  return {
    fontFamily: config.family,
    fontWeight: config.weight,
    fontSize: config.size,
    lineHeight: config.lineHeight,
    letterSpacing: config.letterSpacing,
    fontStyle: config.style,
    textTransform: config.textTransform,
    textDecoration: config.textDecoration,
    textAlign: config.textAlign,
  };
};

// =====================================================
// Default Export
// =====================================================

export default {
  FontFamily,
  FontWeight,
  FontWeightName,
  FontSize,
  FontSizeRem,
  FontSizePx,
  FontStyle,
  LineHeight,
  LineHeightPx,
  LetterSpacing,
  LetterSpacingPx,
  TextTransform,
  TextDecoration,
  TextAlign,
  FontVariant,
  FontConfig,
  generateFontCSS,
  generateFontStyles,
};
