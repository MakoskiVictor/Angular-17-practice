import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { UsersServiceService } from '../../services';
import { Observable } from 'rxjs';
import { User } from '../../models';

@Component({
  selector: 'app-user-get',
  standalone: true,
  imports: [],
  templateUrl: './user-get.component.html',
  styleUrl: './user-get.component.scss'
})
export class UserGetComponent implements OnInit {
  
  constructor(private userServices: UsersServiceService) {}

  userId = signal(10)
  currentUser: WritableSignal<User | undefined> = signal<User | undefined>(undefined);
  userWasFound = signal(false)


  ngOnInit(): void {
    this.loadUser(this.userId())
  }

  loadUser(id: number) {
    this.currentUser.set(undefined)
    this.userServices.getUserApiById(id).subscribe({
      next: (user) => {
        this.currentUser.set(user)
        this.userWasFound.set(true)
      },
      error: ()=> this.userWasFound.set(false)
    })
    }

  changeUser (num: number) {
    if(this.userId() === 12 && num === 1) return
    if(this.userId() === 1 && num === -1) return 
    this.userId.set(this.userId() + num)
    this.loadUser(this.userId())
  }
}
