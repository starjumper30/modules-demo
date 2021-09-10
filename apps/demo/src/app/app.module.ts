import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'a',
  },
  {
    path: 'a',
    loadChildren: () =>
      import('@modules-demo-nx/demo-lib').then((m) => m.DemoLibModule),
  },
  {
    path: 'a-copy',
    loadChildren: () =>
      import('@modules-demo-nx/demo-lib-copy').then((m) => m.DemoLibCopyModule),
  },
  {
    path: 'b',
    loadChildren: () =>
      import('@modules-demo-nx/demo-lib2').then((m) => m.DemoLib2Module),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
