import { NgModule,Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { OrderPageComponent } from './component/order-page/order-page.component';
import { BuyPageComponent } from './component/buy-page/buy-page.component';
import { LoginComponent } from './pages/login/login.component';




const routes: Routes = [
  
  {path:'product-view',component:ProductViewComponent},
  {path:'product-detail/:productid',component:ProductDetailComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'order-page',component:OrderPageComponent},
  {path:'buy-page',component:BuyPageComponent},
  {
    path:'',
    redirectTo : 'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    component: ProductViewComponent,
    
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }
