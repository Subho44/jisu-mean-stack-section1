import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isvisible= true;
  courses = ['Angular','react','next','vue'];
  togglex(){
    this.isvisible = !this.isvisible;
  }


}
