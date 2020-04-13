import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import{ HttpClient} from '@angular/common/http'
import {SearchServiceService} from '../search-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User;

  constructor(private searchService: SearchServiceService) { }
  

  ngOnInit() {
    this.searchService.myAccount()
    this.user = this.searchService.user
}}
