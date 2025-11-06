/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff', // indigo-50
          100: '#e0e7ff', // indigo-100
          200: '#c7d2fe', // indigo-200
          300: '#a5b4fc', // indigo-300
          400: '#818cf8', // indigo-400
          500: '#6366f1', // indigo-500
          600: '#4f46e5', // indigo-600
          700: '#4338ca', // indigo-700
          800: '#3730a3', // indigo-800
          900: '#312e81', // indigo-900
          950: '#1e1b4b', // indigo-950
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            fontSize: '1.125rem',
            lineHeight: '1.75',
            maxWidth: 'none',
            a: {
              color: theme('colors.primary.700'),
              textDecoration: 'underline',
              textDecorationThickness: '1px',
              textUnderlineOffset: '2px',
              transition: 'color 0.2s ease',
              '&:hover': {
                color: theme('colors.primary.500'),
              },
            },
            h2: {
              color: theme('colors.gray.900'),
              fontSize: '2rem',
              fontWeight: '700',
              marginTop: '3rem',
              marginBottom: '1.5rem',
              lineHeight: '1.3',
            },
            h3: {
              color: theme('colors.gray.900'),
              fontSize: '1.5rem',
              fontWeight: '600',
              marginTop: '2rem',
              marginBottom: '1rem',
              lineHeight: '1.4',
            },
            h4: {
              color: theme('colors.gray.900'),
              fontSize: '1.25rem',
              fontWeight: '600',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            p: {
              marginBottom: '1.5rem',
            },
            ul: {
              marginBottom: '1.5rem',
              paddingLeft: '1.5rem',
            },
            ol: {
              marginBottom: '1.5rem',
              paddingLeft: '1.5rem',
            },
            li: {
              marginBottom: '0.5rem',
            },
            'ul > li': {
              listStyleType: 'disc',
            },
            'ol > li': {
              listStyleType: 'decimal',
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              color: theme('colors.rose.700'),
              padding: '0.125rem 0.375rem',
              borderRadius: theme('borderRadius.DEFAULT'),
              fontSize: '0.9em',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.200'),
              padding: '1.5rem',
              borderRadius: theme('borderRadius.lg'),
              overflowX: 'auto',
              marginBottom: '1.5rem',
              lineHeight: '1.7',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              color: theme('colors.gray.200'),
              fontSize: '0.875rem',
            },
            blockquote: {
              borderLeftWidth: '4px',
              borderLeftColor: theme('colors.gray.200'),
              paddingLeft: '1.5rem',
              marginLeft: '0',
              marginBottom: '1.5rem',
              fontStyle: 'italic',
              color: theme('colors.gray.500'),
            },
            img: {
              maxWidth: '100%',
              height: 'auto',
              borderRadius: theme('borderRadius.lg'),
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            hr: {
              borderTopWidth: '1px',
              borderTopColor: theme('colors.gray.200'),
              marginTop: '3rem',
              marginBottom: '3rem',
            },
            strong: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            em: {
              fontStyle: 'italic',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.slate.300'),
            a: {
              color: theme('colors.sky.400'),
              '&:hover': {
                color: theme('colors.sky.300'),
              },
            },
            h2: {
              color: theme('colors.slate.100'),
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '2rem',
              lineHeight: '1.2',
            },
            h3: {
              color: theme('colors.slate.100'),
              fontSize: '1.75rem',
              fontWeight: '600',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h4: {
              color: theme('colors.slate.100'),
              fontSize: '1.25rem',
              fontWeight: '600',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            p: {
              fontSize: '1.125rem',
              lineHeight: '1.75',
              marginBottom: '1.5rem',
            },
            ul: {
              marginBottom: '1.5rem',
              paddingLeft: '2rem',
            },
            ol: {
              marginBottom: '1.5rem',
              paddingLeft: '2rem',
            },
            li: {
              fontSize: '1.125rem',
              lineHeight: '1.75',
              marginBottom: '0.75rem',
            },
            code: {
              backgroundColor: theme('colors.slate.900'),
              color: theme('colors.amber.400'),
              padding: '0.25rem 0.5rem',
              borderRadius: theme('borderRadius.DEFAULT'),
              fontSize: '0.9em',
            },
            pre: {
              backgroundColor: theme('colors.slate.900'),
              padding: '1.5rem',
              borderRadius: theme('borderRadius.lg'),
              overflowX: 'auto',
              marginBottom: '1.5rem',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              color: theme('colors.slate.200'),
              fontSize: '0.875rem',
            },
            blockquote: {
              borderLeftWidth: '4px',
              borderLeftColor: theme('colors.slate.600'),
              paddingLeft: '1.5rem',
              margin: '1.5rem 0',
              fontStyle: 'italic',
              color: theme('colors.slate.400'),
            },
            strong: {
              fontWeight: '600',
              color: theme('colors.slate.100'),
            },
            img: {
              maxWidth: '100%',
              height: 'auto',
              borderRadius: theme('borderRadius.lg'),
              margin: '1.5rem 0',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
