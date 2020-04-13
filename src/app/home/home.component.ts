import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import{ Repository} from '../repository';
import{ HttpClient} from '@angular/common/http'
import {SearchServiceService} from '../search-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {;
  
  constructor(private searchService: SearchServiceService) { 
  } 
  
  user: User;
  repos:any = [];

  ngOnInit() {
    this.user =this.searchService.searchUser("kangangi")
    this.repos = this.searchService.searchRepo("kangangi")
  }
  
 viewRepos(){
   this.user.displayRepos = ! this.user.displayRepos
 }

}
