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
    {name:'Choclate ',path:'../../assets/images/moms-cake/CakeImg.jpg',amount:'Rs 280',description:'choclate decorated cake , Half kg' },
    {name:'Choclate ',path:'../../assets/images/moms-cake/CakeImg-1.jpg',amount:'Rs 280',description:'choclate cherry cake , Half kg' },
    {name:'Mix Cake',path:'../../assets/images/moms-cake/caked.jpg',amount:'Rs 300',description:'Marble cake ,Half kg' },
    {name:'Dryfruit Choclate',path:'../../assets/images/moms-cake/CakeImg-2.jpg',amount:'Rs 300',description:'choclate Dryfruit cake , Half kg' },
    {name:'Vanilla',path:'../../assets/images/moms-cake/cake-i.jpeg',amount:'Rs 270',description:'Vanilla cake ,Half kg' },
    {name:'Vanilla',path:'../../assets/images/moms-cake/cake-j.jpg',amount:'Rs 270',description:'Vanilla cake heart ,Half kg' },
    {name:'Dryfruit Choclate',path:'../../assets/images/moms-cake/CakeImg-3.jpg',amount:'Rs 300',description:'choclate Dryfruit cake , Half kg' }
  ]
  ChoclateType:any=[
    {name:'Choclate',path:'../../assets/images/moms-cake/CakeImg.jpg',amount:'Rs 280',description:'choclate decorated cake , Half kg' },
    {name:'Choclate',path:'../../assets/images/moms-cake/CakeImg-1.jpg',amount:'Rs 280',description:'choclate cherry cake , Half kg' },
    {name:'Choclate',path:'../../assets/images/moms-cake/cakea.jpg',amount:'Rs 270',description:'choclate plain cake , Half kg' },
    {name:'Dryfruit Choclate',path:'../../assets/images/moms-cake/CakeImg-2.jpg',amount:'Rs 300',description:'choclate Dryfruit cake , Half kg' },
    {name:'Dryfruit Choclate',path:'../../assets/images/moms-cake/CakeImg-3.jpg',amount:'Rs 300',description:'choclate Dryfruit cake , Half kg' }

  ]
  MarbleType:any=[
    {name:'Mix',path:'../../assets/images/moms-cake/caked.jpg',amount:'Rs 300',description:'Marble cake ,Half kg' },

  ]
  VanillaType:any=[
    {name:'Vanilla',path:'../../assets/images/moms-cake/cake-i.jpeg',amount:'Rs 270',description:'Vanilla cake ,Half kg' },
    {name:'Vanilla',path:'../../assets/images/moms-cake/cake-j.jpg',amount:'Rs 270',description:'Vanilla cake heart ,Half kg' }

  ]
  cakeEmitter(cakeType){
  this.typeOfCake = cakeType;
  
  }

}
