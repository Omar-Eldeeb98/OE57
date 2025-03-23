import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.initializeAOS();
  }
  title = 'myportfolio';

  private initializeAOS(): void {
    AOS.init({
      duration: 1600, // Animation duration in milliseconds
      once: true, // Trigger animation only once
      offset: 200, // Scroll offset before triggering animation
      easing: 'ease', // Easing type
    });
  }
}
