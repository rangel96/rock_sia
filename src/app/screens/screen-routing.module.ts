import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScreensComponent } from './screens.component';
import { LineasComponent } from './lineas/lineas.component';

const routes: Routes = [
  {
    path: '',
    component: ScreensComponent,
    children: [
      { path: 'lineas', component: LineasComponent },
      { path: '**', redirectTo: 'lineas' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenRoutingModule { }
