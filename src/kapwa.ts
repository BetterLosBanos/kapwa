import plugin, { type PluginCreator } from 'tailwindcss/plugin';

/**
 * Kapwa Typography Plugin
 *
 * Enables responsive variants for all Kapwa typography utilities.
 * Matches the complete Kapwa design system typography tokens.
 *
 * Usage examples:
 * - Headings: md:kapwa-heading-lg, lg:kapwa-heading-xl
 * - Body: md:kapwa-body-lg-default, lg:kapwa-body-xl-strong
 * - Labels: md:kapwa-label-md, lg:kapwa-label-lg
 * - Links: md:kapwa-link-md, lg:kapwa-link-lg
 * - Code: md:kapwa-code-md, lg:kapwa-code-lg
 */
export const kapwaPlugin: PluginCreator = plugin(function ({ addUtilities }) {
  const kapwaTypography = {
    // HEADINGS
    '.kapwa-heading-xl': {
      fontSize: '2.5rem', // 40px
      fontWeight: '700',
      lineHeight: '1.4', // 140%
    },
    '.kapwa-heading-lg': {
      fontSize: '2rem', // 32px
      fontWeight: '700',
      lineHeight: '1.4',
    },
    '.kapwa-heading-md': {
      fontSize: '1.5rem', // 24px
      fontWeight: '700',
      lineHeight: '1.4',
    },
    '.kapwa-heading-sm': {
      fontSize: '1.25rem', // 20px
      fontWeight: '700',
      lineHeight: '1.4',
    },

    // BODY TEXT - Default (400 weight)
    '.kapwa-body-xl-default': {
      fontSize: '1.25rem', // 20px
      fontWeight: '400',
      lineHeight: '1.4',
    },
    '.kapwa-body-lg-default': {
      fontSize: '1.125rem', // 18px
      fontWeight: '400',
      lineHeight: '1.4',
    },
    '.kapwa-body-md-default': {
      fontSize: '1rem', // 16px
      fontWeight: '400',
      lineHeight: '1.4',
    },
    '.kapwa-body-sm-default': {
      fontSize: '0.875rem', // 14px
      fontWeight: '400',
      lineHeight: '1.4',
    },
    '.kapwa-body-xs-default': {
      fontSize: '0.75rem', // 12px
      fontWeight: '400',
      lineHeight: '1.4',
    },

    // BODY TEXT - Strong (700 weight)
    '.kapwa-body-xl-strong': {
      fontSize: '1.25rem', // 20px
      fontWeight: '700',
      lineHeight: '1.4',
    },
    '.kapwa-body-lg-strong': {
      fontSize: '1.125rem', // 18px
      fontWeight: '700',
      lineHeight: '1.4',
    },
    '.kapwa-body-md-strong': {
      fontSize: '1rem', // 16px
      fontWeight: '700',
      lineHeight: '1.4',
    },
    '.kapwa-body-sm-strong': {
      fontSize: '0.875rem', // 14px
      fontWeight: '700',
      lineHeight: '1.4',
    },
    '.kapwa-body-xs-strong': {
      fontSize: '0.75rem', // 12px
      fontWeight: '700',
      lineHeight: '1.4',
    },

    // LABELS (120% line-height, 700 weight)
    '.kapwa-label-lg': {
      fontSize: '1.125rem', // 18px
      fontWeight: '700',
      lineHeight: '1.2', // 120%
    },
    '.kapwa-label-md': {
      fontSize: '1rem', // 16px
      fontWeight: '700',
      lineHeight: '1.2',
    },
    '.kapwa-label-sm': {
      fontSize: '0.875rem', // 14px
      fontWeight: '700',
      lineHeight: '1.2',
    },
    '.kapwa-label-xs': {
      fontSize: '0.75rem', // 12px
      fontWeight: '700',
      lineHeight: '1.2',
    },

    // LINKS (underlined)
    '.kapwa-link-lg': {
      fontSize: '1.125rem', // 18px
      fontWeight: '400',
      lineHeight: '1.4',
      textDecoration: 'underline',
    },
    '.kapwa-link-md': {
      fontSize: '1rem', // 16px
      fontWeight: '400',
      lineHeight: '1.4',
      textDecoration: 'underline',
    },
    '.kapwa-link-sm': {
      fontSize: '0.875rem', // 14px
      fontWeight: '400',
      lineHeight: '1.4',
      textDecoration: 'underline',
    },

    // CODE TEXT (monospace font)
    '.kapwa-code-lg': {
      fontSize: '1.125rem', // 18px
      fontWeight: '400',
      lineHeight: '1.4',
      fontFamily: 'var(--font-mono)',
    },
    '.kapwa-code-md': {
      fontSize: '1rem', // 16px
      fontWeight: '400',
      lineHeight: '1.4',
      fontFamily: 'var(--font-mono)',
    },
    '.kapwa-code-sm': {
      fontSize: '0.875rem', // 14px
      fontWeight: '400',
      lineHeight: '1.4',
      fontFamily: 'var(--font-mono)',
    },

    // INPUT TEXT
    '.kapwa-input': {
      fontSize: '1rem', // 16px
      fontWeight: '400',
      lineHeight: '1.5rem', // 24px (different from body!)
    },
  };

  // Register all typography utilities with responsive variants
  addUtilities(kapwaTypography, ['responsive']);
});

export default kapwaPlugin;
