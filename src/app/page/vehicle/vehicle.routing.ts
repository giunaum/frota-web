import { Routes } from "@angular/router";
import { VehicleEditComponent } from "./vehicle-edit/vehicle-edit.component";
import { VehicleListComponent } from "./vehicle-list/vehicle-list.component";

export const vehicleRoutes: Routes = [
    {
        path: '', component: VehicleListComponent
    },
    {
        path: 'form', component: VehicleEditComponent
    },
    {
        path: 'form/:id', component: VehicleEditComponent
    }
]