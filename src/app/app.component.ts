import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  location;display
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
  this.location=window.location.href;

  if(this.location.includes("iframe") )
    {
      this.display =false
console.log("hello")
    }
    else
    {
      this.display =true
      console.log("bello")


    }
}
}
