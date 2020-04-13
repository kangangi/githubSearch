import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '.././environments/environment';
import{User} from './user';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  user:User;

  constructor(private http:HttpClient) {
    this.user = new User ("","","",0,0,0,"");
   }

   searchRequest(){
    interface ApiResponse{
      name:string;
      bio:string;
      url: string;
      followers: number;
      following: number;
      public_repos : number;
      avatar_url :string;
   }
   let promise = new Promise((resolve , reject)=>{
     this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
       this.user.name = response.name
       this.user.bio = response.bio
       this.user.url = response.url
       this.user.followers  = response.followers
       this.user.following = response.following
       this.user.repos = response.public_repos
       this.user.avatar_url = response.avatar_url

       resolve()
     },
     error=>{
     confirm("An error has occured")

     reject(error)
   })
  })
  return promise
  }
}
