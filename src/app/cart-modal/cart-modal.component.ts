import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';

export interface DialogData {
  items: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})

export class CartModalComponent implements OnInit {
  items=[];
  constructor(public dialog: MatDialog,private dataservice: DataService) { }
  
  checkOut(item){
    alert('Checked Out '+item);
  }
  
  checkOutAll(items){

    let sum = this.items.reduce((sum,item) => (sum + parseInt(item.price)),0);
    alert(`Checkout All cart items costs: ${sum}`);
  }

  removeItemInCart(id){
    this.items = this.dataservice.removeItemInCart(id);
  }

  close(){
      this.dialog.closeAll();
  }
  
  ngOnInit()
  {
    this.items = this.dataservice.getCartItems();
  }
}


