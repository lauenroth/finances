const nextRoutes = require('next-routes');

const routes = nextRoutes()
  .add('destinations')
  .add('inspirations')
  .add('project', '/project/:id/:modal?')
  .add('template', '/template/:id/:modal?');

module.exports = routes;
