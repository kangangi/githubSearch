import { Component, OnInit,Input } from '@angular/core';
import { User} from '../user'
import { Repository} from '../repository'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() user: User;
  @Input() repos : Repository;
  constructor() { }

  viewRepos(){
    this.user.displayRepos = ! this.user.displayRepos
  }

  ngOnInit(): void {
  }

}
