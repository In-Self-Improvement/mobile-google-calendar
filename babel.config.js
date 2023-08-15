module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-web', {commonjs: true}],
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['.'],
        extensions: ['.js', '.ios.js', '.android.js', '.ts', '.tsx'],
        alias: {
          '~': './src',
          '@components': './src/components',
          '@elements': './src/elements',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
