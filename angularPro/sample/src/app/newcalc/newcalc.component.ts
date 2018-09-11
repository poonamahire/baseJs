import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcalc',
  templateUrl: './newcalc.component.html',
  styleUrls: ['./newcalc.component.css']
})
export class NewcalcComponent implements OnInit {
  public num1:number;
  public num2:number;
  public result:number;
  
  
  
  cal_add(){
  this.result=this.num1+this.num2;
  }
  cal_sub(){
    this.result=this.num1-this.num2;
    }
  cal_div(){
      this.result=this.num1/this.num2;
    }
  cal_mul(){
      this.result=this.num1*this.num2;
    }  
  
  constructor() { }

  ngOnInit() {
  }

  ngModel()
  {
    this.cal_add,
    this.cal_sub,
    this.cal_div,
    this.cal_mul
  }
}
