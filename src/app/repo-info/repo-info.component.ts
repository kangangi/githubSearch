import { Component,Input, OnInit } from '@angular/core';
import {Repository} from '../repository'

@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.css']
})
export class RepoInfoComponent implements OnInit {
  @Input () repos:Repository;

  constructor() { }

  ngOnInit(): void {
  }

}
