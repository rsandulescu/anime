import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { 
    MatCardModule,
    MatDialogModule
} from '@angular/material';
import { AnimeDetailsComponent } from '../anime-details/anime-details.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule
  ],
  entryComponents: [
      AnimeDetailsComponent
  ]
})

export class MaterialModule {
}
