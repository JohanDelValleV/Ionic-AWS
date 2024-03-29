import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  listCareers: any = [];
  constructor(private modalCtrl: ModalController, private apiService: ApiService) { }
  @Input() id: number;
  @Input() name: string;
  @Input() lastName: string;
  @Input() age: number;
  @Input() gender: string;
  @Input() address: string;
  @Input() career: string;
  @Input() edit: boolean = false;
  @Input() _career: string;
  @Input() _slug: string;


  ngOnInit() {
    this.getCareers();
  }


  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  createUser() {
    let form = new FormGroup({
      name: new FormControl(this.name, Validators.nullValidator),
      lastName: new FormControl(this.lastName, Validators.nullValidator),
      age: new FormControl(this.age, Validators.nullValidator),
      gender: new FormControl(this.gender, Validators.nullValidator),
      address: new FormControl(this.address, Validators.nullValidator),
      career: new FormControl(this.career, Validators.nullValidator),
    });
    this.apiService.createUser(form.value).subscribe(response => {
      this.dismiss();
    });
  }

  updtaeUser(id: number) {
    let form = new FormGroup({
      name: new FormControl(this.name, Validators.nullValidator),
      lastName: new FormControl(this.lastName, Validators.nullValidator),
      age: new FormControl(this.age, Validators.nullValidator),
      gender: new FormControl(this.gender, Validators.nullValidator),
      address: new FormControl(this.address, Validators.nullValidator),
      career: new FormControl(this.career, Validators.nullValidator),
    });
    this.apiService.editUser(id, form.value).subscribe(response => {
      this.dismiss();
    });
  }

  getCareers() {
    this.apiService.getCareers().subscribe((response) => {
      this.listCareers = response;
    });
  }


}
