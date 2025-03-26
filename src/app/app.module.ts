import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactmeComponent } from './pages/contactme/contactme.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutmeComponent } from './pages/about-pages/aboutme/aboutme.component';
import { EducationComponent } from './pages/about-pages/education/education.component';
import { CoursesComponent } from './pages/about-pages/courses/courses.component';
import { CertificationsComponent } from './pages/about-pages/certifications/certifications.component';
import { TechnicalskillsComponent } from './pages/about-pages/technicalskills/technicalskills.component';
import { ResumeComponent } from './pages/about-pages/resume/resume.component';
import { ExperienceComponent } from './pages/career-pages/experience/experience.component';
import { FuturegoalsComponent } from './pages/career-pages/futuregoals/futuregoals.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Factory function required by AOT
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactmeComponent,
    NavbarComponent,
    FooterComponent,
    AboutmeComponent,
    EducationComponent,
    CoursesComponent,
    CertificationsComponent,
    TechnicalskillsComponent,
    ResumeComponent,
    ExperienceComponent,
    FuturegoalsComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
