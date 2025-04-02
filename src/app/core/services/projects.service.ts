import { Injectable } from '@angular/core';
import { IProject } from '../models/iproject';
import { EProjectType } from '../models/iproject-type';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: IProject[] = [];

  constructor() {
    this.projects = [
      {
        projectType: EProjectType.Angular,
        projectName: 'rouh alsharq choir',
        Description:
          'Exclusive website for the rouh alsharq choir with admin control panel',
        liveDemoLink: '',
        projectVideoLink: '',
        githubLink: '',
        projectMainPicture: '../../../assets/images/projects/rouh-alsharq.png',
        technologiesUsed: [
          '../../../assets/images/skills/angular.svg',
          '../../../assets/images/skills/rxjs.svg',
          '../../../assets/images/skills/ts.png',
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/primng.svg',
          '../../../assets/images/skills/i18n.png',
          '../../../assets/images/skills/json.png',
        ],
      },

      {
        projectType: EProjectType.Angular,
        projectName: 'Adwaa Website',
        Description:
          'modern and attractive website built for adwaa company for cars rental.',
        liveDemoLink: '',
        projectVideoLink:
          'https://drive.google.com/file/d/1WebSq1bAd1qgl0RGKIr_X0Es8PsB4rhx/view?usp=sharing',
        githubLink: '',
        projectMainPicture:
          '../../../assets/images/projects/adwaa-website-landing.png',
        technologiesUsed: [
          '../../../assets/images/skills/angular.svg',
          '../../../assets/images/skills/rxjs.svg',
          '../../../assets/images/skills/ts.png',
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/primng.svg',
          '../../../assets/images/skills/i18n.png',
        ],
      },

      {
        projectType: EProjectType.Angular,
        projectName: 'Adwaa Rental System',
        Description:
          'this is a employees cars rental system, built by angular for adwaa company in Saudi Arabia ',
        liveDemoLink: '',
        projectVideoLink:
          'https://drive.google.com/file/d/1pdH5-DOVS6LWNzAekdTf7CNIXx0MVisa/view?usp=sharing',
        githubLink: '',
        projectMainPicture:
          '../../../assets/images/projects/adwaa-rental-system.png',
        technologiesUsed: [
          '../../../assets/images/skills/angular.svg',
          '../../../assets/images/skills/rxjs.svg',
          '../../../assets/images/skills/ngrx.svg',
          '../../../assets/images/skills/ts.png',
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/primng.svg',
          '../../../assets/images/skills/i18n.png',
          '../../../assets/images/skills/json.png',
          '../../../assets/images/skills/jwt.png',
        ],
      },

      {
        projectType: EProjectType.Angular,
        projectName: 'Rental Control panel',
        Description:
          'this is a control panel that streamline operations and enhance efficiency for Adwaa Cars Rental',
        liveDemoLink: '',
        projectVideoLink:
          'https://drive.google.com/file/d/1kSL9PUlb6npsunVy8O-sLVoexoGQ746U/view?usp=sharing',
        githubLink: '',
        projectMainPicture:
          '../../../assets/images/projects/adwaa-control-panel.png',
        technologiesUsed: [
          '../../../assets/images/skills/angular.svg',
          '../../../assets/images/skills/rxjs.svg',
          '../../../assets/images/skills/ngrx.svg',
          '../../../assets/images/skills/ts.png',
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/primng.svg',
          '../../../assets/images/skills/i18n.png',
          '../../../assets/images/skills/json.png',
          '../../../assets/images/skills/jwt.png',
        ],
      },

      {
        projectType: EProjectType.Angular,
        projectName: 'Rental dashboard',
        Description:
          'creative and visually appealing dashboard for Adwaa Cars Rental',
        liveDemoLink: '',
        projectVideoLink:
          'https://drive.google.com/file/d/1MGEwLh1sUEwPECWp35qCM4F1P9PyBekX/view?usp=sharing',
        githubLink: '',
        projectMainPicture:
          '../../../assets/images/projects/adwaa-dashboard.png',
        technologiesUsed: [
          '../../../assets/images/skills/angular.svg',
          '../../../assets/images/skills/rxjs.svg',
          '../../../assets/images/skills/ngrx.svg',
          '../../../assets/images/skills/ts.png',
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/primng.svg',
          '../../../assets/images/skills/i18n.png',
          '../../../assets/images/skills/json.png',
          '../../../assets/images/skills/jwt.png',
        ],
      },

      {
        projectType: EProjectType.Angular,
        projectName: 'real estate Control Panel ',
        Description:
          'creative and visually appealing Control Panel for elmasry for real estate  ',
        liveDemoLink: '',
        projectVideoLink: '',
        githubLink: '',
        projectMainPicture: '../../../assets/images/projects/masry-dash.png',
        technologiesUsed: [
          '../../../assets/images/skills/angular.svg',
          '../../../assets/images/skills/rxjs.svg',
          '../../../assets/images/skills/ts.png',
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/primng.svg',
          '../../../assets/images/skills/i18n.png',
          '../../../assets/images/skills/jwt.png',
        ],
      },

      {
        projectType: EProjectType.Angular,
        projectName: 'Xpertcoder software solutions',
        Description:
          'creative and multi languages website for Xpertcoder software solutions company',
        liveDemoLink: '',
        projectVideoLink: '',
        githubLink: '',
        projectMainPicture: '../../../assets/images/projects/xpert.png',
        technologiesUsed: [
          '../../../assets/images/skills/angular.svg',
          '../../../assets/images/skills/rxjs.svg',
          '../../../assets/images/skills/ts.png',
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/primng.svg',
          '../../../assets/images/skills/i18n.png',
          '../../../assets/images/skills/jwt.png',
        ],
      },

      {
        projectType: EProjectType.Angular,
        projectName: 'old portfolio website',
        Description: 'my old portfolio website by angular 16',
        liveDemoLink: 'https://omar-eldeeb98.github.io/My-Website/',
        projectVideoLink:
          'https://www.linkedin.com/posts/omar-eldeeb-60a130199_angular-htmlcss-responsivedesign-activity-7172689280589328384-Xaj5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54kmoB1ebrZzUy3I-39qwonHT4tZd8_Oc',
        githubLink: 'https://github.com/Omar-Eldeeb98/My-Website',
        projectMainPicture: '../../../assets/images/projects/old-port.png',
        technologiesUsed: [
          '../../../assets/images/skills/angular.svg',
          '../../../assets/images/skills/rxjs.svg',
          '../../../assets/images/skills/ts.png',
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/primng.svg',
        ],
      },

      {
        projectType: EProjectType.Angular,
        projectName: 'manage 360',
        Description:
          'AI Chat App based on gemini apis & Employees Management system, built by Angular16',
        liveDemoLink: '',
        projectVideoLink:
          'https://drive.google.com/file/d/1On276zef0rRNllOGQaJXfpVrv_q0QgAA/view?usp=sharing',
        githubLink: 'https://github.com/Omar-Eldeeb98/Manage360',
        projectMainPicture: '../../../assets/images/projects/manage360.png',
        technologiesUsed: [
          '../../../assets/images/skills/angular.svg',
          '../../../assets/images/skills/rxjs.svg',
          '../../../assets/images/skills/ts.png',
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/primng.svg',
          '../../../assets/images/skills/json.png',
          '../../../assets/images/skills/jwt.png',
        ],
      },

      {
        projectType: EProjectType.Angular,
        projectName: 'Angular-R-JF-Task',
        Description:
          'angualr system system show a list of customers and ther transactions amout per days in a chart .',
        liveDemoLink: 'https://omar-eldeeb98.github.io/Angular-R-JF-Task/',
        projectVideoLink: '',
        githubLink: 'https://github.com/Omar-Eldeeb98/Angular-R-JF-Task',
        projectMainPicture: '../../../assets/images/projects/rjf.png',
        technologiesUsed: [
          '../../../assets/images/skills/angular.svg',
          '../../../assets/images/skills/rxjs.svg',
          '../../../assets/images/skills/ts.png',
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/json.png',
          '../../../assets/images/skills/highcharts.svg',
        ],
      },

      {
        projectType: EProjectType.Angular,
        projectName: 'MultiLangWebsite',
        Description:
          'simple angular website support (Arabic , English) languages by implementing (ngx-translate) package',
        liveDemoLink: 'https://omar-eldeeb98.github.io/MultiLangWebsite/',
        projectVideoLink:
          'https://www.linkedin.com/posts/omar-eldeeb-60a130199_frontend-angular-typescript-activity-7185562321518292992-x6Zu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54kmoB1ebrZzUy3I-39qwonHT4tZd8_Oc',
        githubLink: 'https://github.com/Omar-Eldeeb98/MultiLangWebsite',
        projectMainPicture: '../../../assets/images/projects/ml.png',
        technologiesUsed: [
          '../../../assets/images/skills/angular.svg',
          '../../../assets/images/skills/rxjs.svg',
          '../../../assets/images/skills/ts.png',
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/i18n.png',
        ],
      },

      {
        projectType: EProjectType.Angular,
        projectName: 'Movies Website',
        Description:
          'full options movies website, Users can explore an extensive library of movies categorized by genre, ratings, and popularity.',
        liveDemoLink: 'https://omar-eldeeb98.github.io/Movies-Website/',
        projectVideoLink:
          'https://www.linkedin.com/posts/omar-eldeeb-60a130199_angular-movieswebsite-api-activity-7181047163181813760-yJoJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54kmoB1ebrZzUy3I-39qwonHT4tZd8_Oc',
        githubLink: 'https://github.com/Omar-Eldeeb98/Movies-Website',
        projectMainPicture: '../../../assets/images/projects/movie.png',
        technologiesUsed: [
          '../../../assets/images/skills/angular.svg',
          '../../../assets/images/skills/rxjs.svg',
          '../../../assets/images/skills/ts.png',
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills//mdb.png',
        ],
      },

      {
        projectType: EProjectType.VanilaJS,
        projectName: 'Password Generator',
        Description:
          'random password generator using html, css, javascript and bootstrap v5.3',
        liveDemoLink:
          'https://omar-eldeeb98.github.io/random-password-generator/',
        projectVideoLink:
          'https://www.linkedin.com/posts/omar-eldeeb-60a130199_htmlcssjavascript-passwordgenerator-activity-7174856954320666624-N8sk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54kmoB1ebrZzUy3I-39qwonHT4tZd8_Oc',
        githubLink:
          'https://github.com/Omar-Eldeeb98/random-password-generator',
        projectMainPicture: '../../../assets/images/projects/password.png',
        technologiesUsed: [
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/js.png',
          '../../../assets/images/skills/es6.svg',
          '../../../assets/images/skills/jquery.png',
        ],
      },

      {
        projectType: EProjectType.Angular,
        projectName: 'Note App',
        Description:
          'Note App Can Do (sign in, sign up, log out , add note , update note, delete note )',
        liveDemoLink: 'https://omar-eldeeb98.github.io/angular-NoteApp/',
        projectVideoLink:
          'https://www.linkedin.com/posts/omar-eldeeb-60a130199_angular-noteapp-htmlcss-activity-7174185736571674624--xbG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54kmoB1ebrZzUy3I-39qwonHT4tZd8_Oc',
        githubLink: 'https://github.com/Omar-Eldeeb98/angular-NoteApp',
        projectMainPicture: '../../../assets/images/projects/noteapp.png',
        technologiesUsed: [
          '../../../assets/images/skills/angular.svg',
          '../../../assets/images/skills/rxjs.svg',
          '../../../assets/images/skills/ts.png',
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
        ],
      },

      {
        projectType: EProjectType.VanilaJS,
        projectName: 'todo App',
        Description: ' todo App Can Do add todo , update todo, delete todo ',
        liveDemoLink: 'https://omar-eldeeb98.github.io/todo-app/',
        projectVideoLink: '',
        githubLink: 'https://github.com/Omar-Eldeeb98/todo-app',
        projectMainPicture: '../../../assets/images/projects/todo.png',
        technologiesUsed: [
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/js.png',
          '../../../assets/images/skills/es6.svg',
          '../../../assets/images/skills/jquery.png',
        ],
      },

      {
        projectType: EProjectType.HtmlCss,
        projectName: 'devfolio website',
        Description: 'responsive portfolio template with html, css, bootstrap,',
        liveDemoLink: 'https://omar-eldeeb98.github.io/devfolio/',
        projectVideoLink: '',
        githubLink: 'https://github.com/Omar-Eldeeb98/devfolio',
        projectMainPicture: '../../../assets/images/projects/devfolio.png',
        technologiesUsed: [
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/js.png',
          '../../../assets/images/skills/es6.svg',
          '../../../assets/images/skills/jquery.png',
        ],
      },

      {
        projectType: EProjectType.HtmlCss,
        projectName: 'Mealify',
        Description:
          'responsive resturant website, with light and dark mode option',
        liveDemoLink: 'https://omar-eldeeb98.github.io/Mealfy/',
        projectVideoLink: '',
        githubLink: 'https://github.com/Omar-Eldeeb98/Mealfy',
        projectMainPicture: '../../../assets/images/projects/meal.png',
        technologiesUsed: [
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/js.png',
          '../../../assets/images/skills/es6.svg',
          '../../../assets/images/skills/jquery.png',
        ],
      },

      {
        projectType: EProjectType.HtmlCss,
        projectName: 'DASHBORAD',
        Description: 'modern and responsive dashboard with light and dark mode',
        liveDemoLink: 'https://omar-eldeeb98.github.io/dashborad/',
        projectVideoLink:
          'https://www.linkedin.com/posts/omar-eldeeb-60a130199_htmlcssjavascript-responsivedesign-dashboard-activity-7170526023594196992--z_h?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54kmoB1ebrZzUy3I-39qwonHT4tZd8_Oc',
        githubLink: 'https://github.com/Omar-Eldeeb98/dashborad',
        projectMainPicture: '../../../assets/images/projects/dashboard.png',
        technologiesUsed: [
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/js.png',
          '../../../assets/images/skills/es6.svg',
          '../../../assets/images/skills/jquery.png',
          '../../../assets/images/google-fonts-2021-2.svg',
          '../../../assets/images/fontawesome-1.svg',
        ],
      },

      {
        projectType: EProjectType.Angular,
        projectName: 'Ecommerce website',
        Description:
          'E-commerce website with full features and payment method built by Angular16',
        liveDemoLink: 'https://omar-eldeeb98.github.io/FreshCart-E-commerce/',
        projectVideoLink:
          'https://www.linkedin.com/posts/omar-eldeeb-60a130199_html5-css3-bootstrap5-activity-7168223540322656257-S1Yk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54kmoB1ebrZzUy3I-39qwonHT4tZd8_Oc',
        githubLink: 'https://github.com/Omar-Eldeeb98/FreshCart-E-commerce',
        projectMainPicture: '../../../assets/images/projects/commerce.png',
        technologiesUsed: [
          '../../../assets/images/skills/angular.svg',
          '../../../assets/images/skills/rxjs.svg',
          '../../../assets/images/skills/ts.png',
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/primng.svg',
          '../../../assets/images/skills/json.png',
          '../../../assets/images/skills/jwt.png',
        ],
      },

      {
        projectType: EProjectType.VanilaJS,
        projectName: 'QUIZ APP',
        Description: 'simple quiz app based on (https://opentdb.com/) API',
        liveDemoLink: 'https://omar-eldeeb98.github.io/Quiz-App/',
        projectVideoLink:
          'https://www.linkedin.com/posts/omar-eldeeb-60a130199_html5-css3-bootstrap5-activity-7158849233679265792-5LLj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54kmoB1ebrZzUy3I-39qwonHT4tZd8_Oc',
        githubLink: 'https://github.com/Omar-Eldeeb98/Quiz-App',
        projectMainPicture: '../../../assets/images/projects/quiz.png',
        technologiesUsed: [
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/js.png',
          '../../../assets/images/skills/es6.svg',
          '../../../assets/images/skills/jquery.png',
        ],
      },

      {
        projectType: EProjectType.VanilaJS,
        projectName: 'Yummy - website',
        Description:
          'meals full dictionary based on (https://www.themealdb.com/api.php) api',
        liveDemoLink: 'https://omar-eldeeb98.github.io/yammy-website/',
        projectVideoLink: '',
        githubLink: 'https://github.com/Omar-Eldeeb98/yammy-website',
        projectMainPicture: '../../../assets/images/projects/meals.png',
        technologiesUsed: [
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/js.png',
          '../../../assets/images/skills/es6.svg',
          '../../../assets/images/skills/jquery.png',
        ],
      },

      {
        projectType: EProjectType.VanilaJS,
        projectName: 'Games Dictionary',
        Description:
          'provides full information about selected games depends on Free-to-Play Games Database (api)',
        liveDemoLink: 'https://omar-eldeeb98.github.io/Games-Dictionary/',
        projectVideoLink:
          'https://www.linkedin.com/posts/omar-eldeeb-60a130199_apiintegration-htmlcssjavascript-bootstrap5-activity-7155954023701864452-z-zC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54kmoB1ebrZzUy3I-39qwonHT4tZd8_Oc',
        githubLink: 'https://github.com/Omar-Eldeeb98/Games-Dictionary',
        projectMainPicture: '../../../assets/images/projects/games.png',
        technologiesUsed: [
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/js.png',
          '../../../assets/images/skills/es6.svg',
          '../../../assets/images/skills/jquery.png',
        ],
      },

      {
        projectType: EProjectType.VanilaJS,
        projectName: 'party landing page',
        Description:
          'atractive and responsive party landing page built by javascript and jquery',
        liveDemoLink: 'https://omar-eldeeb98.github.io/Party-Website/',
        projectVideoLink:
          'https://www.linkedin.com/posts/omar-eldeeb-60a130199_jquery-javascript-bootstrap5-activity-7154158827930632192-lBvs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54kmoB1ebrZzUy3I-39qwonHT4tZd8_Oc',
        githubLink: 'https://github.com/Omar-Eldeeb98/Party-Website',
        projectMainPicture: '../../../assets/images/projects/party.png',
        technologiesUsed: [
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/js.png',
          '../../../assets/images/skills/jquery.png',
        ],
      },

      {
        projectType: EProjectType.VanilaJS,
        projectName: 'Products Management System',
        Description:
          'products management system based on browser local storage , CRUD-S operations',
        liveDemoLink:
          'https://omar-eldeeb98.github.io/Products-Management-System/',
        projectVideoLink:
          'https://www.linkedin.com/posts/omar-eldeeb-60a130199_htmlcssjavascript-bootstrap5-responsivedesign-activity-7151638835838279682-vJaH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54kmoB1ebrZzUy3I-39qwonHT4tZd8_Oc',
        githubLink:
          'https://github.com/Omar-Eldeeb98/Products-Management-System',
        projectMainPicture:
          '../../../assets/images/projects/product-manage.png',
        technologiesUsed: [
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/js.png',
          '../../../assets/images/skills/jquery.png',
        ],
      },

      {
        projectType: EProjectType.VanilaJS,
        projectName: ' weather website',
        Description:
          'weather website with many attractive functionality and user options',
        liveDemoLink:
          'https://omar-eldeeb98.github.io/what-weather-weather-website/',
        projectVideoLink:
          'https://www.linkedin.com/posts/omar-eldeeb-60a130199_weatherforecast-apiintegration-htmlcssjavascript-activity-7148786359061671937-oUab?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54kmoB1ebrZzUy3I-39qwonHT4tZd8_Oc',
        githubLink:
          'https://github.com/Omar-Eldeeb98/what-weather-weather-website',
        projectMainPicture: '../../../assets/images/projects/weather.png',
        technologiesUsed: [
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/js.png',
          '../../../assets/images/skills/jquery.png',
        ],
      },

      {
        projectType: EProjectType.VanilaJS,
        projectName: 'smart login system',
        Description:
          'log in , log out , register , save account in local storage',
        liveDemoLink: 'https://omar-eldeeb98.github.io/smart-login-system/',
        projectVideoLink:
          'https://www.linkedin.com/posts/omar-eldeeb-60a130199_javascript-localstorage-htmlcss-activity-7146561476386869248-fyhC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54kmoB1ebrZzUy3I-39qwonHT4tZd8_Oc',
        githubLink: 'https://github.com/Omar-Eldeeb98/smart-login-system',
        projectMainPicture: '../../../assets/images/projects/smart-login.png',
        technologiesUsed: [
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/js.png',
          '../../../assets/images/skills/jquery.png',
        ],
      },

      {
        projectType: EProjectType.VanilaJS,
        projectName: 'Bookmarker app',
        Description:
          'bookmark your favoutites websites and save the in your browser (local storage)',
        liveDemoLink: 'https://omar-eldeeb98.github.io/Bookmarker/',
        projectVideoLink:
          'https://www.linkedin.com/posts/omar-eldeeb-60a130199_javascript-crud-validation-activity-7143664484216217600-qtsP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54kmoB1ebrZzUy3I-39qwonHT4tZd8_Oc',
        githubLink: 'https://github.com/Omar-Eldeeb98/Bookmarker',
        projectMainPicture: '../../../assets/images/projects/bookmarker.png',
        technologiesUsed: [
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/js.png',
          '../../../assets/images/skills/jquery.png',
        ],
      },

      {
        projectType: EProjectType.VanilaJS,
        projectName: 'CRUD System',
        Description:
          'applaying CRUD-S operations in a simple design application',
        liveDemoLink: 'https://omar-eldeeb98.github.io/CRUD-system/',
        projectVideoLink:
          'https://www.linkedin.com/posts/omar-eldeeb-60a130199_crud-operations-by-javascript-html-activity-7142222769156521986-1iD2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54kmoB1ebrZzUy3I-39qwonHT4tZd8_Oc',
        githubLink: 'https://github.com/Omar-Eldeeb98/CRUD-system',
        projectMainPicture: '../../../assets/images/projects/crud.png',
        technologiesUsed: [
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/js.png',
          '../../../assets/images/skills/jquery.png',
        ],
      },

      {
        projectType: EProjectType.HtmlCss,
        projectName: 'Andey landing page',
        Description: 'responsive and modern portfolio website',
        liveDemoLink: 'https://omar-eldeeb98.github.io/Andey-Website/',
        projectVideoLink:
          'https://www.linkedin.com/posts/omar-eldeeb-60a130199_responsive-design-html-css-bootstrap-activity-7142866424372404226-CO6F?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54kmoB1ebrZzUy3I-39qwonHT4tZd8_Oc',
        githubLink: 'https://github.com/Omar-Eldeeb98/Andey-Website',
        projectMainPicture: '../../../assets/images/projects/andey.png',
        technologiesUsed: [
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/js.png',
          '../../../assets/images/skills/es6.svg',
          '../../../assets/images/skills/jquery.png',
          '../../../assets/images/google-fonts-2021-2.svg',
          '../../../assets/images/fontawesome-1.svg',
        ],
      },

      {
        projectType: EProjectType.VanilaJS,
        projectName: 'Random Quotes app ',
        Description: 'simple & responsive random quotes app',
        liveDemoLink: 'https://omar-eldeeb98.github.io/Random-Quotes/',
        projectVideoLink:
          'https://www.linkedin.com/posts/omar-eldeeb-60a130199_random-quotes-by-javascript-live-demo-activity-7142202273807450112-iAFb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54kmoB1ebrZzUy3I-39qwonHT4tZd8_Oc',
        githubLink: 'https://github.com/Omar-Eldeeb98/Random-Quotes',
        projectMainPicture: '../../../assets/images/projects/qoute.png',
        technologiesUsed: [
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/js.png',
          '../../../assets/images/skills/jquery.png',
        ],
      },

      {
        projectType: EProjectType.HtmlCss,
        projectName: 'Daniels landing page',
        Description: 'responsive and modern portfolio website',
        liveDemoLink: 'https://omar-eldeeb98.github.io/Daniels/',
        projectVideoLink: '',
        githubLink: 'https://github.com/Omar-Eldeeb98/Daniels',
        projectMainPicture: '../../../assets/images/projects/dan.png',
        technologiesUsed: [
          '../../../assets/images/skills/html.png',
          '../../../assets/images/skills/css.png',
          '../../../assets/images/skills/sass.png',
          '../../../assets/images/skills/boot.png',
          '../../../assets/images/skills/js.png',
          '../../../assets/images/skills/es6.svg',
          '../../../assets/images/skills/jquery.png',
          '../../../assets/images/google-fonts-2021-2.svg',
          '../../../assets/images/fontawesome-1.svg',
        ],
      },
    ];
  }

  // Function to get all projects
  getAllProjects(): IProject[] {
    return this.projects;
  }

  // Function to get projects by type
  getProjectsByType(projectType: EProjectType): IProject[] {
    return this.projects.filter(
      (project) => project.projectType === projectType
    );
  }
}
