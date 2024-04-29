import { Component } from '@angular/core';
import {UserdataService} from "../services/userdata.service"
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  users:any;
  constructor(private userdata: UserdataService ){
    // this.data = userdata.users();
    userdata.users().subscribe((data)=>this.users = data)
    console.log(this.users);
  }

}
