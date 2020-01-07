import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cart = [];
  constructor() { }

  private subject = new BehaviorSubject(0);
  subObservable = this.subject.asObservable();


  items = [
   { "id":1,"name": "Block Men Round Neck Red T-Shirt", "size": "S", "price":"300", "image":"https://rukminim1.flixcart.com/image/800/960/k05ljm80/t-shirt/e/c/u/xxl-ddd-0041-eg-original-imafdnjjrdpeebec.jpeg?q=50" },
   { "id":2,"name": "Round Neck Brown T-Shirt", "size": "M", "price":"400", "image":"https://rukminim1.flixcart.com/image/800/960/jrz8u4w0/t-shirt/n/w/z/xl-tshirt-40243-eg-original-imafdnh4dnfhjz2c.jpeg?q=50" },
   { "id":3,"name": "Abstract Men Neck Dark Blue T-Shirt", "size": "L", "price":"500", "image":"https://rukminim1.flixcart.com/image/800/960/jp780i80/t-shirt/u/8/t/s-tnvhdfulabstract1-tripr-original-imafbdarnwhfh7uu.jpeg?q=50" },
   { "id":4,"name": "Solid Men Polo Neck Black T-Shirt ", "size": "XL", "price":"600", "image":"https://rukminim1.flixcart.com/image/800/960/k3q76a80/t-shirt/u/z/x/m-lf5100sblack-duke-original-imafmsucmmbbu6gr.jpeg?q=50"},
   { "id":5,"name": "Round Neck Multicolor T-Shirt(Pack of 4)", "size": "M", "price":"999", "image":"https://rukminim1.flixcart.com/image/800/960/k48rwcw0/t-shirt/d/g/f/xl-threecombopetrol-patche-original-imafn6x4hzgzganj.jpeg?q=50" },
   { "id":6,"name": "Round Neck Red shaded shadow T-Shirt", "size": "L", "price":"700", "image":"https://rukminim1.flixcart.com/image/800/960/k2arbm80/t-shirt/p/c/s/s-sur19prm-rnfsspr-m-pln-rdgr-campus-sutra-original-imafhz6pqkjqe9sh.jpeg?q=50" },
   { "id":7,"name": "Men Polo Neck Yellow T-Shirt", "size": "S", "price":"800", "image":"https://rukminim1.flixcart.com/image/800/960/k3q76a80/t-shirt/j/g/b/m-lf5100sgolden-glow-duke-original-imafmshknynhf35h.jpeg?q=50" },
   { "id":8,"name": "Men Polo Neck Blue slimfit T-Shirt", "size": "M", "price":"900", "image":"https://rukminim1.flixcart.com/image/800/960/k3rmm4w0/t-shirt/z/r/x/m-lf5100sskyway-mix-duke-original-imafmtvn82zbxyu4.jpeg?q=50" },
   { "id":9,"name": "Printed Men Round Neck Blue T-Shirt", "size": "S", "price":"350", "image":"https://rukminim1.flixcart.com/image/800/960/k3uhhu80/t-shirt/h/s/t/m-wlf4461-blue-sky-duke-original-imafmvkfegjnsdn5.jpeg?q=50" },
   { "id":10,"name": "Shaded Round Neck Black and Blue T-Shirt", "size": "XL", "price":"1500", "image":"https://rukminim1.flixcart.com/image/800/960/k2urhjk0/t-shirt/a/j/t/m-black-blue-wrath-original-imafm4e4cq4s2yzg.jpeg?q=50" },
   { "id":11,"name": "Printed Men Round Crew Black T-Shirt", "size": "L", "price":"999", "image":"https://rukminim1.flixcart.com/image/800/960/jm81zm80/t-shirt/e/c/b/m-16960-0155-levi-s-original-imaf95f2vgzgwzhc.jpeg?q=50" },
   { "id":12,"name": "Printed Men Round Neck Black, Grey T-Shirt", "size": "M", "price":"799", "image":"https://rukminim1.flixcart.com/image/800/960/jt7jhjk0/t-shirt/f/v/z/s-men-fw18-hood-fs-grey-black-watched-maniac-original-imafeh29sdzzzugk.jpeg?q=50" },
   { "id":13,"name": "V-neck Green T-Shirt", "size": "XXL", "price":"800", "image":"https://rukminim1.flixcart.com/image/800/960/t-shirt/m/r/v/tvn012-tripr-xl-original-imaez7xwhuf6gu9k.jpeg?q=50" },
   { "id":14,"name": "Calvin Klein Jeans Men T-shirt", "size": "M", "price":"2000", "image":"https://rukminim1.flixcart.com/image/800/960/k2nmaa80/t-shirt/t/y/w/m-j313398099-calvin-klein-jeans-original-imafhxfysehzxnwz.jpeg?q=50" },
   { "id":15,"name": "Under Armour Men T-Shirt", "size": "S", "price":"399", "image":"https://rukminim1.flixcart.com/image/800/960/k3dc7m80/t-shirt/q/t/r/m-1327037-under-armour-original-imafmgjdzpkpntuk.jpeg?q=50" },
   { "id":16,"name": "Calvin Klein Round Neck Black T-Shirt", "size": "L", "price":"2500", "image":"https://rukminim1.flixcart.com/image/800/960/k2urhjk0/t-shirt/u/p/s/m-j314282bae-calvin-klein-jeans-original-imafhwcafzdzzvqj.jpeg?q=50" },
   { "id":17,"name": "Calvin Klein Jeans T-Shirt", "size": "XL", "price":"3000", "image":"https://rukminim1.flixcart.com/image/800/960/k2nmaa80/t-shirt/e/k/u/m-j314289bae-calvin-klein-jeans-original-imafhxg7e7689ajz.jpeg?q=50" },
   { "id":18,"name": "U.S. Polo Assn ", "size": "S", "price":"1700", "image":"https://rukminim1.flixcart.com/image/800/960/joq2qa80/t-shirt/k/j/7/m-usts5873-u-s-polo-assn-original-imafb2dyatznyhh7.jpeg?q=50" },
   { "id":19,"name": "Puma Men Polo Neck Red T-Shirt", "size": "XXL", "price":"2200", "image":"https://rukminim1.flixcart.com/image/800/960/k1i6ikw0/t-shirt/d/t/p/xs-8751641-puma-original-imafkwphm95szjng.jpeg?q=50" },
   { "id":20,"name": "Under Armour Men T-Shirt", "size": "XS", "price":"1200", "image":"https://rukminim1.flixcart.com/image/800/960/k37mg7k0/t-shirt/4/p/6/m-1342960-under-armour-original-imafmczzx3yhvxhd.jpeg?q=50" },
   { "id":21,"name": "Louis Philippe T-Shirt", "size": "XXL", "price":"1670", "image":"https://rukminim1.flixcart.com/image/800/960/k391w280/t-shirt/z/f/9/xxl-lpkwmrgpx73495-louis-philippe-original-imafmf6fywsthhxb.jpeg?q=50" },
   { "id":22,"name": "ADIDAS ORIGINALS Neck Red T-Shirt", "size": "S", "price":"2700", "image":"https://rukminim1.flixcart.com/image/800/960/k070zgw0/t-shirt/n/e/u/m-ed6917-adidas-originals-original-imafkfc2eay3fpfz.jpeg?q=50" },
   { "id":23,"name": "Men Solid John Pride T-Shirt", "size": "XL", "price":"689", "image":"https://rukminim1.flixcart.com/image/800/960/jfea93k0/t-shirt/z/s/z/5xl-jptsc3164-john-pride-original-imaf3urdmekzqgqd.jpeg?q=50" },
   { "id":24,"name": "ADIDAS Solid Men T-Shirt", "size": "M", "price":"2999", "image":"https://rukminim1.flixcart.com/image/800/960/jvv9zm80/t-shirt/t/u/r/m-dy1776-adidas-original-imafgzstg5gju7cy.jpeg?q=50" },
   { "id":25,"name": "Graphic Print Men Round Neck Black T-Shirt", "size": "ML", "price":"999", "image":"https://rukminim1.flixcart.com/image/800/960/k05ljm80/t-shirt/5/9/z/m-dx7010-adidas-original-imafky9d3xsbrxgc.jpeg?q=50" },
   { "id":26,"name": "Nike printed Men Neck Red T-Shirt", "size": "ML", "price":"1900", "image":"https://rukminim1.flixcart.com/image/800/960/k0e66q80/t-shirt/u/x/j/m-cd8040-010-nike-original-imafk6xgt235jud3.jpeg?q=50" },
   { "id":27,"name": "Duke Solid Men T-Shirt", "size": "S", "price":"1800", "image":"https://rukminim1.flixcart.com/image/800/960/jzzvs7k0/t-shirt/z/a/s/s-lf4517-d-navy-duke-original-imafjvwzhfqtgg5t.jpeg?q=50" },
   { "id":28,"name": "Monte Carlo T-Shirt", "size": "M", "price":"1200", "image":"https://rukminim1.flixcart.com/image/800/960/k0igia80/t-shirt/h/e/7/xxl-219045325-1-monte-carlo-original-imafk9hbqbdrzgsz.jpeg?q=50" },
   { "id":29,"name": "Louis Philippe Sport T-Shirt", "size": "XS", "price":"2300", "image":"https://rukminim1.flixcart.com/image/800/960/jt641ow0/t-shirt/t/b/v/m-lykpcslfw30355-louis-philippe-sport-original-imafekzzesbtsufj.jpeg?q=50" },
   { "id":30,"name": "Jockey Red T-Shirt", "size": "S", "price":"400", "image":"https://rukminim1.flixcart.com/image/800/960/jhavdzk0/t-shirt/d/p/3/l-2715-0105-nv-srnavy-shanghai-jockey-original-imaf5aezrjtafnpa.jpeg?q=50" }
  ];

  

  getItems(){
    return this.items;
  }

  addToCart(item){
    this.cart.push(item);
  }

  removeItemInCart(id){
    this.cart = this.cart.filter(item =>item.id !== id);
    this.subject.next(this.cart.length);
    return this.cart;
  }

  getCartItems(){
    return this.cart;
  }

}
