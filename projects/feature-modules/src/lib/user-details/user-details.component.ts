import { Component, OnInit, Input } from '@angular/core';
import { User } from 'shared-core/reducers/users.reducer';
import { Store } from '@ngrx/store';
import { AppState } from 'shared-core/reducers';
import { LoadUserDetails } from './actions/user-details.actions';
import { selectUserDetailState } from './reducers';

@Component({
  selector: 'lib-user-details',
  template: `
    <div>
      <div class="user-list">
        <div class="user" ngClass="{'selected':selectedId===user.id}" *ngFor="let user of users" (click)="loadUserDetails(user.id)">
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
  styles: []
})
export class UserDetailsComponent implements OnInit {

  @Input() public users: User;
  public userDetails;
  public selectedId;
  constructor(private readonly store: Store<AppState>) { }

  ngOnInit() {
    this.userDetails = this.store.select(selectUserDetailState);
  }

  public loadUserDetails(userId) {
    this.store.dispatch(new LoadUserDetails(userId));
    this.selectedId = userId;
  }
}
