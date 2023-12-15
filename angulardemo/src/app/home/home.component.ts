import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  status: boolean = false;//Set the status to false unless otherwise

  menutoggle(): void {
    this.status = !this.status; // Toggle the status between true and false
  }

}
