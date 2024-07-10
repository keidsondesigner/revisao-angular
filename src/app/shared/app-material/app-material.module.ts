import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatTableModule
  ],
})
export class AppMaterialModule { }
