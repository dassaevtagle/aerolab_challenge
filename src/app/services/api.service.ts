import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly options = {
    headers: {
      authorization: `Bearer ${environment.apiKey}`,
      'content-type': 'application/json',
      accept: 'application/json'
    }
  }
  private readonly baseUrl = environment.aerolabApiUrl

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/products`, this.options)
  }
}