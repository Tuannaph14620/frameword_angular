import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  componentName: string = "ProductComponent";
  isStatus : boolean = false  

  productList: {id: number, name:string, price: number}[]= [
    {id:1, name: "Product A", price: 2000},
    {id:2, name: "Product B", price: 3000},
    {id:2, name: "Product C", price: 4000}
  ]
  constructor() { }

  ngOnInit(): void {
    
  }
  onHandleClick(){
    this.isStatus = !this.isStatus
  }

}
