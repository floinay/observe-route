import { Component } from '@angular/core';
import { TestObserver } from './test-obsever';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'route-observer';
  constructor(private to:TestObserver) {
    
  }
}
