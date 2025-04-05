import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  companies: any[] = [];

  constructor() {
    this.companies = [
      {
        image: '../../../../assets/images/companies/xpert.png',
        name: 'xpertcoder software solutions',
        location: 'Dokki, Giza Egypt',
        workType: 'full time - onsite',
        startFromDate: 'Aug 2024 - Present',
        positionTitle: 'frontend web developer.',
        responsibleFor: [
          'Developed and maintained scalable, responsive web applications using Angular and TypeScript.',
          'Collaborated with UX/UI designers to implement pixel-perfect designs and improve user experience.',
          'Integrated RESTful APIs and third-party services to enhance application functionality.',
          'Conducted code reviews and mentored fresh developers to ensure code quality and best practices.',
        ],
      },
      {
        image: '../../../../assets/images/companies/fs.png',
        name: 'Forcetouches CO',
        location: 'cairo, Egypt',
        workType: 'part time - remote',
        startFromDate: 'Jul 2023 - Aug 2024',
        positionTitle: 'frontend web developer.',
        responsibleFor: [
          'Create efficient designs and development of user interaction screens using Html5, Scss, Bootstrap, Javascript, Typescript and Angular.',
          'Created CRUD operations and dealt with API, Implemented HTTP requests RXJS Observable library.',
          'Used Directives, Developed Reusable Components, Collaborate With UI/UX and Backend Developers.',
          'worked closely with back-end developers to ensure seamless API integration.',
        ],
      },
      {
        image: '../../../../assets/images/companies/tc.png',
        name: 'Tech Command',
        location: 'cairo, Egypt',
        workType: 'part time - remote',
        startFromDate: 'Sep 2020 - Apr 2021',
        positionTitle: 'frontend web developer.',
        responsibleFor: [
          'Collaborate with back-end developers and web designers to improve usability.',
          'Worked with advanced JavaScript as ECMAScript6(ES6).',
          'Designed and implemented a UI for the websites with HTML, CSS and Bootstrap, JavaScript, jQuery,',
        ],
      },
    ];
  }
  ngOnInit(): void {}
}
