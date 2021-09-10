import { Component } from '@angular/core';

import { orderUsersByNameAndAge } from '@modules-demo-nx/util-ng';

@Component({
  selector: 'modules-demo-nx-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
})
export class AComponent {
  // using the example from the lodash documentation for orderBy
  users = [
    { user: 'fred', age: 48 },
    { user: 'barney', age: 34 },
    { user: 'fred', age: 40 },
    { user: 'barney', age: 36 },
  ];

  constructor() {
    this.users = orderUsersByNameAndAge(this.users);
  }
}
