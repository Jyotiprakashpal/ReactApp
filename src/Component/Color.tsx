// =====================================================
// Color Types
// =====================================================

// Basic Color Types
export type ColorHex = string;
export type ColorRGB = `rgb(${number}, ${number}, ${number})`;
export type ColorRGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type ColorHSL = `hsl(${number}, ${number}%, ${number}%)`;
export type ColorHSLA = `hsla(${number}, ${number}%, ${number}%, ${number})`;
export type ColorType = ColorHex | ColorRGB | ColorRGBA | ColorHSL | ColorHSLA;

// =====================================================
// Primary Colors
// =====================================================

export const PrimaryColors = {
  // Blue variants
  BLUE_50: '#e3f2fd',
  BLUE_100: '#bbdefb',
  BLUE_200: '#90caf9',
  BLUE_300: '#64b5f6',
  BLUE_400: '#42a5f5',
  BLUE_500: '#2196f3',
  BLUE_600: '#1e88e5',
  BLUE_700: '#1976d2',
  BLUE_800: '#1565c0',
  BLUE_900: '#0d47a1',

  // Primary blue
  PRIMARY: '#2196f3',
  PRIMARY_LIGHT: '#64b5f6',
  PRIMARY_DARK: '#1976d2',

  // Indigo variants
  INDIGO_50: '#e8eaf6',
  INDIGO_100: '#c5cae9',
  INDIGO_200: '#9fa8da',
  INDIGO_300: '#7986cb',
  INDIGO_400: '#5c6bc0',
  INDIGO_500: '#3f51b5',
  INDIGO_600: '#3949ab',
  INDIGO_700: '#303f9f',
  INDIGO_800: '#283593',
  INDIGO_900: '#1a237e',
} as const;

// =====================================================
// Secondary Colors
// =====================================================

export const SecondaryColors = {
  // Purple variants
  PURPLE_50: '#f3e5f5',
  PURPLE_100: '#e1bee7',
  PURPLE_200: '#ce93d8',
  PURPLE_300: '#ba68c8',
  PURPLE_400: '#ab47bc',
  PURPLE_500: '#9c27b0',
  PURPLE_600: '#8e24aa',
  PURPLE_700: '#7b1fa2',
  PURPLE_800: '#6a1b9a',
  PURPLE_900: '#4a148c',

  // Pink variants
  PINK_50: '#fce4ec',
  PINK_100: '#f8bbd0',
  PINK_200: '#f48fb1',
  PINK_300: '#f06292',
  PINK_400: '#ec407a',
  PINK_500: '#e91e63',
  PINK_600: '#d81b60',
  PINK_700: '#c2185b',
  PINK_800: '#ad1457',
  PINK_900: '#880e4f',
} as const;

// =====================================================
// Neutral Colors
// =====================================================

export const NeutralColors = {
  // Gray variants
  GRAY_50: '#fafafa',
  GRAY_100: '#f5f5f5',
  GRAY_200: '#eeeeee',
  GRAY_300: '#e0e0e0',
  GRAY_400: '#bdbdbd',
  GRAY_500: '#9e9e9e',
  GRAY_600: '#757575',
  GRAY_700: '#616161',
  GRAY_800: '#424242',
  GRAY_900: '#212121',

  // Black and White
  BLACK: '#000000',
  WHITE: '#ffffff',

  // Transparent
  TRANSPARENT: 'transparent',
  CURRENT_COLOR: 'currentColor',
} as const;

// =====================================================
// Semantic Colors
// =====================================================

export const SemanticColors = {
  // Status colors
  SUCCESS: '#4caf50',
  SUCCESS_LIGHT: '#81c784',
  SUCCESS_DARK: '#388e3c',

  WARNING: '#ff9800',
  WARNING_LIGHT: '#ffb74d',
  WARNING_DARK: '#f57c00',

  ERROR: '#f44336',
  ERROR_LIGHT: '#e57373',
  ERROR_DARK: '#d32f2f',

  INFO: '#00acc1',
  INFO_LIGHT: '#4dd0e1',
  INFO_DARK: '#00838f',

  // State colors
  DISABLED: '#9e9e9e',
  DISABLED_BACKGROUND: '#e0e0e0',
  FOCUS: '#2196f3',
  HOVER: 'rgba(0, 0, 0, 0.04)',
  ACTIVE: 'rgba(0, 0, 0, 0.08)',
  SELECTED: '#e3f2fd',
} as const;

// =====================================================
// Background Colors
// =====================================================

export const BackgroundColors = {
  DEFAULT: '#ffffff',
  PAPER: '#fafafa',
  ELEVATED: '#ffffff',
  OVERLAY: 'rgba(0, 0, 0, 0.5)',
  SCrim: 'rgba(0, 0, 0, 0.32)',
} as const;

// =====================================================
// Text Colors
// =====================================================

