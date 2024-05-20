import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { FormControl , FormGroup , Validator, Validators  } from '@angular/forms';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrl: './buy-page.component.css'
})
export class BuyPageComponent implements OnInit {
public addressform = false;
public totalamount:number=0;
myform:FormGroup|any;
constructor(private api:ApiService){}
ngOnInit(): void {
  this.myform= new FormGroup({
    email:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    mobile:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    
  })
  this.totalamount=this.api.buyingprice();
      console.log("Total Amount is",this.totalamount)
}
// addressform: any;
cancel(){
  this.addressform=false;
  this.myform.reset();
}
onsubmit(){
  this.myform.value;
  console.log(this.myform.value)
  this.myform.reset();
}


}

