import { Component } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { CustomerGroup } from '../customer';
import { CustomerService } from '../customer.service';

interface CustomerView {
  groups: CustomerGroup[];
  loading: boolean;
  error: string;
}

@Component({
  selector: 'app-customer-group',
  standalone: false,
  templateUrl: './customer-group.component.html',
  styleUrl: './customer-group.component.css',
})
export class CustomerGroupComponent {
  view$: Observable<CustomerView>;

  constructor(customerService: CustomerService) {
    this.view$ = customerService.getCustomerGroups().pipe(
      map(groups => ({ groups, loading: false, error: '' })),
      startWith({ groups: [], loading: true, error: '' }),
      catchError(() => of({
        groups: [], loading: false,
        error: 'Không tải được danh sách khách hàng. Vui lòng tải lại trang.',
      })),
    );
  }
}
