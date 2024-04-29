import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserdataService} from './services/userdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'routing';
  users :any;

  constructor(private userdata : UserdataService){
    // console.log(userdata.users());
    // this.users = userdata.users();

    this.userdata.users().subscribe((data)=>{
      console.log(data);
      this.users = data
    })

    
  }
  sendData(data:any){
    console.log(data)
    this.userdata.saveUsers(data).subscribe((data)=>console.log("data send ",data))
  }
}
