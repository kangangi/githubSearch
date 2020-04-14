import { Component, OnInit,Input } from '@angular/core';
import { User} from '../user'
import { Repository} from '../repository'
import {SearchServiceService} from '../search-service.service'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() user: User;
  @Input () repos:Repository[];
  

  
  constructor(private searchService: SearchServiceService) { }

 
  ngOnInit() {
    this.repos = this.searchService.repos
    console.log(this.repos)
    
  }

  viewRepos(){
    this.user.displayRepos =! this.user.displayRepos
    
  }


}
