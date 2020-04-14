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
  @Input() repos:Repository;  

  repos1:any =[]
  constructor(private searchService: SearchServiceService) { }

 
  ngOnInit() {
    this.repos1 = this.searchService.searchRepo(this.user.login)
    
  }

  viewRepos(){
    this.user.displayRepos =! this.user.displayRepos
  }


}
