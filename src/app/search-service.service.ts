import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '.././environments/environment';
import{User} from './user';
import { SearchFormComponent } from './search-form/search-form.component'

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  usersApi = "https://api.github.com/users/";
  myApi = "https://api.github.com/users/kangangi";
  myRepo = "https://api.github.com/users/kangangi/repos"
  user:User;
  theUserName:SearchFormComponent;

 constructor(private http:HttpClient) {
    this.user = new User ("","","","",0,0,0,"");
    this.user = new Repo
    
   }

   myAccount(){
    interface myApiResponse{
      name:string;
      bio:string;
      login:string;
      url: string;
      followers: number;
      following: number;
      public_repos : number;
      avatar_url :string;
   }
   let promise = new Promise((resolve , reject)=>{ 
     this.http.get<myApiResponse>(this.myApi).toPromise().then(response=>{
       this.user.name = response.name
       this.user.bio = response.bio
       this.user.url = response.url
       this.user.login = response.login
       this.user.followers  = response.followers
       this.user.following = response.following
       this.user.repos = response.public_repos
       this.user.avatar_url = response.avatar_url

       resolve()
     },
     error=>{
     confirm("Invalid user name")
     reject(error)
   })
  })
  return promise
  }


   }

   /*searchUserRequest(name){
    interface userApiResponse{
      name:string;
      bio:string;
      login:string;
      url: string;
      followers: number;
      following: number;
      public_repos : number;
      avatar_url :string;
   }
   let promise = new Promise((resolve , reject)=>{
     let userRequestUrl = this.usersApi + name 
     this.http.get<userApiResponse>(userRequestUrl).toPromise().then(response=>{
       this.user.name = response.name
       this.user.bio = response.bio
       this.user.url = response.url
       this.user.login = response.login
       this.user.followers  = response.followers
       this.user.following = response.following
       this.user.repos = response.public_repos
       this.user.avatar_url = response.avatar_url

       resolve()
     },
     error=>{
     confirm("Invalid user name")
     reject(error)
   })
  })
  return promise*/

 
