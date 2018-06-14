import { NgModule } from '@angular/core';
import { FeatureModuleComponent } from './feature-module.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeatureModuleComponent],
  exports: [FeatureModuleComponent]
})
export class FeatureModuleModule { }
