import { Component } from '@angular/core';
declare function initPlugins();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ngOnInit() {
    initPlugins();
  }
}
