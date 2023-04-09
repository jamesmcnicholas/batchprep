import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  constructor(private http: HttpClient) {}

  addIngredient(formData: FormData) {
    return this.http.post('http://backend_server:3000/api/ingredients', formData);
  }
}