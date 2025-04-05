import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { IProject } from 'src/app/core/models/iproject';
import { EProjectType } from 'src/app/core/models/iproject-type';
import { ProjectsService } from 'src/app/core/services/projects.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _ProjectsService: ProjectsService) {}

  allProjectsStatistics!: number;
  angularProjectsStatistics!: number;
  vanilajsProjectsStatistics!: number;
  htmlCssProjectsStatistics!: number;

  // Set the path to your Lottie JSON file (ensure this file is in your assets folder)
  options: AnimationOptions = {
    path: '../../../assets/animation/Animation - 1742866196099.json',
  };

  typedText: Typed | undefined;
  @ViewChild('nextSection') nextSection!: ElementRef;
  @ViewChild('owlCarousel') owlCarousel!: CarouselComponent;

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
    { image: '../../../assets/images/skills/draw-io.svg' },
    { image: '../../../assets/images/skills/sql-server.png' },
    { image: '../../../assets/images/skills/sqlite.png' },
    { image: '../../../assets/images/skills/mongo.png' },
    { image: '../../../assets/images/skills/slack.png' },
    { image: '../../../assets/images/skills/swagger.png' },
    { image: '../../../assets/images/skills/postmat.png' },
    { image: '../../../assets/images/skills/es6.svg' },
    { image: '../../../assets/images/skills/i18n.png' },
    { image: '../../../assets/images/skills/jwt.png' },
    { image: '../../../assets/images/skills/apidog-seeklogo.svg' },
  ];

  services = [
    {
      title: 'ui / ux',
      icon: 'fa-solid fa-shapes',
      description:
        'create modern user-friendly websites with seamless UI/UX, ensuring intuitive  navigation, responsive design, and optimized performance for an exceptional user experience.',
    },
    {
      title: 'web design',
      icon: 'fa-solid fa-laptop-code',
      description:
        'design visually appealing, user-friendly websites with seamless navigation, responsive layouts, and intuitive UI/UX to enhance user engagement and experience.',
    },
    {
      title: 'web development',
      icon: 'fa-solid fa-code',
      description:
        'I develop fast, responsive, and user-friendly websites with clean code, seamless UI/UX, and optimized performance to enhance user experience.',
    },
    {
      title: 'responsive design',
      icon: 'fa-solid fa-laptop',
      description:
        'create responsive  websites that adapt seamlessly to all devices like mobile devices,  tablets, and desktops ensuring a smooth user experience with intuitive UI/UX and fast performance.',
    },
    {
      title: 'website redesign',
      icon: 'fa-solid fa-recycle',
      description:
        'revamp websites with modern, responsive designs, improved UI/UX, and optimized performance to enhance user engagement and business growth.',
    },

    {
      title: 'web animation',
      icon: 'fa-solid fa-radiation fa-spin',
      description:
        'create smooth website animations that enhance user experience, improve interactivity, and bring your brand to life with dynamic visuals.',
    },

    {
      title: 'web optimization',
      icon: 'fa-solid fa-layer-group',
      description:
        'optimize websites for speed, performance, and SEO, ensuring fast loading times, smooth user experience, and better search engine rankings.',
    },

    {
      title: 'unit testing',
      icon: 'fa-solid fa-bug-slash',
      description:
        'implement unit testing to ensure code reliability, catch bugs early, and improve software quality, maintainable, and error-free development.',
    },
  ];

  customers = [
    {
      name: 'Eslam Eltyar',
      position: '.Net Developer',
      companyName: '',
      companyUrl: '',
      companyImage: '../../../assets/images/star2.png',
      description:
        'Very happy to work with you on more than one advanced project, you are a great developer',
      social: {
        linkedin: '',
        whatsapp: '',
        github: '',
      },
    },
    {
      name: 'Omar magelislam',
      position: 'Frontend Developer',
      companyName: '',
      companyUrl: '',
      companyImage: '../../../assets/images/star2.png',
      description:
        'A hardworking  developer who has a lot of knowledge and helps others and shares his ideas.',
      social: {
        linkedin: '',
        whatsapp: '',
        github: '',
      },
    },
    {
      name: 'nour elgouhary',
      position: 'devops enginner',
      companyName: '',
      companyUrl: '',
      companyImage: '../../../assets/images/star2.png',
      description:
        'Hardworking and understands clean code and  apply it in his own code to get the best performance.',
      social: {
        linkedin: '',
        whatsapp: '',
        github: '',
      },
    },
    {
      name: 'Alla Ezzat',
      position: 'sr. Angular developer',
      companyName: '',
      companyUrl: '',
      companyImage: '../../../assets/images/star2.png',
      description:
        'Hardworking and understands clean code and how to apply it in his own code to get best performance.',
      social: {
        linkedin: '',
        whatsapp: '',
        github: '',
      },
    },
    {
      name: 'mahmoud elslakh',
      position: 'ui/ux designer',
      companyName: '',
      companyUrl: '',
      companyImage: '../../../assets/images/star2.png',
      description:
        'Its great working with you and seeing you design websites with such professionalism.',
      social: {
        linkedin: '',
        whatsapp: '',
        github: '',
      },
    },
    {
      name: 'kareem baticha',
      position: 'web developer',
      companyName: '',
      companyUrl: '',
      companyImage: '../../../assets/images/star2.png',
      description:
        'one of the People who complete work within the specified time and with high efficiency',
      social: {
        linkedin: '',
        whatsapp: '',
        github: '',
      },
    },
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
      400: { items: 5 },
      740: { items: 10 },
      940: { items: 15 },
    },
    nav: false,
  };

  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    smartSpeed: 800,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
    nav: false,
  };
  ngOnInit(): void {
    this.initializeTypedText();
    this.allProjectsStatistics = this._ProjectsService.getAllProjects().length;
    this.angularProjectsStatistics = this._ProjectsService.getProjectsByType(
      EProjectType.Angular
    ).length;
    this.vanilajsProjectsStatistics = this._ProjectsService.getProjectsByType(
      EProjectType.VanilaJS
    ).length;
    this.htmlCssProjectsStatistics = this._ProjectsService.getProjectsByType(
      EProjectType.HtmlCss
    ).length;
  }

  // ngAfterViewInit() {
  //   const cards = document.querySelectorAll('.slide-item');
  //   let maxHeight = 0;

  //   cards.forEach((card) => {
  //     const element = card as HTMLElement; // Explicitly cast to HTMLElement
  //     maxHeight = Math.max(maxHeight, element.offsetHeight);
  //   });

  //   cards.forEach((card) => {
  //     const element = card as HTMLElement; // Explicitly cast to HTMLElement
  //     element.style.height = `${maxHeight}px`;
  //   });
  // }

  next(): void {
    this.owlCarousel.next();
    console.log('Next');
  }
  prev(): void {
    this.owlCarousel.prev();
    console.log('Prev');
  }

  private initializeTypedText(): void {
    const options = {
      strings: [
        'Omar Makram Eldeeb',
        'Software Developer',
        'Frontend Developer',
        'Angular Developer',
        'UI / UX Developer',
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      loopCount: Infinity,
      startDelay: 0,
    };

    this.typedText = new Typed('.typed-element', options);
  }

  scrollToNextSection() {
    this.nextSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
