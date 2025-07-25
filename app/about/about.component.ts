import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutmsg: string = 'about page';
  @Output() sendcontact =  new EventEmitter<string>();

 senddata() {
  this.sendcontact.emit(this.aboutmsg);
 }
}
