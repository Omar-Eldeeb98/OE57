import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutmeComponent } from './pages/about-pages/aboutme/aboutme.component';
import { EducationComponent } from './pages/about-pages/education/education.component';
import { CoursesComponent } from './pages/about-pages/courses/courses.component';
import { CertificationsComponent } from './pages/about-pages/certifications/certifications.component';
import { TechnicalskillsComponent } from './pages/about-pages/technicalskills/technicalskills.component';
import { ResumeComponent } from './pages/about-pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/career-pages/experience/experience.component';
import { FuturegoalsComponent } from './pages/career-pages/futuregoals/futuregoals.component';
import { ContactmeComponent } from './pages/contactme/contactme.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'contact', component: ContactmeComponent, title: 'Contact Me' },
  {
    path: 'about',
    children: [
      { path: '', redirectTo: 'aboutme', pathMatch: 'full' },
      { path: 'aboutme', component: AboutmeComponent, title: 'About Me' },
      { path: 'education', component: EducationComponent, title: 'Education' },
      { path: 'courses', component: CoursesComponent, title: 'Courses' },

      {
        path: 'certifications',
        component: CertificationsComponent,
        title: 'Certifications',
      },
      { path: 'skills', component: TechnicalskillsComponent, title: 'Skills' },
      { path: 'resume', component: ResumeComponent, title: 'Resume' },
    ],
  },
  { path: 'projects', component: ProjectsComponent, title: 'Projects' },
  {
    path: 'career',
    children: [
      { path: '', redirectTo: 'experience', pathMatch: 'full' },
      {
        path: 'experience',
        component: ExperienceComponent,
        title: 'Experience',
      },
      {
        path: 'futuregoals',
        component: FuturegoalsComponent,
        title: 'Future Goals',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
