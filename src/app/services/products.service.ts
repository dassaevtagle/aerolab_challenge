import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";
import { baseUrl, requestOptions } from "./config";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}/products`, requestOptions);
  }

  redeemProduct(productId: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${baseUrl}/redeem`,
      { productId },
      requestOptions
    );
  }
}
