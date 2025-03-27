import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'myportfolio';

  constructor(private renderer: Renderer2) {}

  //^ props
  @ViewChild('goTop') navElement!: ElementRef;
  @HostListener('window:scroll') onScroll(): void {
    if (scrollY > 700) {
      this.renderer.removeClass(this.navElement.nativeElement, 'd-none');
    } else {
      this.renderer.addClass(this.navElement.nativeElement, 'd-none');
    }
  }

  scrollTop(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

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

  private initializeAOS(): void {
    AOS.init({
      duration: 1600, // Animation duration in milliseconds
      once: true, // Trigger animation only once
      offset: 200, // Scroll offset before triggering animation
      easing: 'ease', // Easing type
    });
  }
}
