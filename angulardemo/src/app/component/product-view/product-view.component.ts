import { Component ,OnInit} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'
import { ApiService } from '../../shared/api.service';
import { product } from './productmodel';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit {
  data:any|product[]
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.displayproducts()
  }

  displayproducts(){
    this.api.getproduct().subscribe(res=>{
      this.data=res;
      console.log(res)
    })
  }

addtocart(item:product){
  this.api.addtocart(item)
}

removeitem(item:product){
  this.api.removecartitem(item)
}




}
