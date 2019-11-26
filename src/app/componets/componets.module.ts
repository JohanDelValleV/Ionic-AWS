import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ModalComponent } from '../componets/modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    ModalComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class ComponetsModule { }
