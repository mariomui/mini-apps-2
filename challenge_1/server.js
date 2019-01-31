const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');
const path = require('path');

const options = {
  static: path.resolve(__dirname, './dist/'),
};
console.log(path.resolve(__dirname, './dist/'));

const middlewares = jsonServer.defaults(options);

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
