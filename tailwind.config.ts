import type { Config } from 'tailwindcss';

const config: {
  plugins: any[];
  theme: { extend: any };
  content: string[]
} | Config = {
  content: [
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'default': 'var(--default-text-color)',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'Arial'],
      },
    },
  },
  plugins: [],
};
export default config;
