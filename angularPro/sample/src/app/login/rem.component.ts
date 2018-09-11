import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rem',
  template: `
  <h2>This is from remember me</h2>  
  <div class="alert alert-primary" role="alert">
  <a>Remember me</a>
</div>
  `,
  styles: []
})
export class RemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
