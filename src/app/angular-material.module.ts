import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const materialModules = [
  MatTableModule
];

@NgModule({
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
    ...materialModules
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ...materialModules
  ],
})

export class AngularMaterialModule { }