import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingList';
  newPicture:string="";
  empty=true;
  description:string="";

  

products = [{productPicture:"Iphone7-.png",productPrice:270,productDescription:"Iphone7"}, 
{productPicture:"Pink Trouser.jpg" ,productPrice:300,productDescription:"Pink demin trousers for woman"},
{productPicture:"Red Hills.png" ,productPrice:250,productDescription:"Red hills for woman"},
{productPicture:"White Bag.jpg" ,productPrice:300,productDescription:"White Hand bag for ladies"},
{productPicture:"Dress Off Sholder.jpg" ,productPrice:250,productDescription:"Red dress for Woman"},
{productPicture:"Floral Dress.jpg" ,productPrice:400,productDescription:"Green dress for Woman"}
];
NewProducts =[]
totalAmount: any = 0;
price: number;

new(product){
  this.NewProducts.push(product);
  this.totalAmounts(product.productPrice);
}
Delete(NewProducts){
let index=this.NewProducts.indexOf(NewProducts)
this.NewProducts.splice(index,1)
this.AmountSub(NewProducts.productPrice)
}

totalAmounts(price){
  this.totalAmount+= price
}
AmountSub(price){
  this.totalAmount=price
}
}
