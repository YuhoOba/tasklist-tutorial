import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    { title: 'タスク登録', url: '/home', icon: 'home' },
    { title: 'タスク一覧', url: '/tasks', icon: 'list' },
  ];

  constructor() {}
}
