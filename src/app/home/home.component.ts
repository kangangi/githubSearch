import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import{ HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User;

  constructor(private http:HttpClient) { }
  

  ngOnInit() {
    interface ApiResponse{
     name:string,
      bio:string, 
      url: string,
      followers: string,
      following: number,
      public_repos : number,
      avatar_url :string

    }

    this.http.get<ApiResponse>("https://api.github.com/users/kangangi").subscribe(data=>{
      this.user = new User(data.name, data.bio, data.url, data.followers, data.following, data.public_repos, data.avatar_url)
    })
  }

}
