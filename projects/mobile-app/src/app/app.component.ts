import { Component, OnInit } from '@angular/core';
import { SharedCoreService } from 'shared-core/shared-core.service';
import { LoadAllUsers } from 'shared-core/actions/users.actions';
import { User } from 'shared-core/reducers/users.reducer';
import { Store } from '@ngrx/store';
import { AppState } from 'shared-core/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = this.sharedCoreService.sharedMethod();
  public users: User[];

  constructor(private readonly sharedCoreService: SharedCoreService, private readonly store: Store<AppState>) {
    this.title = this.sharedCoreService.sharedMethod();
  }

  ngOnInit() {
    this.store.dispatch(new LoadAllUsers());
    this.store
      .select(store => store.users)
      .subscribe(users => this.users = users.users);
  }
}
