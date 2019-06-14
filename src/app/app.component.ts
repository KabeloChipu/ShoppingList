import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingList';
  

products = [{productPicture:"Iphone7-.png",productPrice:270,productDescription:"Iphone7"}, 
{productPicture:"Pink Trouser.jpg" ,productPrice:300,productDescription:"Pink demin trousers for woman"},
{productPicture:"Red Hills.png" ,productPrice:250,productDescription:"Red hills for woman"},
{productPicture:"White Bag.jpg" ,productPrice:300,productDescription:"White Hand bag for ladies"},
{productPicture:"Dress Off Sholder.jpg" ,productPrice:250,productDescription:"Red dress for Woman"},
{productPicture:"Floral Dress.jpg" ,productPrice:400,productDescription:"Green dress for Woman"}
];
NewProducts =[]
new(product){
  this.NewProducts.push(product);
}
}
