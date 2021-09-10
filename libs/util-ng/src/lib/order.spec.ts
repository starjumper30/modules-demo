import { orderUsersByNameAndAge } from './order';

describe('order util', () => {
  it('should order users by age', () => {
    const users = [
      { user: 'abe', age: 48 },
      { user: 'bob', age: 34 },
      { user: 'abe', age: 40 },
      { user: 'bob', age: 36 },
    ];

    expect(orderUsersByNameAndAge(users)).toEqual([
      { user: 'abe', age: 40 },
      { user: 'abe', age: 48 },
      { user: 'bob', age: 34 },
      { user: 'bob', age: 36 },
    ]);
  });
});
