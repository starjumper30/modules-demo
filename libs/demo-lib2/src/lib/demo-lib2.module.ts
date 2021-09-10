import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BComponent } from './b/b.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BComponent }]),
  ],
  declarations: [BComponent],
})
export class DemoLib2Module {}
