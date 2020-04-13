import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SearchServiceService} from '../search-service.service'
import {User} from '../user' 
import {Repository} from '../repository'


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  
  userSearch:string;
  user:User;
  repos:any = [];
 
  constructor(private searchService:SearchServiceService) { }

  searchUserName(){
    this.user = this.searchService.searchUser(this.userSearch)
    this.repos = this.searchService.searchRepo(this.userSearch)
  }

  viewRepos(){
    this.user.displayRepos = ! this.user.displayRepos
  }


  ngOnInit(): void {
  }

}
