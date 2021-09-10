import { orderUsersByNameAndAge } from '@modules-demo-nx/util';

const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 34 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 36 },
];

console.log(orderUsersByNameAndAge(users));
