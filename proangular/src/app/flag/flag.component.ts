import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {
  obj = {
    border: '10px solid red'
  }

  cname:string;
  countries=[
    {country : 'India', flag : '../../assets/india.jpg'},
    {country : 'Japan', flag : '../../assets/japan.jpg'},
    {country : 'US', flag : '../../assets/us.jpg'},
    {country : 'China', flag : '../../assets/china.jpg'},
    {country : 'Germany', flag : '../../assets/germany.jpg'},
    
  ]



  constructor() { }

  ngOnInit() {
  }
  fun(Cname:string){
    this.cname=Cname;

  }

}
