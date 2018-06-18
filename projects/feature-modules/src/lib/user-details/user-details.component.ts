import { Component, OnInit, Input } from '@angular/core';
import { User } from 'shared-core/reducers/users.reducer';
import { Store } from '@ngrx/store';
import { AppState } from 'shared-core/reducers';
import { LoadUserDetails } from './actions/user-details.actions';
import { Observable } from 'rxjs';
import { UserDetailsState, selectUserDetailState } from './reducers/user-details.reducer';

/**
 * This component uses summary data from the root store (the users) and detail data from
 * its feature store (the user details).
 */
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
  public userDetails: Observable<UserDetailsState>;
  constructor(private readonly store: Store<AppState>) { }

  ngOnInit() {

    /**
     * Users from the root store (from the shared core)
     */
    this.users = this.store.select(store => store.users.users);

    /**
     * User details are from this modules feature store
     */
    this.userDetails = this.store.select(selectUserDetailState);
  }

  public loadUserDetails(userId) {

    /**
     * Dispatching an effect in the feature store using a parameter taken from the root store
     */
    this.store.dispatch(new LoadUserDetails(userId));
  }
}
