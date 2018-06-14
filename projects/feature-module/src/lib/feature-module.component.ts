import { Component, OnInit, Input } from '@angular/core';
import { User } from 'shared-core/reducers/users.reducer';

@Component({
  selector: 'lib-feature-module',
  template: `
    <div>
      <div class="user-list">
        <div class="user" *ngFor="let user of users">
          <h3>{{user.name}}</h3>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class FeatureModuleComponent implements OnInit {

  @Input() public users: User[];

  constructor() { }

  ngOnInit() {
  }

}
