import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards:any=[
    {name:'Choclate Cake',path:'../../assets/images/moms-cake/CakeImg.jpg' },
    {name:'Choclate Cake',path:'../../assets/images/moms-cake/CakeImg-1.jpg'},
  
  ]
  constructor() { }

  ngOnInit(): void {
  }


}
