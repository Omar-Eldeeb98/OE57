import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses: any[] = [];

  constructor() {
    this.courses = [
      {
        img: '../../../../assets/images/courses/route.png',
        academy: 'Route Academy (software training)',
        date: 'oct 2023',
        courseName: 'front-end web development by angular framework.',
        duration: '6 months.',
      },
      {
        img: '../../../../assets/images/courses/route.png',
        academy: 'Route Academy (software training)',
        date: 'may 2024',
        courseName: '.net back-end web development.',
        duration: '5 months.',
      },
      {
        img: '../../../../assets/images/courses/mahara.png',
        academy: 'mahara-tech (iti platform)',
        date: 'mar 2025',
        courseName:
          'typescript : practical understanding of typescript programming language.',
        duration: '',
      },
      {
        img: '../../../../assets/images/courses/sololearn.png',
        academy: 'sololearn (programming platform)',

        date: 'mar 2025',
        courseName:
          ' Angular : practical understanding of angular 2+ framework.',
        duration: '',
      },
      {
        img: '../../../../assets/images/courses/sololearn.png',
        academy: 'sololearn (programming platform)',
        date: 'jan 2021',
        courseName:
          ' java : theorical and practical understanding of java programming language.',
        duration: '',
      },

      {
        img: '../../../../assets/images/courses/nh.png',
        academy: 'new horizons (computer learning centers)',
        date: 'july 2019',
        courseName: 'java se 8 : fundamentals of programming.',
        duration: 'this is an 40 hours course.',
      },
      {
        img: '../../../../assets/images/courses/nh.png',
        academy: 'new horizons (computer learning centers)',
        date: 'sep 2019',
        courseName: 'java se 8 : object oriented programming.',
        duration: 'this is an 40 hours course.',
      },
      {
        img: '../../../../assets/images/courses/nh.png',
        academy: 'new horizons (computer learning centers)',
        date: 'sep 2019',
        courseName: 'fundamentals of mySQL.',
        duration: 'this is an 24 hours course.',
      },
      {
        img: '../../../../assets/images/courses/nh.png',
        academy: 'new horizons (computer learning centers)',
        date: 'feb 2020',
        courseName: 'android applications development mySQL.',
        duration: 'this is an 80 hours course.',
      },
    ];
  }
}
