// import default from an ES Module
import orderBy from 'lodash-es/orderBy';

export function orderUsersByNameAndAge(users: { user: string; age: number }[]) {
  return orderBy(users, ['user', 'age']);
}
