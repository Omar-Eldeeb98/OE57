import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})
export class AboutmeComponent {
  // Set the path to your Lottie JSON file (ensure this file is in your assets folder)
  options: AnimationOptions = {
    path: '../../../../assets/animation/Animation - 1742770727417.json',
    loop: true,
    autoplay: true,
  };

  private readonly resumePath = 'assets/pdf/cv.pdf';
  private readonly resumeFileName = 'FrontEnd_Resume_OmarEldeeb.pdf';

  constructor(private renderer: Renderer2) {}
  tools = [
    { image: '../../../assets/images/fontawesome-1.svg' },
    { image: '../../../assets/images/github.png' },
    { image: '../../../assets/images/google-fonts-2021-2.svg' },
    { image: '../../../assets/images/highcharts.svg' },
    { image: '../../../assets/images/icons8-adobe-xd-240.png' },
    { image: '../../../assets/images/skills/angular.svg' },
    { image: '../../../assets/images/icons8-bootstrap-240.png' },
    { image: '../../../assets/images/skills/c-sharp.png' },
    { image: '../../../assets/images/icons8-css-240.png' },
    { image: '../../../assets/images/icons8-figma-240.png' },
    { image: '../../../assets/images/icons8-firebase-240.png' },
    { image: '../../../assets/images/icons8-git-logo-240.png' },
    { image: '../../../assets/images/icons8-html5-240.png' },
    { image: '../../../assets/images/icons8-java-240.png' },
    { image: '../../../assets/images/icons8-javascript-240.png' },
    { image: '../../../assets/images/icons8-jquery-500.png' },
    { image: '../../../assets/images/icons8-material-ui-240.png' },
    { image: '../../../assets/images/mysql.png' },
    { image: '../../../assets/images/icons8-npm-logo-240.png' },
    { image: '../../../assets/images/icons8-sass-240.png' },
    { image: '../../../assets/images/icons8-tailwind-css-240.png' },
    { image: '../../../assets/images/icons8-typescript-144.png' },
    { image: '../../../assets/images/karma.svg' },
    { image: '../../../assets/images/miro-2.svg' },
    { image: '../../../assets/images/ngrx.svg' },
    { image: '../../../assets/images/rxjs-1.svg' },
    { image: '../../../assets/images/trello.png' },
    { image: '../../../assets/images/skills/primng.svg' },
    { image: '../../../assets/images/skills/vs-code.png' },
    { image: '../../../assets/images/skills/vs.png' },
    { image: '../../../assets/images/skills/vercel.png' },
    { image: '../../../assets/images/skills/github.png' },
    { image: '../../../assets/images/skills/gitlab.png' },
    { image: '../../../assets/images/skills/netlify.png' },
    { image: '../../../assets/images/skills/bitbucket.png' },
    { image: '../../../assets/images/skills/sourcetree-seeklogo.svg' },
    { image: '../../../assets/images/skills/jest.png' },
    { image: '../../../assets/images/skills/json.png' },
    { image: '../../../assets/images/skills/xml.png' },
    { image: '../../../assets/images/skills/py.png ' },
    { image: '../../../assets/images/skills/slack.png' },
    { image: '../../../assets/images/skills/draw-io.svg' },
    { image: '../../../assets/images/skills/sql-server.png' },
    { image: '../../../assets/images/skills/sqlite.png' },
    { image: '../../../assets/images/skills/mongo.png' },
    { image: '../../../assets/images/skills/swagger.png' },
    { image: '../../../assets/images/skills/postmat.png' },
    { image: '../../../assets/images/skills/es6.svg' },
    { image: '../../../assets/images/skills/i18n.png' },
    { image: '../../../assets/images/skills/jwt.png' },
    { image: '../../../assets/images/skills/apidog-seeklogo.svg' },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navText: ['', ''],
    margin: 10,
    autoplay: true,
    navSpeed: 700,
    autoplayHoverPause: false,
    autoplayTimeout: 1500,
    smartSpeed: 800,
    responsive: {
      0: { items: 4 },
      400: { items: 8 },
      740: { items: 12 },
      940: { items: 15 },
    },
    nav: false,
  };

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
