import { Component } from '@angular/core';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-service-catalog',
  standalone: false,
  templateUrl: './service-catalog.component.html',
  styleUrl: './service-catalog.component.css',
})
export class ServiceCatalogComponent {
  categories: CatalogService['datas'];

  constructor(catalogService: CatalogService) {
    this.categories = catalogService.getCategories();
  }
}
