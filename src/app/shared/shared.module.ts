import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from './icons/icons.module';

export const modules = [
  CommonModule,
  IconsModule
]

export const declarations = []

@NgModule({
  declarations,
  imports: modules,
  exports: [...modules, ...declarations]
})
export class SharedModule { }
