import { Component } from '@angular/core';

import { groupBy } from 'lodash';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'modules-demo-nx-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
})
export class BComponent {
  users: Record<string, User[]>;
  ages: string[];

  constructor() {
    const userArray = [
      { name: 'fred', age: 48 },
      { name: 'barney', age: 34 },
      { name: 'joe', age: 48 },
      { name: 'bob', age: 36 },
    ];
    this.users = groupBy(userArray, 'age');
    this.ages = Object.keys(this.users);
  }
}
