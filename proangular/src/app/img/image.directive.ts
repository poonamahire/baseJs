import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective {

  module(arg0: any, arg1: any): any {
    throw new Error("Method not implemented.");
  }
  img: any;
  @Input('appFlipkartd')
  @HostBinding('attr.height')
  style:string

  constructor() { }

}

@HostListener('mouseenter')
whenIn() {
  this.zoomin()
}

@HostListener('mouseleave')
whenOut() {
  this.zoomin()
}
zoomin()
{
   let width=100
    let height=200
  // this.hstClr = `height${height}','width ${width}`
  this.style='height${height}','width${width}'
  console.log(this.style)
  // <script>
  // var app = this.module("app", []);
  // app.controller('myController', ['$scope', function ($scope) {
  //     $scope.images = [{ path: 'http://learnit.visrosoftware.com/datafiles/enter1.jpg' },
  //         { path: 'http://learnit.visrosoftware.com/datafiles/enter2.jpg' },
  //         { path: 'http://learnit.visrosoftware.com/datafiles/enter3.jpg' },
  //         { path: 'http://learnit.visrosoftware.com/datafiles/enter4.jpg' },
  //         { path: 'http://learnit.visrosoftware.com/datafiles/enter5.jpg' },
  //         { path: 'http://learnit.visrosoftware.com/datafiles/enter6.jpg' }];
  // }]);
// </script>

}
// zoomout() {

// }
}


