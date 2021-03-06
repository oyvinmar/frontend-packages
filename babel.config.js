module.exports = {
  presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
  plugins: ['emotion', 'polished'],
  env: {
    test: {
      presets: [
        [
          'env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
    commonjs: {
      plugins: [['transform-es2015-modules-commonjs']],
    },
    unittest: {
      plugins: [['transform-es2015-modules-commonjs']],
    },
  },
};
