import { Component } from '@angular/core';
  
@Component({
  selector:"pm-root",
  template: `
    <div><h1>{{pageTitle}}</h1>
      <div>My First Component  
      </div>`
      
})

export class AppComponent{
  pageTitle: string ="Avi's Website";
}

 