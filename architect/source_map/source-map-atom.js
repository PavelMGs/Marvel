const aliases = {};

const defaultParams = {
  page: { path: 'pages' },
  component: { path: 'components' },
  store: { path: 'store/data' },
  type: { path: 'ts' },
};

const map = {
  'main-layout': [
    ['component', { rPath: '/layout' }]
  ],
  header: [
    ['component', { rPath: '/layout' }]
  ],
  home: [
    ['component', { rPath: '/pages' }]
  ],
  characters: [
    'page',
    'component'
  ],
  card: [
    'component'
  ],
  filter: ['component']
};

module.exports = {
  aliases,
  defaultParams,
  map,
};
