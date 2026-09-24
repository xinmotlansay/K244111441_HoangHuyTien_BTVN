import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerGroup } from './customer';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomerGroups(): Observable<CustomerGroup[]> {
    return this.http.get<CustomerGroup[]>('assets/data/customers.json');
  }
}
