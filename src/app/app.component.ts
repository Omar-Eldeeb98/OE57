import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.setAttribute('data-name', 'BMC-Widget');
    script.setAttribute('data-cfasync', 'false');
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
    script.setAttribute('data-id', 'OmarEldeeb57');
    script.setAttribute('data-description', 'Support me on Buy me a coffee!');
    script.setAttribute('data-message', '');
    script.setAttribute('data-color', '#FF813F');
    script.setAttribute('data-position', 'left');
    script.setAttribute('data-x_margin', '18');
    script.setAttribute('data-y_margin', '18');

    this.renderer.appendChild(document.body, script);
  }
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
