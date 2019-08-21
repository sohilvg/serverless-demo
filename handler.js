'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'v1.0! execution successfully!',
        // input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
module.exports.world = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'world execution successfully!',
        // input: event,
      },
      null,
      2
    ),
  };

};