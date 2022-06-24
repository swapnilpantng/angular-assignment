import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ProductListComponent } from './features/products/components/product-list/product-list.component';
import { ProductComponent } from './features/products/components/product/product.component';


const routes: Routes = [
  {
    path: "products",
    component: ProductListComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
