const { override, fixBabelImports, addDecoratorsLegacy, addLessLoader, addWebpackAlias } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

const path = require('path');
// const paths = require('react-scripts/config/paths');
// paths.appBuild = path.join(path.dirname(paths.appBuild), 'hell-system-dist');

module.exports = override(
  addDecoratorsLegacy(),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src/'),
    '$views': path.resolve(__dirname, 'src/views/'),
    '$imgs': path.resolve(__dirname, 'src/assets/img/'),
    'react-dom': '@hot-loader/react-dom'
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars: { '@primary-color': '#25b864' }, // 修改antd theme
    localIdentName: '[path][name]-[local]',
  }),
  (config, env) => {
    config = rewireReactHotLoader(config, env);
    return config;
  }
);