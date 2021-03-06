import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminAprendicesComponent } from '../admin-aprendices/admin-aprendices.component';

declare var AdminLTE: any;
@Component({
  selector: 'app-admin-editar-aprendices',
  templateUrl: './admin-editar-aprendices.component.html',
  styleUrls: ['./admin-editar-aprendices.component.css']
})
export class AdminEditarAprendicesComponent implements OnInit {
  @ViewChild(AdminAprendicesComponent) aprendiz: AdminAprendicesComponent;

  TipoDocumento: any;
  nombre: any;

  

  constructor() { }

  ngOnInit() {
    AdminLTE.init();

  }

}
