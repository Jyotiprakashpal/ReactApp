import React, { useState, useRef, useEffect } from 'react';

// =====================================================
// Dropdown Types
// =====================================================

export type DropdownSize = 'small' | 'medium' | 'large';
export type DropdownVariant = 'default' | 'outlined' | 'filled' | 'ghost';
export type DropdownPosition = 'bottom-left' | 'bottom-right' | 'bottom-center' | 'top-left' | 'top-right' | 'top-center';
export type DropdownTrigger = 'click' | 'hover' | 'focus';
export type DropdownAnimation = 'none' | 'fade' | 'slide' | 'zoom';

export interface DropdownOption {
  label: string;
  value: string | number;
  disabled?: boolean;
  icon?: React.ReactNode;
  description?: string;
  dividerAfter?: boolean;
}

export interface DropdownGroup {
  label?: string;
  options: DropdownOption[];
}

export interface DropdownProps {
  // Basic props
  options: DropdownOption[] | DropdownGroup[];
  value?: string | number | (string | number)[];
  onChange?: (value: string | number | (string | number)[]) => void;
  placeholder?: string;
  disabled?: boolean;
  
  // Appearance
  size?: DropdownSize;
  variant?: DropdownVariant;
  fullWidth?: boolean;
  
  // Behavior
  multiple?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  closeOnSelect?: boolean;
  trigger?: DropdownTrigger;
  
  // Position
  position?: DropdownPosition;
  offset?: number;
  
  // Animation
  animation?: DropdownAnimation;
  animationDuration?: number;
  
  // Labels
  label?: string;
  error?: string;
  helperText?: string;
  
  // Icons
  dropdownIcon?: React.ReactNode;
  clearIcon?: React.ReactNode;
  
  // Custom rendering
  renderOption?: (option: DropdownOption, isSelected: boolean) => React.ReactNode;
  renderValue?: (value: (string | number)[]) => React.ReactNode;
  
  // ClassName
  className?: string;
  classNamePrefix?: string;
}

// =====================================================
// Dropdown Size Constants
// =====================================================

export const DropdownSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export const DropdownSizeStyles = {
  small: {
    height: '32px',
    fontSize: '0.875rem',
    padding: '4px 12px',
    optionPadding: '6px 12px',
  },
  medium: {
    height: '40px',
    fontSize: '1rem',
    padding: '8px 16px',
    optionPadding: '10px 16px',
  },
  large: {
    height: '48px',
    fontSize: '1.125rem',
    padding: '12px 20px',
    optionPadding: '14px 20px',
  },
} as const;

// =====================================================
// Dropdown Variant Constants
// =====================================================

export const DropdownVariant = {
  DEFAULT: 'default',
  OUTLINED: 'outlined',
  FILLED: 'filled',
  GHOST: 'ghost',
} as const;

export const DropdownVariantStyles = {
  default: {
    backgroundColor: '#ffffff',
    borderColor: '#e0e0e0',
    hoverBorderColor: '#bdbdbd',
    focusBorderColor: '#2196f3',
  },
  outlined: {
    backgroundColor: 'transparent',
    borderColor: '#e0e0e0',
    hoverBorderColor: '#757575',
    focusBorderColor: '#2196f3',
  },
  filled: {
    backgroundColor: '#f5f5f5',
    borderColor: 'transparent',
    hoverBorderColor: '#e0e0e0',
    focusBorderColor: '#2196f3',
  },
  ghost: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    hoverBorderColor: 'transparent',
    focusBorderColor: '#2196f3',
  },
} as const;

// =====================================================
// Dropdown Position Constants
// =====================================================

export const DropdownPosition = {
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
} as const;

// =====================================================
// Dropdown State Constants
// =====================================================

export const DropdownStates = {
  IDLE: 'idle',
  OPEN: 'open',
  HOVER: 'hover',
  FOCUS: 'focus',
  DISABLED: 'disabled',
  LOADING: 'loading',
} as const;

// =====================================================
// Dropdown Component
// =====================================================

