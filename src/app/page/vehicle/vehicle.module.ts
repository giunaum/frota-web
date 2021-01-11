import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatTableModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { VehicleEditComponent } from "./vehicle-edit/vehicle-edit.component";
import { VehicleListComponent } from "./vehicle-list/vehicle-list.component";
import { vehicleRoutes } from "./vehicle.routing";

@NgModule({
    declarations: [
        VehicleListComponent,
        VehicleEditComponent
    ],
    imports: [
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        RouterModule.forChild(vehicleRoutes)
    ]
})
export class VehicleModule { }