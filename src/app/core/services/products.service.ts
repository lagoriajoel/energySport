import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../Entities/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiURL: string = 'https://api.escuelajs.co/api/v1/'
  constructor(private http: HttpClient) {   }

  public getProducts (): Observable<Product[]>{
     return this.http.get<Product[]>(this.apiURL +'products')
  }
}
