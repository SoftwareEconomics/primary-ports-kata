const system = require('./system');
const routes = require('./routes');
const Adapter = require('./adapter/memory');

const adapter = Adapter();

const app = system(adapter.register);
app.register(routes);
app.start();

test('system sums', () => {
  const result = adapter.send('sum', '1,2');
  expect(result).toBe(3);
});

test('system multiplies', () => {
  const result = adapter.send('mul', '2,3');
  expect(result).toBe(6);
});