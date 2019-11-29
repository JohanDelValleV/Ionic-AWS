import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-career-modal',
  templateUrl: './career-modal.component.html',
  styleUrls: ['./career-modal.component.scss'],
})
export class CareerModalComponent implements OnInit {

  constructor(private navParams: NavParams, private modalCtrl: ModalController, private apiService: ApiService) { }
  @Input() name: string;
  @Input() slug: string;
  @Input() edit: boolean = false;

  ngOnInit() { }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  createCareer() {
    let form = new FormGroup({
      name: new FormControl(this.name, Validators.nullValidator),
      slug: new FormControl(this.slug, Validators.nullValidator),
    });
    this.apiService.createCareer(form.value).subscribe(response => {
      console.log(response);
      this.dismiss();
    });
  }

  updtaeCareer(id: number) {
    let form = new FormGroup({
      name: new FormControl(this.name, Validators.nullValidator),
      slug: new FormControl(this.slug, Validators.nullValidator),
    });
    this.apiService.editCareer(id, form.value).subscribe(response => {
      console.log(response);
      this.dismiss();
    });
  }

}
