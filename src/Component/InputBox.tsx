import React, { useState, useRef, useEffect } from 'react';

// =====================================================
// InputBox Types
// =====================================================

export type InputBoxSize = 'small' | 'medium' | 'large';
export type InputBoxVariant = 'default' | 'outlined' | 'filled' | 'ghost';
export type InputBoxType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'color' | 'file';
export type InputBoxState = 'default' | 'focus' | 'error' | 'success' | 'disabled';

// =====================================================
// InputBox Props Interface
// =====================================================

export interface InputBoxProps {
  // Basic props
  value?: string | number;
  onChange?: (value: string) => void;
  onChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  defaultValue?: string | number;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  
  // Appearance
  type?: InputBoxType;
  size?: InputBoxSize;
  variant?: InputBoxVariant;
  fullWidth?: boolean;
  label?: string;
  helperText?: string;
  error?: string;
  success?: string;
  
  // Icons
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  clearable?: boolean;
  onClear?: () => void;
  
  // Behavior
  autoFocus?: boolean;
  autoComplete?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  
  // ClassName
  className?: string;
  classNamePrefix?: string;
  
  // Ref
  inputRef?: React.Ref<HTMLInputElement>;
}

// =====================================================
// InputBox Size Constants
// =====================================================

export const InputBoxSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export const InputBoxSizeStyles = {
  small: {
    height: '32px',
    fontSize: '0.875rem',
    padding: '4px 12px',
    iconSize: '16px',
  },
  medium: {
    height: '40px',
    fontSize: '1rem',
    padding: '8px 16px',
    iconSize: '20px',
  },
  large: {
    height: '48px',
    fontSize: '1.125rem',
    padding: '12px 20px',
    iconSize: '24px',
  },
} as const;

// =====================================================
// InputBox Variant Constants
// =====================================================

export const InputBoxVariant = {
  DEFAULT: 'default',
  OUTLINED: 'outlined',
  FILLED: 'filled',
  GHOST: 'ghost',
} as const;

export const InputBoxVariantStyles = {
  default: {
    backgroundColor: '#ffffff',
    borderColor: '#e0e0e0',
    hoverBorderColor: '#bdbdbd',
    focusBorderColor: '#2196f3',
    focusBoxShadow: '0 0 0 3px rgba(33, 150, 243, 0.15)',
  },
  outlined: {
    backgroundColor: 'transparent',
    borderColor: '#e0e0e0',
    hoverBorderColor: '#757575',
    focusBorderColor: '#2196f3',
    focusBoxShadow: '0 0 0 3px rgba(33, 150, 243, 0.15)',
  },
  filled: {
    backgroundColor: '#f5f5f5',
    borderColor: 'transparent',
    hoverBorderColor: '#e0e0e0',
    focusBorderColor: '#2196f3',
    focusBoxShadow: '0 0 0 3px rgba(33, 150, 243, 0.15)',
  },
  ghost: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    hoverBorderColor: '#e0e0e0',
    focusBorderColor: '#2196f3',
    focusBoxShadow: '0 0 0 3px rgba(33, 150, 243, 0.15)',
  },
} as const;

// =====================================================
// InputBox State Constants
// =====================================================

export const InputBoxStates = {
  DEFAULT: 'default',
  FOCUS: 'focus',
  ERROR: 'error',
  SUCCESS: 'success',
  DISABLED: 'disabled',
} as const;

// =====================================================
// InputBox Component
// =====================================================

