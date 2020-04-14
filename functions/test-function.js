exports.handler = function handler(event, context) {
  console.log('received');

  return {
    statusCode: 200,
    body: 'Hello, World',
  };
};
