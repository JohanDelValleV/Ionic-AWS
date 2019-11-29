import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ModalComponent } from '../componets/modal/modal.component';
import { CareerModalComponent } from '../componets/career-modal/career-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalComponent, CareerModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    ModalComponent, CareerModalComponent
  ],
  entryComponents: [
    ModalComponent, CareerModalComponent
  ]
})
export class ComponetsModule { }
