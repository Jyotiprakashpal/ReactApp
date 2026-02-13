// =====================================================
// Animation Types
// =====================================================

// Animation Timing Functions
export const Easing = {
  // Linear
  LINEAR: 'linear',
  
  // Standard easing
  EASE: 'ease',
  EASE_IN: 'ease-in',
  EASE_OUT: 'ease-out',
  EASE_IN_OUT: 'ease-in-out',
  
  // Cubic-bezier presets
  EASE_IN_QUAD: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  EASE_OUT_QUAD: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  EASE_IN_OUT_QUAD: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  
  EASE_IN_CUBIC: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  EASE_OUT_CUBIC: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  EASE_IN_OUT_CUBIC: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  
  EASE_IN_QUART: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
  EASE_OUT_QUART: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  EASE_IN_OUT_QUART: 'cubic-bezier(0.77, 0, 0.175, 1)',
  
  EASE_IN_QUINT: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  EASE_OUT_QUINT: 'cubic-bezier(0.23, 1, 0.32, 1)',
  EASE_IN_OUT_QUINT: 'cubic-bezier(0.86, 0, 0.07, 1)',
  
  EASE_IN_SINE: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
  EASE_OUT_SINE: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
  EASE_IN_OUT_SINE: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
  
  EASE_IN_EXPO: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
  EASE_OUT_EXPO: 'cubic-bezier(0.19, 1, 0.22, 1)',
  EASE_IN_OUT_EXPO: 'cubic-bezier(1, 0, 0, 1)',
  
  EASE_IN_CIRC: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
  EASE_OUT_CIRC: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  EASE_IN_OUT_CIRC: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  
  // Back easing (with overshoot)
  EASE_IN_BACK: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
  EASE_OUT_BACK: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  EASE_IN_OUT_BACK: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

// Animation Direction
export const AnimationDirection = {
  NORMAL: 'normal',
  REVERSE: 'reverse',
  ALTERNATE: 'alternate',
  ALTERNATE_REVERSE: 'alternate-reverse',
} as const;

// Animation Fill Mode
export const AnimationFillMode = {
  NONE: 'none',
  FORWARDS: 'forwards',
  BACKWARDS: 'backwards',
  BOTH: 'both',
} as const;

// Animation Play State
export const AnimationPlayState = {
  RUNNING: 'running',
  PAUSED: 'paused',
} as const;

// =====================================================
// Animation Duration Presets
// =====================================================

export const AnimationDuration = {
  INSTANT: '0ms',
  FASTEST: '100ms',
  FASTER: '150ms',
  FAST: '200ms',
  NORMAL: '300ms',
  SLOW: '400ms',
  SLOWER: '500ms',
  SLOWEST: '700ms',
  SLOWEST_1: '1000ms',
  SLOWEST_2: '1500ms',
  SLOWEST_3: '2000ms',
} as const;

// Numeric duration values (in ms)
export const AnimationDurationMs = {
  INSTANT: 0,
  FASTEST: 100,
  FASTER: 150,
  FAST: 200,
  NORMAL: 300,
  SLOW: 400,
  SLOWER: 500,
  SLOWEST: 700,
  SLOWEST_1: 1000,
  SLOWEST_2: 1500,
  SLOWEST_3: 2000,
} as const;

// =====================================================
// Animation Delay Presets
// =====================================================

export const AnimationDelay = {
  NONE: '0ms',
  FASTEST: '50ms',
  FASTER: '100ms',
  FAST: '150ms',
  NORMAL: '300ms',
  SLOW: '500ms',
  SLOWER: '700ms',
  SLOWEST: '1000ms',
} as const;

// =====================================================
// Animation Iteration
// =====================================================

export const AnimationIteration = {
  ONCE: 1,
  TWICE: 2,
  THREE_TIMES: 3,
  INFINITE: 'infinite',
} as const;

// =====================================================
// Pre-defined Keyframe Animations
// =====================================================

export const KeyframeAnimations = {
  // Fade animations
  FADE_IN: `
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,
  
  FADE_OUT: `
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `,
  
  FADE_IN_UP: `
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,
  
  FADE_IN_DOWN: `
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,
  
  FADE_IN_LEFT: `
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `,
  
  FADE_IN_RIGHT: `
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `,

  // Scale animations
  SCALE_IN: `
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  `,
  
  SCALE_OUT: `
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.9);
    }
  `,
  
  ZOOM_IN: `
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  `,
  
  ZOOM_OUT: `
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.5);
    }
  `,

  // Slide animations
  SLIDE_IN_UP: `
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  `,
  
  SLIDE_IN_DOWN: `
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  `,
  
  SLIDE_IN_LEFT: `
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  `,
  
  SLIDE_IN_RIGHT: `
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  `,

  // Bounce animations
  BOUNCE_IN: `
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  `,
  
  BOUNCE_OUT: `
    0% {
      transform: scale(1);
    }
    30% {
      transform: scale(0.95);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  `,

  // Shake animations
  SHAKE: `
    0%, 100% {
      transform: translateX(0);
    }
    10%, 30%, 50%, 70%, 90% {
      transform: translateX(-10px);
    }
    20%, 40%, 60%, 80% {
      transform: translateX(10px);
    }
  `,

  // Rotate animations
  ROTATE_IN: `
    from {
      opacity: 0;
      transform: rotate(-180deg);
    }
    to {
      opacity: 1;
      transform: rotate(0deg);
    }
  `,
  
  ROTATE_OUT: `
    from {
      opacity: 1;
      transform: rotate(0deg);
    }
    to {
      opacity: 0;
      transform: rotate(180deg);
    }
  `,

  // Flip animations
  FLIP_IN: `
    from {
      opacity: 0;
      transform: perspective(400px) rotateY(90deg);
    }
    to {
      opacity: 1;
      transform: perspective(400px) rotateY(0deg);
    }
  `,
  
  FLIP_OUT: `
    from {
      opacity: 1;
      transform: perspective(400px) rotateY(0deg);
    }
    to {
      opacity: 0;
      transform: perspective(400px) rotateY(90deg);
    }
  `,

  // Pulse animation
  PULSE: `
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  `,

  // Spin animation
  SPIN: `
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `,

  // Ping animation
  PING: `
    0% {
      transform: scale(1);
      opacity: 1;
    }
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  `,
} as const;

// =====================================================
// Pre-defined Animation Configurations
// =====================================================

export interface AnimationConfig {
  name: string;
  duration: string;
  timingFunction: string;
  delay: string;
  iterationCount: number | string;
  direction: string;
  fillMode: string;
  playState: string;
}

export const AnimationConfig = {
  // Fade animations
  FADE_IN: {
    name: 'fadeIn',
    duration: AnimationDuration.NORMAL,
    timingFunction: Easing.EASE_OUT,
    delay: AnimationDelay.NONE,
    iterationCount: AnimationIteration.ONCE,
    direction: AnimationDirection.NORMAL,
    fillMode: AnimationFillMode.FORWARDS,
    playState: AnimationPlayState.RUNNING,
  } as AnimationConfig,

  FADE_IN_UP: {
    name: 'fadeInUp',
    duration: AnimationDuration.NORMAL,
    timingFunction: Easing.EASE_OUT,
    delay: AnimationDelay.NONE,
    iterationCount: AnimationIteration.ONCE,
    direction: AnimationDirection.NORMAL,
    fillMode: AnimationFillMode.FORWARDS,
    playState: AnimationPlayState.RUNNING,
  } as AnimationConfig,

  FADE_OUT: {
    name: 'fadeOut',
    duration: AnimationDuration.NORMAL,
    timingFunction: Easing.EASE_IN,
    delay: AnimationDelay.NONE,
    iterationCount: AnimationIteration.ONCE,
    direction: AnimationDirection.NORMAL,
    fillMode: AnimationFillMode.FORWARDS,
    playState: AnimationPlayState.RUNNING,
  } as AnimationConfig,

  // Scale animations
  SCALE_IN: {
    name: 'scaleIn',
    duration: AnimationDuration.NORMAL,
    timingFunction: Easing.EASE_OUT_BACK,
    delay: AnimationDelay.NONE,
    iterationCount: AnimationIteration.ONCE,
    direction: AnimationDirection.NORMAL,
    fillMode: AnimationFillMode.FORWARDS,
    playState: AnimationPlayState.RUNNING,
  } as AnimationConfig,

  // Slide animations
  SLIDE_IN_UP: {
    name: 'slideInUp',
    duration: AnimationDuration.NORMAL,
    timingFunction: Easing.EASE_OUT,
    delay: AnimationDelay.NONE,
    iterationCount: AnimationIteration.ONCE,
    direction: AnimationDirection.NORMAL,
    fillMode: AnimationFillMode.FORWARDS,
    playState: AnimationPlayState.RUNNING,
  } as AnimationConfig,

  // Bounce animations
  BOUNCE_IN: {
    name: 'bounceIn',
    duration: AnimationDuration.SLOW,
    timingFunction: Easing.EASE_OUT,
    delay: AnimationDelay.NONE,
    iterationCount: AnimationIteration.ONCE,
    direction: AnimationDirection.NORMAL,
    fillMode: AnimationFillMode.FORWARDS,
    playState: AnimationPlayState.RUNNING,
  } as AnimationConfig,

  // Shake animation
  SHAKE: {
    name: 'shake',
    duration: AnimationDuration.NORMAL,
    timingFunction: Easing.EASE_IN_OUT,
    delay: AnimationDelay.NONE,
    iterationCount: AnimationIteration.ONCE,
    direction: AnimationDirection.NORMAL,
    fillMode: AnimationFillMode.FORWARDS,
    playState: AnimationPlayState.RUNNING,
  } as AnimationConfig,

  // Rotate animation
  ROTATE_IN: {
    name: 'rotateIn',
    duration: AnimationDuration.NORMAL,
    timingFunction: Easing.EASE_OUT,
    delay: AnimationDelay.NONE,
    iterationCount: AnimationIteration.ONCE,
    direction: AnimationDirection.NORMAL,
    fillMode: AnimationFillMode.FORWARDS,
    playState: AnimationPlayState.RUNNING,
  } as AnimationConfig,

  // Pulse animation
  PULSE: {
    name: 'pulse',
    duration: AnimationDuration.SLOWER,
    timingFunction: Easing.EASE_IN_OUT,
    delay: AnimationDelay.NONE,
    iterationCount: AnimationIteration.INFINITE,
    direction: AnimationDirection.ALTERNATE,
    fillMode: AnimationFillMode.NONE,
    playState: AnimationPlayState.RUNNING,
  } as AnimationConfig,

  // Spin animation
  SPIN: {
    name: 'spin',
    duration: AnimationDuration.SLOWEST,
    timingFunction: Easing.LINEAR,
    delay: AnimationDelay.NONE,
    iterationCount: AnimationIteration.INFINITE,
    direction: AnimationDirection.NORMAL,
    fillMode: AnimationFillMode.NONE,
    playState: AnimationPlayState.RUNNING,
  } as AnimationConfig,
} as const;

// =====================================================
// Transition Presets
// =====================================================

export const Transitions = {
  // Simple transitions
  NONE: 'none',
  
  // Property-specific transitions
  ALL: 'all',
  ALL_EASE: 'all 0.3s ease',
  ALL_EASE_IN: 'all 0.3s ease-in',
  ALL_EASE_OUT: 'all 0.3s ease-out',
  ALL_EASE_IN_OUT: 'all 0.3s ease-in-out',
  
  // Color transitions
  COLOR: 'color 0.3s ease',
  COLOR_BACKGROUND: 'background-color 0.3s ease',
  BORDER_COLOR: 'border-color 0.3s ease',
  
  // Transform transitions
  TRANSFORM: 'transform 0.3s ease',
  TRANSFORM_EASE_OUT: 'transform 0.3s ease-out',
  TRANSFORM_EASE_IN_OUT: 'transform 0.3s ease-in-out',
  
  // Opacity transitions
  OPACITY: 'opacity 0.3s ease',
  
  // Box model transitions
  WIDTH: 'width 0.3s ease',
  HEIGHT: 'height 0.3s ease',
  PADDING: 'padding 0.3s ease',
  MARGIN: 'margin 0.3s ease',
  
  // Combined transitions
  BACKGROUND: 'background 0.3s ease',
  BACKGROUND_TRANSFORM: 'background, transform 0.3s ease',
  ALL_BOX_SHADOW: 'all 0.3s ease, box-shadow 0.3s ease',
  
  // Custom timing transitions
  TRANSFORM_CUBIC: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  COLOR_SLOW: 'color 0.5s ease',
  TRANSFORM_FAST: 'transform 0.15s ease',
} as const;

// =====================================================
// Helper Functions
// =====================================================

/**
 * Generates animation CSS string from AnimationConfig
 */
export const generateAnimationCSS = (config: AnimationConfig): string => {
  return `
    animation-name: ${config.name};
    animation-duration: ${config.duration};
    animation-timing-function: ${config.timingFunction};
    animation-delay: ${config.delay};
    animation-iteration-count: ${config.iterationCount};
    animation-direction: ${config.direction};
    animation-fill-mode: ${config.fillMode};
    animation-play-state: ${config.playState};
  `.trim();
};

/**
 * Generates transition CSS string
 */
export const generateTransitionCSS = (property: string, duration: string, timingFunction: string, delay: string = '0s'): string => {
  return `${property} ${duration} ${timingFunction} ${delay}`;
};

/**
 * Generates keyframes CSS with given name and keyframe content
 */
export const generateKeyframesCSS = (name: string, keyframes: string): string => {
  return `
    @keyframes ${name} {
      ${keyframes}
    }
  `.trim();
};

/**
 * Generates inline styles object for animation
 */
export const generateAnimationStyles = (config: AnimationConfig) => {
  return {
    animationName: config.name,
    animationDuration: config.duration,
    animationTimingFunction: config.timingFunction,
    animationDelay: config.delay,
    animationIterationCount: config.iterationCount,
    animationDirection: config.direction,
    animationFillMode: config.fillMode,
    animationPlayState: config.playState,
  };
};

/**
 * Generates inline styles object for transition
 */
export const generateTransitionStyles = (transition: string) => {
  return {
    transition: transition,
  };
};

// =====================================================
// Default Export
// =====================================================

export default {
  Easing,
  AnimationDirection,
  AnimationFillMode,
  AnimationPlayState,
  AnimationDuration,
  AnimationDurationMs,
  AnimationDelay,
  AnimationIteration,
  KeyframeAnimations,
  AnimationConfig,
  Transitions,
  generateAnimationCSS,
  generateTransitionCSS,
  generateKeyframesCSS,
  generateAnimationStyles,
  generateTransitionStyles,
};
