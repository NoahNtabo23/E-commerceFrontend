import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/api.service';
import { HeaderComponent } from './component/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { OrderPageComponent } from './component/order-page/order-page.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductViewComponent } from './component/product-view/product-view.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,HttpClientModule,HeaderComponent,ReactiveFormsModule,CartPageComponent,ProductDetailComponent,ProductViewComponent,OrderPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angulardemo';
}
