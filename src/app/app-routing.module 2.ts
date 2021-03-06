import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CakeGalleryComponent } from './cake-gallery/cake-gallery.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

   {path:'cake',component:CakeGalleryComponent},
   {path:'home',component : HomeComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
