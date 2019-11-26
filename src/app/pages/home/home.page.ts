import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../../componets/modal/modal.component';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  listUsers: any;
  userEdit: any;

  constructor(public modalController: ModalController, private apiService: ApiService) { }

  ngOnInit() {
    this.getUsers();
  }

  async modal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
    });
    modal.onDidDismiss();
    this.getUsers();
    return await modal.present();
  }

  async editModal(body: any) {
    const modal1 = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        edit: true,
        id: body.id,
        name: body.name,
        lastName: body.lastName,
        age: body.age,
        gender: body.gender,
        address: body.address,
        career: body.career,
      }
    });
    modal1.onDidDismiss();
    this.getUsers();
    return await modal1.present();
  }

  getUsers() {
    this.apiService.getUsers().subscribe(response => {
      console.log(response);
      this.listUsers = response;
    });
  }

  editUser(id: number) {
    this.apiService.getUser(id).subscribe(response => {
      console.log(response);
      this.editModal(response);
    });
  }

}
