import { Component } from '@angular/core';

@Component({
  selector: 'app-futuregoals',
  templateUrl: './futuregoals.component.html',
  styleUrls: ['./futuregoals.component.scss'],
})
export class FuturegoalsComponent {
  goals: any[] = [];

  constructor() {
    this.goals = [
      'I want to be a full stack developer and work on projects that involve both front-end and back-end development. I also want to learn more about cloud computing and how to deploy applications on the cloud.',
      'I want to work on projects that involve blockchain technology and learn more about how it works.',
      'I also want to learn more about mobile app development and work on projects that involve both front-end and back-end development.',
      'I want to learn more about user experience (UX) design and how to create applications that are easy to use and visually appealing.',
      'I want to work on projects that involve data science and data analysis. I want to learn more about how to analyze data and make decisions based on data.',
      'I want to work on projects that involve machine learning and artificial intelligence. I want to learn more about how to build applications that can learn from data and make predictions.',
      'I want to work on projects that involve Internet of Things (IoT) and learn more about how to build applications that can communicate with devices.',
      'I want to learn more about software testing and how to write tests for my code.',
      'I want to learn more about cybersecurity and how to protect against cyber attacks.',
      'I want to learn more about DevOps and how to automate the software development process.',
      'I want to learn more about agile software development and how to work in an agile environment.',
      'I want to learn more about project management and how to manage software development projects.',
      'I want to learn more about software architecture and how to design software systems.',
      'I want to learn more about software development methodologies and how to choose the right methodology for a project.',
      'I want to learn more about software development tools and how to use them effectively.',
      'I want to learn more about software development best practices and how to apply them in my work.',
      'I want to learn more about software development trends and how to stay up to date with the latest technologies.',
      'I want to learn more about software development communities and how to get involved in them.',
      'I want to learn more about software development podcasts and how to listen to them.',
      'I want to learn more about software development books and how to read them.',
    ];
  }
}
