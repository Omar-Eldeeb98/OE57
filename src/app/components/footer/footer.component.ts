import { Component, Renderer2 } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private renderer: Renderer2) {}
  // Set the path to your Lottie JSON file (ensure this file is in your assets folder)
  options: AnimationOptions = {
    path: '../../../assets/animation/Animation - 1742869429649.json',
  };

  private readonly resumePath = 'assets/pdf/cv.pdf';
  private readonly resumeFileName = 'FrontEnd_Resume_OmarEldeeb.pdf';
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
}
