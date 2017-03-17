import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routes = [
    'slide1',
    'slide2',
    'slide3',
    'slide4',
    'slide5',
    'slide6',
    'slide7',
    'slide8',
    'slide9',
    'slide10',
    'slide11',
    'slide12',
    'slide13',
    'slide14',
    'slide15',
    'slide16',
    'slide17',
    'slide18',
    'slide19',
    'slide20',
    'slide21',
    'slide22',
    'slide23',
    'slide24',
    'slide25',
    'slide26',
    'slide27',
    'slide28',
    'slide29',
    'slide30'
  ];
  currentIndex;
  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      this.currentIndex = this.routes.indexOf(val.url.substring(1));
    });
  }

  goNext() {
    console.log('this.currentIndex', this.currentIndex);
    this.currentIndex += 1;
    this.goRoute();
  }

  goPrevious() {
    this.currentIndex -= 1;
    this.goRoute();
  }

  goRoute() {
    this.router.navigate([this.routes[this.currentIndex]]);
  }
}
