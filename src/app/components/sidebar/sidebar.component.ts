import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
  })
export class SidebarComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

    ngOnInit(): void {
    }

    openVehicleManagement() {
      this.router.navigate(['/vehicle']);
    }
}