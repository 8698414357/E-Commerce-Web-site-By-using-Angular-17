import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { HeaderComponent } from './component/header/header.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderPageComponent } from './component/order-page/order-page.component';
import { BuyPageComponent } from './component/buy-page/buy-page.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent,
    ProductDetailComponent,
    HeaderComponent,
    CartPageComponent,
    OrderPageComponent,
    BuyPageComponent,
    DashboardComponent,
    LayoutComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
