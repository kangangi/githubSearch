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
  @Output() repo: Repository;
  userSearch:string;
  repoSearch:string;
  user:User;
  repos:Repository[] = [];
  allrepos :Repository[] =[]
  viewInfo:boolean;
  viewRepo:boolean;
 
  constructor(private searchService:SearchServiceService) { }

  searchUserName(){
    this.user = this.searchService.searchUser(this.userSearch)
    this.repos = this.searchService.searchRepo(this.userSearch)
    this.viewInfo = true;
  }

  searchRepoName(){
    this.allrepos = this.searchService.searchRepobyName(this.repoSearch)
    this.viewRepo = true;
    
  }




  ngOnInit(): void {
  }

}
