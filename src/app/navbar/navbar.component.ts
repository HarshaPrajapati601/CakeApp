import { Component ,HostBinding, Output,EventEmitter  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../common/animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations:[
    slideInAnimation
    // animation triggers go here
  ]
})
export class NavbarComponent {
  @HostBinding('@.disabled')
  public animationsDisabled = false;
  title = 'angular-portfolio';
  @Output() headerName = new EventEmitter<string>();
 constructor(){

 }
 emitPage(name){
  this.headerName.emit(name);
 }
 prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}


toggleAnimations() {
  this.animationsDisabled = !this.animationsDisabled;
}

   scrollWin(x, y){  
    window.scrollBy(x, y);
  }

}


