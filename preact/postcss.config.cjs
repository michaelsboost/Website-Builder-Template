module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};

// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
//   },
// };