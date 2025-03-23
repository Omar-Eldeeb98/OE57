import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private readonly resumePath = 'assets/pdf/cv.pdf';
  private readonly resumeFileName = 'FrontEnd_Resume_OmarEldeeb.pdf';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  /**
   * Initiates a file download by creating a temporary anchor element and simulating
   * a click event on it. The anchor element is then removed from the DOM.
   */
  downloadResume(): void {
    const anchorElement = this.createAnchorElement();
    this.triggerDownload(anchorElement);
    this.cleanupAnchorElement(anchorElement);
  }

  /**
   * Creates an anchor element for triggering a file download.
   * @returns {HTMLAnchorElement} The created anchor element.
   */
  private createAnchorElement(): HTMLAnchorElement {
    const anchorElement = this.renderer.createElement('a');
    anchorElement.setAttribute('target', '_blank');
    anchorElement.setAttribute('href', this.resumePath);
    anchorElement.setAttribute('download', this.resumeFileName);
    return anchorElement;
  }

  /**
   * Simulates a click event on the provided anchor element to trigger a file download.
   * @param anchorElement - The anchor element that will be "clicked" to initiate the download.
   */

  private triggerDownload(anchorElement: HTMLAnchorElement): void {
    anchorElement.dispatchEvent(
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
  }

  /**
   * Removes the anchor element that was created for triggering a file download.
   * @param anchorElement - The anchor element to be removed.
   */
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
