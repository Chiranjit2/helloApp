import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloApp is running';
  val = [
    {id:1, name:"John"},
    {id:2, name:"Mohn"},
    {id:3, name:"Sohn"},
    {id:4, name:"Rohn"},
    {id:5, name:"Dohn"}
  ];
}

