import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Pageable } from '../util/pageable';
import { VehicleModel } from '../model/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  apiUrl = environment.host;

  resource = 'vehicle';

  constructor(private http: HttpClient) { }

  findAll(pageable: Pageable, filter?: string) {
    let params = new HttpParams();

    if (pageable && filter) {
      params = params
        .append('filter', filter)
        .append('page', pageable.page.toString())
        .append('size', pageable.size.toString());
    } else if (pageable) {
      params = params
        .append('page', pageable.page.toString())
        .append('size', pageable.size.toString());
    }

    return this.http.get(`${this.apiUrl}/${this.resource}`, { params: params });
  }

  getVehicleById(id: string) {
    return this.http.get(`${this.apiUrl}/${this.resource}/${id}`);
  }

  saveVehicle(vehicle: VehicleModel) {
    return this.http.post(`${this.apiUrl}/${this.resource}`, vehicle);
  }

  updateVehicle(vehicle: VehicleModel) {
    return this.http.patch(`${this.apiUrl}/${this.resource}/${vehicle.id}`, vehicle);
  }

  deleteVehicle(id: string) {
    return this.http.delete(`${this.apiUrl}/${this.resource}/${id}`);
  }
}
