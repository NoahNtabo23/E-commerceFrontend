import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { HeaderComponent } from './component/header/header.component';

import { CartPageComponent } from './component/cart-page/cart-page.component';

export const routes: Routes = [
    {
        path:'home',title: 'Home Page',component: HomeComponent
    },
    {
        path:'cart',title: 'Cart Page',component: CartComponent
    },
    {
        path:'account',title: 'Account Page',component: AccountComponent
    },
    {
        path:'product-details',title: 'Product Details Page',component: ProductDetailsComponent
    },
    {
        path:'products',title: 'Products Page',component: ProductsComponent
    },
    {
        path:'',title: 'Product View Page',component: ProductViewComponent
    },
    {
        path:'product-detail/:productid',title: 'Product Detail Page',component: ProductDetailComponent
    },
    {
        path:'cart-page',title: 'Cart Page',component: CartPageComponent
    }
];
