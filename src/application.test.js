const application = require('./application');
const features = require('./verticals/features');
const TestAdapter = require('./primary-ports/test-adapter');

const adapter = TestAdapter();

const app = application(adapter.register);
app.register(features);
app.start();

test('application sums', () => {
  const result = adapter.send('sum', '1,2');
  expect(result).toBe(3);
});

test('application multiplies', () => {
  const result = adapter.send('mul', '2,3');
  expect(result).toBe(6);
});

const TestAdapter = () => {
  return {
    callback: null,
    register: callback => {
      this.callback = callback;
    },
    send: (action, numbers) => this.callback(action, numbers)
  };
};
