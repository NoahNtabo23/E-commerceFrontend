import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterLink,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  public cartitems:number=0
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.products().subscribe(res=>{
      this.cartitems = res.length;
    })
  }
}
