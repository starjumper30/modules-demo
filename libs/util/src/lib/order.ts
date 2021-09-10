// lodash library has "lodash.js" as its "main" entry in package.json
// lodash.js is one large IFFE containing the full lodash library (No Tree-shaking possible!)
// Has support for AMD and CommonJS as well as just loading as a global script
// This works just fine with Angular or Node and Jest
import { orderBy } from 'lodash';

// lodash library also includes CommonJS module files for each of its utility functions
// so that developer can include only the code they actually use.

// Standard Typescript syntax for importing CommonJS default exports, but can't be used when targeting ES Modules
// import orderBy = require('lodash/orderBy');

// Standard ES Module/Typescript syntax for importing default exports from ES Modules
// Must turn on allowSyntheticDefaultImports flag to make it work with a CommonJS module
// import orderBy from 'lodash/orderBy';

// Importing the CommonJS module allows Tree-shaking,
// BUT Angular Build gives a dire optimization warning!
// Jest Test won't run!

export function orderUsersByNameAndAge(users: { user: string; age: number }[]) {
  return orderBy(users, ['user', 'age']);
}
