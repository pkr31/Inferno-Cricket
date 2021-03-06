import { MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
//
// Form Controls
//
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatNativeDateModule } from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, LayoutModule, MatAutocompleteModule,
     MatDatepickerModule, MatFormFieldModule, MatInputModule, MatRadioModule,
    MatSelectModule, MatSliderModule, MatSlideToggleModule, MatNativeDateModule],
  exports: [MatButtonModule, MatCheckboxModule, LayoutModule, MatAutocompleteModule,
    MatDatepickerModule, MatFormFieldModule, MatInputModule, MatRadioModule,
    MatSelectModule, MatSliderModule, MatSlideToggleModule, MatNativeDateModule]
})

export class MaterialModule { }