module.exports = {
  mode: 'jit',
  purge: [
    "./node_modules/flowbite-react/**/*.js",
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {},
  variants: {},
  plugins: [
    require("flowbite/plugin"),
  ],
  darkMode: 'class',
}
