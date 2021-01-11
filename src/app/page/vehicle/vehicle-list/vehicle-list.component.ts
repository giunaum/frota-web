import { Component, AfterViewInit } from "@angular/core";
import { MatDialog, PageEvent } from "@angular/material";
import { DialogComponent } from "src/app/components/dialog/dialog.component";
import { VehicleService } from "src/app/service/vehicle.service";
import { Page } from "src/app/util/page";
import { Pageable } from "src/app/util/pageable";

@Component({
    selector: 'app-vehicle-list',
    templateUrl: './vehicle-list.component.html'
  })
export class VehicleListComponent implements AfterViewInit {

  filter: string;
  pageable: Pageable;
  page: Page = new Page();
  displayedColumns: string[] = ['plate', 'model', 'manufacturer', 'color', 'status', 'action'];

    constructor(
      public service: VehicleService,
      public dialog: MatDialog
    ) {}

    ngAfterViewInit(): void {
      this.loadVehicles();
    }

    loadVehicles(pageEvent?: PageEvent) {
      if (!this.pageable) {
        this.pageable = new Pageable(0, 5);
      }

      if (pageEvent) {
        this.pageable.size = pageEvent.pageSize || 5;
        this.pageable.page = pageEvent.pageIndex || 0;
      }

      this.service.findAll(this.pageable, this.filter).subscribe((page: Page) => this.page = page);
    }

    addVehicle() {
    }

    editVehicle(d: string) {
    }

    deleteVehicle(id: string) {
      const dialogRef = this.dialog.open(DialogComponent);
  
      dialogRef.afterClosed().subscribe(response => {
        if (response) {
          this.service.deleteVehicle(id).subscribe((msg: string) => {
            console.log(msg);
            this.loadVehicles();
          });
        }
      });
    }
}