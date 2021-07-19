import { Component } from '@angular/core';
import{ UsersService} from './users.service';
import * as $ from "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any;
play:string="Play";
videodisabled:boolean = true;
  constructor(private postData:UsersService){}
  ngOnInit()
  {
    this.postData.getPosts().subscribe((result)=>{
      console.log(result);
      this.data=result
    })

  }




}
