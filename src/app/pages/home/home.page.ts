import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../../componets/modal/modal.component';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { CareerModalComponent } from 'src/app/componets/career-modal/career-modal.component';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  listUsers: any = [];
  listCareers: any;
  userEdit: any;
  filter: string = '';
  searching: boolean = false;

  constructor(public modalController: ModalController, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('id_token') === null) {
      this.router.navigate(['/']);
    }
    this.getUsers();
    this.getCareers();
  }

  async careerModal() {
    const modal = await this.modalController.create({
      component: CareerModalComponent,
    });
    modal.dismiss();
    modal.onDidDismiss().then(() => {
      this.getCareers();
    });
    return await modal.present();
  }

  async modal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
    });
    modal.onDidDismiss().then(() => {
      this.getUsers();
    });
    return await modal.present();
  }

  async editModal(body: any) {
    const modal = await this.modalController.create({
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
        _career: body._career,
        _slug: body._slug,
      }
    });
    modal.onDidDismiss().then(() => {
      this.getUsers();
    });
    return await modal.present();
  }

  getUsers() {
    this.apiService.getUsers().subscribe(response => {
      this.listUsers = response;
    });
  }

  editUser(id: number) {
    this.apiService.getUser(id).subscribe(response => {
      this.editModal(response);
    });
  }

  deleteUser(id: number) {
    this.apiService.deleteUser(id).subscribe(response => {
      this.getUsers();
    });
  }

  logout() {
    this.apiService.logout();
    this.router.navigate(['/']);
  }

  async editCareerModal(body: any) {
    const modal = await this.modalController.create({
      component: CareerModalComponent,
      componentProps: {
        edit: true,
        id: body.id,
        name: body.name,
        slug: body.slug
      }
    });
    modal.onDidDismiss().then(() => {
      this.getCareers();
    });
    return await modal.present();
  }

  getCareers() {
    this.apiService.getCareers().subscribe(response => {
      this.listCareers = response;
    });
  }

  editCareer(id: number) {
    this.apiService.getCareer(id).subscribe(response => {
      this.editCareerModal(response);
    });
  }

  deleteCareer(id: number) {
    this.apiService.deleteCareer(id).subscribe(response => {
    });
    this.getCareers();
  }

  filterData(event) {
    this.filter = event.detail.value;
  }

}
