import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '.././environments/environment';
import{User} from './user';
import {Repository} from './repository'

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  usersApi = "https://api.github.com/users/";
  

 constructor(private http:HttpClient) {
   }

   searchUser(name){
    interface ApiUserResponse{
      name:string;
      bio:string;
      login:string;
      url: string;
      followers: number;
      following: number;
      public_repos : number;
      created_at:string;
      avatar_url :string;
   }
   let user = new User ("","","","",0,0,0,"","")
   let promise = new Promise((resolve , reject)=>{ 
     let userRequest = this.usersApi + name;
     this.http.get<ApiUserResponse>(userRequest).toPromise().then(response=>{
       user.name = response["name"]
       user.bio = response["bio"]
       user.url = response["url"]
       user.login = response["login"]
       user.followers  = response["followers"]
       user.following = response["following"]
       user.repos = response["public_repos"]
       user.create_at = response[""]
       user.avatar_url = response["avatar_url"]

       resolve()
     },
     error=>{
     user.name= "User not found"
     reject(error)
   })
  })
  return user
  }

  searchRepo(name){

    interface repoApiResponse{
      name:string;
      description:string;
      language:string;
      url:string;
    }
    let repos = []
    let promise = new Promise ((resolve,reject)=>{
      let repoRequest = this.usersApi + name + "/repos"
      this.http.get<repoApiResponse>(repoRequest).toPromise().then(response=>{
        for(let i = 0; i < response["length"]; i++){
          let newRepo = new Repository ("","","","")
          newRepo.name= response[i]["name"];
          newRepo.description= response[i]["description"];
          newRepo.language = response[i]["language"]
          newRepo.url= response[i]["url"];
          repos.push(newRepo)
        }
    }),error =>{
      confirm("repo not found")
      reject(error)
    }
    })
    return repos;
    }
   }