export const TextColors = {
  PRIMARY: 'rgba(0, 0, 0, 0.87)',
  SECONDARY: 'rgba(0, 0, 0, 0.6)',
  DISABLED: 'rgba(0, 0, 0, 0.38)',
  HINT: 'rgba(0, 0, 0, 0.38)',

  // Dark theme text
  PRIMARY_DARK: 'rgba(255, 255, 255, 0.87)',
  SECONDARY_DARK: 'rgba(255, 255, 255, 0.6)',
  DISABLED_DARK: 'rgba(255, 255, 255, 0.38)',
} as const;

// =====================================================
// Border Colors
// =====================================================

export const BorderColors = {
  LIGHT: '#e0e0e0',
  MEDIUM: '#bdbdbd',
  DARK: '#9e9e9e',
  FOCUS: '#2196f3',
  ERROR: '#f44336',
} as const;

// =====================================================
// Gradient Types
// =====================================================

export const Gradients = {
  // Linear gradients
  LINEAR_BLUE: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)',
  LINEAR_PURPLE: 'linear-gradient(135deg, #9c27b0 0%, #e91e63 100%)',
  LINEAR_GREEN: 'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)',
  LINEAR_ORANGE: 'linear-gradient(135deg, #ff9800 0%, #ff5722 100%)',
  LINEAR_RED: 'linear-gradient(135deg, #f44336 0%, #e91e63 100%)',
  LINEAR_PINK: 'linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)',
  LINEAR_SKY: 'linear-gradient(135deg, #00acc1 0%, #26c6da 100%)',
  LINEAR_VIOLET: 'linear-gradient(135deg, #673ab7 0%, #9c27b0 100%)',

  // Radial gradients
  RADIAL_BLUE: 'radial-gradient(circle, #2196f3 0%, #1976d2 100%)',
  RADIAL_PURPLE: 'radial-gradient(circle, #9c27b0 0%, #7b1fa2 100%)',

  // Diagonal gradients
  DIAGONAL_RAINBOW: 'linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #54a0ff)',

  // Mesh gradients
  MESH_LIGHT: 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)',
} as const;

// =====================================================
// Shadow Types
// =====================================================

export const Shadows = {
  // Elevation shadows
  ELEVATION_0: 'none',
  ELEVATION_1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  ELEVATION_2: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
  ELEVATION_3: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
  ELEVATION_4: '0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)',
  ELEVATION_5: '0 20px 40px rgba(0,0,0,0.2)',

  // Colored shadows
  SHADOW_BLUE: '0 4px 20px rgba(33, 150, 243, 0.3)',
  SHADOW_PURPLE: '0 4px 20px rgba(156, 39, 176, 0.3)',
  SHADOW_GREEN: '0 4px 20px rgba(76, 175, 80, 0.3)',
  SHADOW_ORANGE: '0 4px 20px rgba(255, 152, 0, 0.3)',
  SHADOW_RED: '0 4px 20px rgba(244, 67, 54, 0.3)',
  SHADOW_PINK: '0 4px 20px rgba(233, 30, 99, 0.3)',

  // Glow effects
  GLOW_BLUE: '0 0 20px rgba(33, 150, 243, 0.5)',
  GLOW_PURPLE: '0 0 20px rgba(156, 39, 176, 0.5)',
  GLOW_GREEN: '0 0 20px rgba(76, 175, 80, 0.5)',
  GLOW_ORANGE: '0 0 20px rgba(255, 152, 0, 0.5)',
  GLOW_RED: '0 0 20px rgba(244, 67, 54, 0.5)',
  GLOW_PINK: '0 0 20px rgba(233, 30, 99, 0.5)',

  // Inner shadows
  INNER_LIGHT: 'inset 0 2px 4px rgba(0,0,0,0.06)',
  INNER_MEDIUM: 'inset 0 2px 4px rgba(0,0,0,0.1)',
  INNER_DARK: 'inset 0 2px 4px rgba(0,0,0,0.2)',
} as const;

// =====================================================
// Opacity Values
// =====================================================

export const Opacity = {
  HIDE: 0,
  LOW: 0.25,
  MEDIUM: 0.5,
  HIGH: 0.75,
  FULL: 1,
} as const;

// =====================================================
// Color Palette Generator
// =====================================================

export interface ColorPaletteOptions {
  baseColor: string;
  count?: number;
  prefix?: string;
}

/**
 * Generates a color palette from a base color
 */
export const generateColorPalette = (options: ColorPaletteOptions): Record<string, string> => {
  const { baseColor, count = 10, prefix = 'COLOR' } = options;
  
  // This is a simplified version - in production you'd use a color manipulation library
  const palette: Record<string, string> = {};
  const step = 100 / (count - 1);
  
  for (let i = 0; i < count; i++) {
    const level = Math.round(i * step);
    const key = level === 0 ? 'LIGHTEST' : level === 100 ? 'DARKEST' : `${level * 10}` as any;
    palette[`${prefix}_${key}`] = baseColor; // Would need color manipulation for actual values
  }
  
  return palette;
};

// =====================================================
// Default Export
// =====================================================

export default {
  PrimaryColors,
  SecondaryColors,
  NeutralColors,
  SemanticColors,
  BackgroundColors,
  TextColors,
  BorderColors,
  Gradients,
  Shadows,
  Opacity,
  generateColorPalette,
};
