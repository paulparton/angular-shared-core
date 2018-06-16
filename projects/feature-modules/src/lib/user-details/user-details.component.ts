import { Component, OnInit, Input } from '@angular/core';
import { User } from 'shared-core/reducers/users.reducer';
import { Store } from '@ngrx/store';
import { AppState } from 'shared-core/reducers';
import { LoadUserDetails } from './actions/user-details.actions';
import { selectUserDetailState } from './reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-user-details',
  template: `
    <div>
      <div class="user-list">
        <h2>Users</h2>
        <div class="user"
             [ngClass]="{'selected':(userDetails | async)?.user?.userId === user.id}"
             *ngFor="let user of (users | async)"
             (click)="loadUserDetails(user.id)">
          <h3>{{user.name}}</h3>
        </div>
      </div>
      <div>
        <pre>
          {{(userDetails | async)?.user?.favoriteColour}}
        </pre>
      </div>
    </div>
  `,
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public users: Observable<User[]>;
  public userDetails;
  public selectedId;
  constructor(private readonly store: Store<AppState>) { }

  ngOnInit() {
    this.users = this.store.select(store => store.users.users);
    this.userDetails = this.store.select(selectUserDetailState);
    this.store.select(selectUserDetailState).subscribe(user => console.log(`updated in component `, user));
  }

  public loadUserDetails(userId) {
    console.log(`update selected :: ${userId}`);
    this.store.dispatch(new LoadUserDetails(userId));
  }
}
