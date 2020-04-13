import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SearchServiceService} from '../search-service.service'


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() searchUser = new EventEmitter();
  @Output() searchRepo= new EventEmitter();

  user:string
  repo:string
  constructor(private searchService:SearchServiceService) { }

  theUserName(userName:HTMLInputElement){
    this.searchUser.emit(userName.value)
    this.user = userName.value
  }

  ngOnInit(): void {
  }

}
