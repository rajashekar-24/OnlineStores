import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartModalComponent } from '../cart-modal/cart-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit, AfterContentInit {

  items = [];
  itemsCopy = [];
  sizes = [{ type: 'XS', isActive: false }, { type: 'S', isActive: false }, { type: 'M', isActive: false }, { type: 'ML', isActive: false }, { type: 'L', isActive: false }, { type: 'XL', isActive: false }, { type: 'XXL', isActive: false }];
  pricesCategory = ['Lowest to highest', 'Hightest to lowest'];
  selectedSizes = [];
  orderBy;
  count;
  constructor(private dataService: DataService,public dialog: MatDialog) { }

  openDialog(){
    this.dialog.open(CartModalComponent, {
      width:'70%',
      height:'80%',
    });
  }


  filterBySizes() {
    this.selectedSizes = this.sizes.filter(item => item.isActive == true).map(item => item.type);                    
    this.items = this.itemsCopy.filter(item => this.selectedSizes.indexOf(item.size) >= 0 );
    this.items.length ? this.items : this.refreshlist();//Filters removed then reloading the list of items 
    this.OrderByPrices(this.orderBy);/*filter based on sizes as well as orderby filter*/
  }

  OrderByPrices(value) {
    this.orderBy = value;
    if(value == 'Lowest to highest')
      this.items=this.items.sort((a,b) => a.price-b.price);
    else if(value == 'Hightest to lowest'){
      this.items=this.items.sort((a,b) => b.price-a.price);
    }
  }

  addToCart(item) {
    console.log(item);
    this.dataService.addToCart(item);
    this.count = this.dataService.cart.length;
  }

  refreshlist() {
    this.items = this.dataService.getItems();
  }

  ngOnInit() {

    this.items = this.dataService.getItems();
    this.itemsCopy = [...this.items];
  }

  ngAfterContentInit(){

    this.dataService.subObservable.subscribe(data =>{
      this.count = data; //cart items count
    })
  }



}
