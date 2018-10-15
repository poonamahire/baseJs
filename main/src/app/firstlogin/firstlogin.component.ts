import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstlogin',
  templateUrl: './firstlogin.component.html',
  styleUrls: ['./firstlogin.component.css']
})
export class FirstloginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
signIn(){
  this.router.navigate(['signin'])
}
signUp(){
  this.router.navigate(['signup'])
}

}
