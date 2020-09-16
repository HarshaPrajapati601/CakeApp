import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards:any=[
    {name:'Choclate Cake',path:'../../assets/images/moms-cake/CakeImg.jpg',amount:'Rs 100',description:'choclate cake' },
    {name:'Choclate Cake',path:'../../assets/images/moms-cake/CakeImg-1.jpg',amount:'Rs 100',description:'choclate cake' },
    {name:'Choclate Cake',path:'../../assets/images/moms-cake/CakeImg-2.jpg',amount:'Rs 100',description:'choclate cake' },
    {name:'Choclate Cake',path:'../../assets/images/moms-cake/CakeImg-3.jpg',amount:'Rs 100',description:'choclate cake' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
