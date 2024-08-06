// src/app/modules/ngx-gp-autocomplete/ngx-gp-autocomplete.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGpAutocompleteDirective } from '@angular-magic/ngx-gp-autocomplete';

@NgModule({
  declarations: [NgxGpAutocompleteDirective],
  imports: [CommonModule],
  exports: [NgxGpAutocompleteDirective]
})
export class NgxGpAutocompleteModule { }
