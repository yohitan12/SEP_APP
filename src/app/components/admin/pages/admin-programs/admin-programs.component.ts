import { Component, OnInit } from '@angular/core';

declare var AdminLTE: any;

@Component({
  selector: 'app-admin-programs',
  templateUrl: './admin-programs.component.html',
  styleUrls: ['./admin-programs.component.css']
})
export class AdminProgramsComponent implements OnInit {
  listPrograma = [];

  constructor() { }

  ngOnInit() {
    AdminLTE.init();
  }

  updatePrograma(programa) {

  }

  estadoPrograma(programa) {

  }

}
