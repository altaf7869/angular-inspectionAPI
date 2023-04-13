import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly inspectionAPIURL = "https://localhost:7062/api";

  constructor(private http:HttpClient) { }

  getInspectionList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIURL + '/inspections');
    console.log(this.getInspectionList(),'list')
  }

  addInseption(data:any){
    return this.http.post(this.inspectionAPIURL + '/inspections', data);
  }

  updateInseption(id:number | string, data:any){
    return this.http.put(this.inspectionAPIURL + `/inspections/${id}`, data);
  }

  deleteInseption(id:number | string){
    return this.http.delete(this.inspectionAPIURL + `/inspections/${id}`);
  }

  //Inseption Types
  getInspectionTypesList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIURL + '/inspectionTypes');
  }

  addInseptionTypes(data:any){
    return this.http.post(this.inspectionAPIURL + '/inspectionTypes', data);
  }

  updateInseptionTypes(id:number | string, data:any){
    return this.http.put(this.inspectionAPIURL + `/inspectionTypes/${id}`, data);
  }

  deleteInseptionTypes(id:number | string){
    return this.http.delete(this.inspectionAPIURL + `/inspectionTypes/${id}`);
  }

  // Statuses
  getStatusList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIURL + '/status');
  }

  addStatus(data:any){
    return this.http.post(this.inspectionAPIURL + '/status', data);
  }

  updateStatus(id:number | string, data:any){
    return this.http.put(this.inspectionAPIURL + `/status/${id}`, data);
  }

  deleteStatus(id:number | string){
    return this.http.delete(this.inspectionAPIURL + `/status/${id}`);
  }

}
