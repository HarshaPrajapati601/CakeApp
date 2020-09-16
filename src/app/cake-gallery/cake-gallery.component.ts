import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake-gallery',
  templateUrl: './cake-gallery.component.html',
  styleUrls: ['./cake-gallery.component.css']
})
export class CakeGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showImages:boolean = false; 
  typeOfCake:string ='all';
  cakesDetails:any=[
    {name:'Choclate Cake',path:'../../assets/images/moms-cake/CakeImg.jpg',amount:'Rs 100',description:'choclate cake' },
    {name:'Choclate Cake',path:'../../assets/images/moms-cake/CakeImg-1.jpg',amount:'Rs 100',description:'choclate cake' },
    {name:'Choclate Cake',path:'../../assets/images/moms-cake/CakeImg-2.jpg',amount:'Rs 100',description:'choclate cake' },
    {name:'Choclate Cake',path:'../../assets/images/moms-cake/CakeImg-3.jpg',amount:'Rs 100',description:'choclate cake' }
  ]
  ChoclateType:any=[
    {name:'Choclate Cake',path:'../../assets/images/moms-cake/CakeImg.jpg',amount:'Rs 100',description:'choclate cake' },
    {name:'Choclate Cake',path:'../../assets/images/moms-cake/CakeImg-1.jpg',amount:'Rs 100',description:'choclate cake' },

  ]
  cakeEmitter(cakeType){
  this.typeOfCake = cakeType;
  
  }

}
