import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http : HttpClient) { }

  // users(){
  //   return [
  //     {name:"suyash", age:22, email:"suyash@gmail.com"},
  //     {name:"ratnesh", age:22, email:"ratnesh@gmail.com"},
  //     {name:"raman", age:22, email:"raman@gmail.com"},
  //     {name:"aditya", age:22, email:"aditya@gmail.com"}
  //   ]
  // }

  users(){
    return this.http.get(this.url);
  }

  saveUsers(data:any){
    return this.http.post(this.url,data);
  }
}
