import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CatalogFilterInterface, CatalogFilterJson } from '../../shared/type/catalogFilter.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);
  constructor() { }

  public getCatalogFilterParametr():Observable<CatalogFilterInterface[]>{
   return  this.http.get<CatalogFilterJson>('json/catalog-filter.json')
    .pipe(map((res:CatalogFilterJson)=>{
      return res.katalogFilter}))
  }
}
