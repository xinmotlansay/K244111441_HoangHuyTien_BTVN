import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'service-product-image-event', pathMatch: 'full' },
  { path: 'service-product-image-event', pathMatch: 'full', children: [] },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetailComponent },
  { path: '**', redirectTo: 'service-product-image-event' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
