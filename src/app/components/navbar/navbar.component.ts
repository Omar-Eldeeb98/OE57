import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private readonly resumePath = 'assets/pdf/cv.pdf';
  private readonly resumeFileName = 'FrontEnd_Resume_OmarEldeeb.pdf';

  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isAboutRoute = this.aboutRoutes.includes(this.router.url);
    });
  }

  isDropdownOpen = false;
  isDropdownOpen1 = false;

  isAboutRoute = false;

  private aboutRoutes = [
    '/about/aboutme',
    '/about/education',
    '/about/courses',
    '/about/certifications',
    '/about/skills',
    '/about/resume',
  ];

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isDropdownOpen = false;
      this.isDropdownOpen1 = false;
    }
  }

  downloadResume(): void {
    const anchorElement = this.createAnchorElement();
    this.triggerDownload(anchorElement);
    this.cleanupAnchorElement(anchorElement);
  }

  private createAnchorElement(): HTMLAnchorElement {
    const anchorElement = this.renderer.createElement('a');
    anchorElement.setAttribute('target', '_blank');
    anchorElement.setAttribute('href', this.resumePath);
    anchorElement.setAttribute('download', this.resumeFileName);
    return anchorElement;
  }

  private triggerDownload(anchorElement: HTMLAnchorElement): void {
    anchorElement.dispatchEvent(
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
  }

  private cleanupAnchorElement(anchorElement: HTMLAnchorElement): void {
    this.renderer.removeChild(anchorElement.parentNode, anchorElement);
  }

  date: Date = new Date();
  formattedDate: string = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(this.date);
}
