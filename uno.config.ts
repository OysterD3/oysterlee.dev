import { defineConfig, presetUno, presetIcons } from 'unocss';
import transformerCompileClass from '@unocss/transformer-compile-class';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  presets: [
    presetUno({
      dark: {
        dark: '[color-scheme="dark"]',
        light: '[color-scheme="light"]',
      },
    }),
    presetIcons(),
  ],
  shortcuts: {
    hoverable:
      'transition duration-150 ease-in-out opacity-50 group-hover:opacity-100 hover:opacity-100',
    'hoverable-invert':
      'transition duration-150 ease-in-out opacity-100 group-hover:opacity-50 hover:opacity-50',
  },
  transformers: [
    transformerCompileClass(),
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  preflights: [
    {
      getCSS: ({ theme }) => `
        html[color-scheme="dark"] body {
          background-color: ${theme.colors.slate[950]};
        }
        body {
          min-height: 100vh;
        }
      `,
    },
  ],
});
