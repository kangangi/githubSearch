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

  @Output() searchUser = new EventEmitter();

  userName:string
 
  constructor(private searchService:SearchServiceService) { }

  searchUserName(userSearch:HTMLInputElement){
    this.searchUser.emit(userSearch.value)
    confirm(this.userName)
  }



  ngOnInit(): void {
  }

}