const Dropdown: React.FC<DropdownProps> = ({
  // Basic props
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  
  // Appearance
  size = 'medium',
  variant = 'default',
  fullWidth = false,
  
  // Behavior
  multiple = false,
  searchable = false,
  clearable = false,
  closeOnSelect = true,
  trigger = 'click',
  
  // Position
  position = 'bottom-left',
  offset = 4,
  
  // Animation
  animation = 'fade',
  animationDuration = 200,
  
  // Labels
  label,
  error,
  helperText,
  
  // Icons
  dropdownIcon,
  clearIcon,
  
  // Custom rendering
  renderOption,
  renderValue,
  
  // ClassName
  className = '',
  classNamePrefix = 'dropdown',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Flatten options for easier searching
  const flatOptions = Array.isArray(options) && !('label' in options[0])
    ? options as DropdownOption[]
    : (options as DropdownGroup[]).flatMap(group => group.options);

  // Filter options based on search query
  const filteredOptions = searchable && searchQuery
    ? flatOptions.filter(option => 
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : flatOptions;

  // Get selected values
  const selectedValues = Array.isArray(value) ? value : value ? [value] : [];

  // Check if option is selected
  const isSelected = (optionValue: string | number) => 
    selectedValues.includes(optionValue);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) {
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
          event.preventDefault();
          setIsOpen(true);
        }
        return;
      }

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setHighlightedIndex(prev => 
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setHighlightedIndex(prev => 
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
            handleSelect(filteredOptions[highlightedIndex].value);
          }
          break;
        case 'Escape':
          event.preventDefault();
          setIsOpen(false);
          break;
        case 'Backspace':
          if (searchable && searchQuery === '' && clearable && selectedValues.length > 0) {
            handleClear();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, highlightedIndex, filteredOptions, searchable, searchQuery, clearable, selectedValues]);

  // Handle option selection
  const handleSelect = (optionValue: string | number) => {
    if (multiple) {
      const newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter(v => v !== optionValue)
        : [...selectedValues, optionValue];
      onChange?.(newValues);
    } else {
      onChange?.(optionValue);
      if (closeOnSelect) {
        setIsOpen(false);
        setSearchQuery('');
      }
    }
  };

  // Handle clear
  const handleClear = (event?: React.MouseEvent) => {
    event?.stopPropagation();
    onChange?.(multiple ? [] : ('' as any));
    setSearchQuery('');
  };

  // Get display text
  const getDisplayText = () => {
    if (selectedValues.length === 0) return placeholder;
    
    if (multiple) {
      const selectedLabels = flatOptions
        .filter(opt => selectedValues.includes(opt.value))
        .map(opt => opt.label);
      return selectedLabels.join(', ');
    }
    
    const selectedOption = flatOptions.find(opt => opt.value === selectedValues[0]);
    return selectedOption?.label || placeholder;
  };

  // Get size styles
  const sizeStyles = DropdownSizeStyles[size];
  const variantStyles = DropdownVariantStyles[variant];

  // Get position styles
  const getPositionStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      position: 'absolute',
      zIndex: 1000,
    };

    switch (position) {
      case 'bottom-left':
        return { ...baseStyles, top: `calc(100% + ${offset}px)`, left: 0 };
      case 'bottom-right':
        return { ...baseStyles, top: `calc(100% + ${offset}px)`, right: 0 };
      case 'bottom-center':
        return { ...baseStyles, top: `calc(100% + ${offset}px)`, left: '50%', transform: 'translateX(-50%)' };
      case 'top-left':
        return { ...baseStyles, bottom: `calc(100% + ${offset}px)`, left: 0 };
      case 'top-right':
        return { ...baseStyles, bottom: `calc(100% + ${offset}px)`, right: 0 };
      case 'top-center':
        return { ...baseStyles, bottom: `calc(100% + ${offset}px)`, left: '50%', transform: 'translateX(-50%)' };
      default:
        return { ...baseStyles, top: `calc(100% + ${offset}px)`, left: 0 };
    }
  };

  // Get animation styles
  const getAnimationStyles = (): React.CSSProperties => {
    const baseDuration = `${animationDuration}ms`;
    
    switch (animation) {
      case 'fade':
        return {
          opacity: isOpen ? 1 : 0,
          transition: `opacity ${baseDuration} ease`,
        };
      case 'slide':
        return {
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
          transition: `opacity ${baseDuration} ease, transform ${baseDuration} ease`,
        };
      case 'zoom':
        return {
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'scale(1)' : 'scale(0.95)',
          transition: `opacity ${baseDuration} ease, transform ${baseDuration} ease`,
        };
      default:
        return {};
    }
  };

  return (
    <div
      ref={containerRef}
      className={`${classNamePrefix}-container ${className}`}
      style={{ position: 'relative', width: fullWidth ? '100%' : 'auto' }}
    >
      {label && (
        <label
          className={`${classNamePrefix}-label`}
          style={{
            display: 'block',
            marginBottom: '4px',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: error ? '#f44336' : 'rgba(0, 0, 0, 0.87)',
          }}
        >
          {label}
        </label>
      )}
      
      <div
        className={`${classNamePrefix}-wrapper`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onMouseEnter={() => trigger === 'hover' && !disabled && setIsOpen(true)}
        onMouseLeave={() => trigger === 'hover' && setIsOpen(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          height: sizeStyles.height,
          padding: sizeStyles.padding,
          backgroundColor: variantStyles.backgroundColor,
          border: `1px solid ${error ? '#f44336' : isOpen ? variantStyles.focusBorderColor : variantStyles.borderColor}`,
          borderRadius: '4px',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1,
          transition: 'border-color 0.2s ease',
          ...(fullWidth && { width: '100%' }),
        }}
      >
        {/* Search input */}
        {searchable && isOpen ? (
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            placeholder={placeholder}
            className={`${classNamePrefix}-search`}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: sizeStyles.fontSize,
              minWidth: 0,
            }}
          />
        ) : (
          <span
            className={`${classNamePrefix}-value`}
            style={{
              flex: 1,
              fontSize: sizeStyles.fontSize,
              color: selectedValues.length > 0 ? 'rgba(0, 0, 0, 0.87)' : 'rgba(0, 0, 0, 0.38)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {renderValue ? renderValue(selectedValues) : getDisplayText()}
          </span>
        )}

        {/* Clear button */}
        {clearable && selectedValues.length > 0 && (
          <span
            onClick={handleClear}
            className={`${classNamePrefix}-clear`}
            style={{
              marginLeft: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {clearIcon || '×'}
          </span>
        )}

        {/* Dropdown icon */}
        <span
          className={`${classNamePrefix}-icon`}
          style={{
            marginLeft: '8px',
            display: 'flex',
            alignItems: 'center',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        >
          {dropdownIcon || '▼'}
        </span>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className={`${classNamePrefix}-menu`}
          style={{
            ...getPositionStyles(),
            ...getAnimationStyles(),
            minWidth: '200px',
            maxHeight: '300px',
            overflowY: 'auto',
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          }}
        >
          {filteredOptions.length === 0 ? (
            <div
              className={`${classNamePrefix}-empty`}
              style={{
                padding: sizeStyles.optionPadding,
                color: 'rgba(0, 0, 0, 0.38)',
                textAlign: 'center',
              }}
            >
              No options found
            </div>
          ) : (
            filteredOptions.map((option, index) => (
              <div
                key={option.value}
                onClick={() => !option.disabled && handleSelect(option.value)}
                className={`${classNamePrefix}-option`}
                style={{
                  padding: sizeStyles.optionPadding,
                  cursor: option.disabled ? 'not-allowed' : 'pointer',
                  backgroundColor: isSelected(option.value)
                    ? '#e3f2fd'
                    : index === highlightedIndex
                    ? 'rgba(0, 0, 0, 0.04)'
                    : 'transparent',
                  color: option.disabled
                    ? 'rgba(0, 0, 0, 0.38)'
                    : 'rgba(0, 0, 0, 0.87)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.15s ease',
                }}
              >
                {/* Multiple select checkbox */}
                {multiple && (
                  <span
                    style={{
                      width: '18px',
                      height: '18px',
                      border: `2px solid ${isSelected(option.value) ? '#2196f3' : '#9e9e9e'}`,
                      borderRadius: '3px',
                      backgroundColor: isSelected(option.value) ? '#2196f3' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {isSelected(option.value) && (
                      <span style={{ color: '#fff', fontSize: '12px' }}>✓</span>
                    )}
                  </span>
                )}
                
                {renderOption ? (
                  renderOption(option, isSelected(option.value))
                ) : (
                  <>
                    {option.icon && <span>{option.icon}</span>}
                    <span style={{ flex: 1 }}>{option.label}</span>
                    {option.description && (
                      <span style={{ fontSize: '0.75rem', color: 'rgba(0, 0, 0, 0.6)' }}>
                        {option.description}
                      </span>
                    )}
                  </>
                )}
              </div>
            ))
          )}
        </div>
      )}

      {/* Helper text / Error message */}
      {(helperText || error) && (
        <span
          className={`${classNamePrefix}-helper`}
          style={{
            display: 'block',
            marginTop: '4px',
            fontSize: '0.75rem',
            color: error ? '#f44336' : 'rgba(0, 0, 0, 0.6)',
          }}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
};

export default Dropdown;

// =====================================================
// Helper Functions
// =====================================================

/**
 * Creates dropdown options from a simple array
 */
export const createDropdownOptions = (
  items: (string | number)[],
  labels?: Record<string | number, string>
): DropdownOption[] => {
  return items.map(item => ({
    value: item,
    label: labels?.[item] || String(item),
  }));
};

/**
 * Groups dropdown options by category
 */
export const groupDropdownOptions = (
  options: DropdownOption[],
  groupBy: (option: DropdownOption) => string
): DropdownGroup[] => {
  const groups: Record<string, DropdownOption[]> = {};
  
  options.forEach(option => {
    const group = groupBy(option);
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(option);
  });
  
  return Object.entries(groups).map(([label, opts]) => ({
    label,
    options: opts,
  }));
};

/**
 * Filters dropdown options based on search query
 */
export const filterDropdownOptions = (
  options: DropdownOption[],
  query: string,
  searchKeys: (keyof DropdownOption)[] = ['label']
): DropdownOption[] => {
  if (!query) return options;
  
  const lowerQuery = query.toLowerCase();
  return options.filter(option => 
    searchKeys.some(key => {
      const value = option[key];
      return value && String(value).toLowerCase().includes(lowerQuery);
    })
  );
};

/**
 * Sorts dropdown options alphabetically
 */
export const sortDropdownOptions = (
  options: DropdownOption[],
  direction: 'asc' | 'desc' = 'asc'
): DropdownOption[] => {
  return [...options].sort((a, b) => {
    const comparison = a.label.localeCompare(b.label);
    return direction === 'asc' ? comparison : -comparison;
  });
};

// =====================================================
// Default Export
// =====================================================

export default Dropdown;

export type { DropdownOption, DropdownGroup };
