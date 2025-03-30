import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  ngAfterViewInit() {
    const carouselElement = document.getElementById('carouselExample');
    const currentSlideElement = document.getElementById('currentSlide');

    if (carouselElement && currentSlideElement) {
      carouselElement.addEventListener('slid.bs.carousel', (event: any) => {
        const activeIndex = event.to + 1; // Bootstrap provides the zero-based index
        currentSlideElement.textContent = activeIndex.toString();
      });
    }
  }
}
