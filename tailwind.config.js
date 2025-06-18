module.exports = {
  content: [
    './index.html',
    './index.js',
    './src/**/*.{js,jsx,ts,tsx}',
    './**/*.{js,jsx,ts,tsx}'
  ],
  safelist: [
    'bg-slate-900',
    'text-white',
    'text-blue-400',
    'bg-slate-800',
    'border-slate-700',
    'bg-transparent',
    'text-gray-300',
    'text-xl',
    'font-bold',
    'max-w-7xl',
    'px-4',
    'sm:px-6',
    'lg:px-8',
    'h-16',
    'space-x-8',
    'md:flex',
    'hover:text-blue-400',
    'md:hidden',
    'py-20',
    'bg-slate-800/50'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
