import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdButtonModule
  ],
  exports: [
    MdToolbarModule,
    MdButtonModule
  ]
})
export class SharedModule {}
