import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../component/product-view/productmodel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public cartitemList:any=[]
  public productList=new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }


  getproduct(){
    return this.http.get<product[]>("https://ntabonoah-e-commerce.onrender.com/api/product")
  }

  getproductbyid(id: string) {
    return this.http.get("https://ntabonoah-e-commerce.onrender.com/api/product/" + id)
  }

  addtocart(data:product){
    this.cartitemList.push(data);
    this.productList.next(this.cartitemList);
    console.log(this.cartitemList)
  }

  products(){
    return this.productList.asObservable();
  }

  removecartitem(data:product){
    this.cartitemList.map((a:product,index:product)=>{
      if(data.id === a.id){
        this.cartitemList.splice(index,1)
      }
    })
    this.productList.next(this.cartitemList)
  }



}
