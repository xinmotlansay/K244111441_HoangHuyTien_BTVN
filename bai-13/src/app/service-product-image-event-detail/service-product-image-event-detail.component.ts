import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-service-product-image-event-detail',
  standalone: false,
  templateUrl: './service-product-image-event-detail.component.html',
  styleUrls: ['./service-product-image-event-detail.component.css']
})
export class ServiceProductImageEventDetailComponent {
  selectedProduct: any;

  constructor(private activateRoute: ActivatedRoute, private _fs: ProductService,
    private router: Router, private cdr: ChangeDetectorRef) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.selectedProduct = _fs.getProductDetail(id);
        this.cdr.markForCheck();
      }
    });
  }

  goBack() {
    this.router.navigate(['service-product-image-event']);
  }
}
