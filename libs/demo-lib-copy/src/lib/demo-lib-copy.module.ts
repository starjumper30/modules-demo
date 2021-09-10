import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AComponent }]),
  ],
  declarations: [AComponent],
})
export class DemoLibCopyModule {}
