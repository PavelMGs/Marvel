const aliases = {};

const defaultParams = {
  page: { path: 'pages' },
  component: { path: 'components' },
  store: { path: 'store/data' },
  type: { path: 'ts' },
};

const map = {
  'main-layout': [
    ['component',  { rPath: '/layout'}]
  ],
  header: [
    ['component', { rPath: '/layout' }]
  ],
  home: [
    ['component', { rPath: '/pages' }]
  ], 
};

module.exports = {
  aliases,
  defaultParams,
  map,
};
