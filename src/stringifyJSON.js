// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // Starting simple, beginning with only stringifying primitives.
  var objectType = typeof obj;
  if (objectType === 'object') {
    if (obj === null) {
      objectType = 'null';
    } else if (Array.isArray(obj)) {
      objectType = 'array';
    } else {
      objectType = 'object';
    }
  }
  switch (objectType) {
    case 'number':
    case 'boolean':
      return obj.toString();
      break;
    case 'string':
      return '"' + obj + '"';
      break;
    case 'undefined':
      return undefined;
      break;
    case 'null':
      return 'null';
      break;
    case 'array':
      var nestedString = '';
      // here will be the recursive operations for arrays.
      return '[' + nestedString + ']';
      break;
    case 'object':
      var nestedString = '';
      // here lie recursive operations.
      return '{' + nestedString + '}';
      break;
  }
};
