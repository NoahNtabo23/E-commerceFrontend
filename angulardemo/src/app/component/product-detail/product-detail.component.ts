import { Component,OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterLink,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'
import { ApiService } from '../../shared/api.service';
import { product } from '../product-view/productmodel';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  productdata:any|product
  showadd:boolean=true;
  showremove:boolean=false;
  constructor(private api:ApiService,private activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    let productid=this.activatedroute.snapshot.paramMap.get('productid');
    // console.log("product id is",productid);
    productid && this.api.getproductbyid(productid).subscribe((res)=>{
      this.productdata=res;
      console.log(res)
    })
  }

  addtocart(productdata:product){
    this.showadd=false;
    this.showremove=true;
    this.api.addtocart(productdata)
  }


removeitem(productdata:product){
  this.showadd=true;
  this.showremove=false;
  this.api.removecartitem(productdata)
}

}