const InputBox: React.FC<InputBoxProps> = ({
  // Basic props
  value,
  onChange,
  onChangeEvent,
  placeholder,
  defaultValue,
  disabled = false,
  readOnly = false,
  required = false,
  name,
  id,
  
  // Appearance
  type = 'text',
  size = 'medium',
  variant = 'default',
  fullWidth = false,
  label,
  helperText,
  error,
  success,
  
  // Icons
  startIcon,
  endIcon,
  clearable = false,
  onClear,
  
  // Behavior
  autoFocus = false,
  autoComplete,
  maxLength,
  minLength,
  pattern,
  min,
  max,
  step,
  
  // ClassName
  className = '',
  classNamePrefix = 'inputbox',
  
  // Ref
  inputRef,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState<string>('');
  const inputElementRef = useRef<HTMLInputElement>(null);

  // Determine if controlled or uncontrolled
  const isControlled = value !== undefined;
  const currentValue = isControlled ? String(value) : internalValue;

  // Handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled || readOnly) return;
    
    const newValue = e.target.value;
    
    if (!isControlled) {
      setInternalValue(newValue);
    }
    
    onChange?.(newValue);
    onChangeEvent?.(e);
  };

  // Handle clear
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isControlled) {
      setInternalValue('');
    }
    onChange?.('');
    onClear?.();
  };

  // Handle focus/blur
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Get size styles
  const sizeStyles = InputBoxSizeStyles[size];
  const variantStyles = InputBoxVariantStyles[variant];

  // Determine state
  let state: InputBoxState = 'default';
  if (disabled) state = 'disabled';
  else if (error) state = 'error';
  else if (success) state = 'success';
  else if (isFocused) state = 'focus';

  // Get border and shadow colors based on state
  const getBorderColor = () => {
    if (error) return '#f44336';
    if (success) return '#4caf50';
    if (isFocused) return variantStyles.focusBorderColor;
    return variantStyles.borderColor;
  };

  const getBoxShadow = () => {
    if (isFocused && !error && !success) return variantStyles.focusBoxShadow;
    return 'none';
  };

  return (
    <div
      className={`${classNamePrefix}-container ${className}`}
      style={{ 
        position: 'relative', 
        width: fullWidth ? '100%' : 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}
    >
      {/* Label */}
      {label && (
        <label
          className={`${classNamePrefix}-label`}
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            color: error ? '#f44336' : 'rgba(0, 0, 0, 0.87)',
          }}
        >
          {label}
          {required && <span style={{ color: '#f44336', marginLeft: '2px' }}>*</span>}
        </label>
      )}

      {/* Input wrapper */}
      <div
        className={`${classNamePrefix}-wrapper`}
        style={{
          display: 'flex',
          alignItems: 'center',
          height: sizeStyles.height,
          padding: `0 ${sizeStyles.padding.split(' ')[1]}`,
          backgroundColor: disabled ? '#f5f5f5' : variantStyles.backgroundColor,
          border: `1px solid ${getBorderColor()}`,
          borderRadius: '4px',
          boxShadow: getBoxShadow(),
          cursor: disabled ? 'not-allowed' : 'text',
          opacity: disabled ? 0.6 : 1,
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          ...(fullWidth && { width: '100%' }),
        }}
      >
        {/* Start Icon */}
        {startIcon && (
          <span
            className={`${classNamePrefix}-start-icon`}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '8px',
              color: 'rgba(0, 0, 0, 0.6)',
              fontSize: sizeStyles.iconSize,
            }}
          >
            {startIcon}
          </span>
        )}

        {/* Input */}
        <input
          ref={inputRef || inputElementRef}
          type={type}
          value={currentValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          defaultValue={defaultValue as string | undefined}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          name={name}
          id={id}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          min={min}
          max={max}
          step={step}
          className={`${classNamePrefix}-input`}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontSize: sizeStyles.fontSize,
            color: 'rgba(0, 0, 0, 0.87)',
            minWidth: 0,
            padding: `${sizeStyles.padding.split(' ')[0]} 0`,
            ...(disabled && { cursor: 'not-allowed' }),
          }}
        />

        {/* Character count */}
        {maxLength && (
          <span
            className={`${classNamePrefix}-counter`}
            style={{
              marginLeft: '8px',
              fontSize: '0.75rem',
              color: currentValue.length >= maxLength ? '#f44336' : 'rgba(0, 0, 0, 0.38)',
              whiteSpace: 'nowrap',
            }}
          >
            {currentValue.length}/{maxLength}
          </span>
        )}

        {/* Clear button */}
        {clearable && currentValue && !disabled && (
          <span
            onClick={handleClear}
            className={`${classNamePrefix}-clear`}
            style={{
              marginLeft: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              color: 'rgba(0, 0, 0, 0.6)',
              fontSize: sizeStyles.iconSize,
            }}
          >
            ✕
          </span>
        )}

        {/* End Icon */}
        {endIcon && !clearable && (
          <span
            className={`${classNamePrefix}-end-icon`}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '8px',
              color: error ? '#f44336' : success ? '#4caf50' : 'rgba(0, 0, 0, 0.6)',
              fontSize: sizeStyles.iconSize,
            }}
          >
            {endIcon}
          </span>
        )}
      </div>

      {/* Helper text / Error / Success */}
      {(helperText || error || success) && (
        <span
          className={`${classNamePrefix}-helper`}
          style={{
            fontSize: '0.75rem',
            color: error ? '#f44336' : success ? '#4caf50' : 'rgba(0, 0, 0, 0.6)',
          }}
        >
          {error || success || helperText}
        </span>
      )}
    </div>
  );
};

export default InputBox;

// =====================================================
// Helper Functions
// =====================================================

/**
 * Validates email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates URL format
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validates phone number format (basic validation)
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

/**
 * Formats phone number with masking
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

/**
 * Formats credit card number with spaces
 */
export const formatCreditCard = (card: string): string => {
  const cleaned = card.replace(/\s/g, '');
  const match = cleaned.match(/^(\d{4})(\d{4})(\d{4})(\d{4})$/);
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
  }
  return card;
};

/**
 * Masks credit card number (shows only last 4 digits)
 */
export const maskCreditCard = (card: string): string => {
  const cleaned = card.replace(/\s/g, '');
  if (cleaned.length < 4) return '****';
  return `**** **** **** ${cleaned.slice(-4)}`;
};

/**
 * Truncates text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

/**
 * Capitalizes first letter
 */
export const capitalizeFirst = (text: string): string => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

/**
 * Converts to title case
 */
export const toTitleCase = (text: string): string => {
  return text.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
};

/**
 * Removes leading/trailing whitespace
 */
export const trimText = (text: string): string => {
  return text.trim();
};

/**
 * Removes all whitespace
 */
export const removeWhitespace = (text: string): string => {
  return text.replace(/\s/g, '');
};

/**
 * Checks if input is empty
 */
export const isEmpty = (value: string | number | undefined | null): boolean => {
  return value === undefined || value === null || String(value).trim() === '';
};

// =====================================================
// Default Export
// =====================================================

export {
  InputBox,
  InputBoxSize,
  InputBoxSizeStyles,
  InputBoxVariant,
  InputBoxVariantStyles,
  InputBoxStates,
  isValidEmail,
  isValidUrl,
  isValidPhone,
  formatPhoneNumber,
  formatCreditCard,
  maskCreditCard,
  truncateText,
  capitalizeFirst,
  toTitleCase,
  trimText,
  removeWhitespace,
  isEmpty,
};

export type { InputBoxProps };
