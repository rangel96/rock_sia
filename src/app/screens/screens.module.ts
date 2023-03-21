import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreensComponent } from './screens.component';
import { LineasComponent } from './lineas/lineas.component';
import { ScreenRoutingModule } from './screen-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ScreensComponent,
    LineasComponent
  ],
  imports: [
    CommonModule,
    ScreenRoutingModule,
    SharedModule
  ]
})
export class ScreensModule { }
