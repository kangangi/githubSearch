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
  userAccount = "https://github.com/"
  reposApi = "https://api.github.com/search/repositories?q="
  repos = []
  allrepos=[]
  

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
      created_at:Date;
      avatar_url :string;
   }
   let user = new User ("","","","",0,0,0,new Date(),"")
   let promise = new Promise((resolve , reject)=>{ 
     let userRequest = this.usersApi + name +(environment.accesstoken);
     this.http.get<ApiUserResponse>(userRequest).toPromise().then(response=>{
       user.name = response["name"]
       user.bio = response["bio"]
       user.url = this.userAccount + name;
       user.login = response["login"]
       user.followers  = response["followers"]
       user.following = response["following"]
       user.repos = response["public_repos"]
       user.created_at = response["created_at"]
       user.avatar_url = response["avatar_url"]

       resolve()
       console.log(response)
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
   
    let promise = new Promise ((resolve,reject)=>{
      this.repos.length = 0;
      let repoRequest = this.usersApi + name + "/repos" +(environment.accesstoken)
      this.http.get<repoApiResponse>(repoRequest).toPromise().then(response=>{
        for(let i = 0; i < response["length"]; i++){
          let newRepo = new Repository ("","","","")
          newRepo.name= response[i]["name"];
          newRepo.description= response[i]["description"];
          newRepo.language = response[i]["language"]
          newRepo.url= this.userAccount + name + "/" + newRepo.name
          this.repos.push(newRepo)
          
        }
        resolve()
        
    }),error =>{
      confirm("repo not found")
      reject(error)
    }
    })
    return this.repos;
    }
    searchRepobyName(name){

      interface repoApiResponse{
        name:string;
        description:string;
        language:string;
        url:string;
      }
     
      let promise = new Promise ((resolve,reject)=>{
        this.allrepos.length = 0;
        let allrepoRequest = this.reposApi + name
        this.http.get<repoApiResponse>(allrepoRequest).toPromise().then(response=>{
          for(let i = 0; i < response["length"]; i++){
            let newallRepo = new Repository ("","","","")
            newallRepo.name= response[i].item.name;
            newallRepo.description= response[i].item.description;
            newallRepo.language = response[i].item.language;
            newallRepo.url= response[i].item.url;
            this.allrepos.push(newallRepo)
  
          }
          resolve()
          console.log(allrepoRequest)
          console.log(this.allrepos)
          
      }),error =>{
        confirm("repo not found")
        reject(error)
      }
      })
      return this.allrepos;
      }
  

   }

