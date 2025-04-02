import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/core/models/iproject';
import { EProjectType } from 'src/app/core/models/iproject-type';
import { ProjectsService } from 'src/app/core/services/projects.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(private _ProjectsService: ProjectsService) {}

  allProjects!: IProject[];
  angularProjects!: IProject[];
  vanilajsProjects!: IProject[];
  htmlCssProjects!: IProject[];

  checkLinkIsEmpty(event: Event, href: string): void {
    if (href === '#' || href === '') {
      event.preventDefault();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        background: '#14162B',
        color: '#f86f03',
        iconColor: '#f86f03',
        timerProgressBar: true,

        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: 'warning',
        title: 'This Link Is Not Available Now ! ',
      });
    }
  }

  ngOnInit(): void {
    this.getAllProjects();
    this.getAngularProjects();
    this.getVanilaJSProjects();
    this.getHtmlcssProjects();
  }

  getAllProjects(): void {
    this.allProjects = this._ProjectsService.getAllProjects();
  }

  getAngularProjects(): void {
    this.angularProjects = this._ProjectsService.getProjectsByType(
      EProjectType.Angular
    );
  }

  getVanilaJSProjects(): void {
    this.vanilajsProjects = this._ProjectsService.getProjectsByType(
      EProjectType.VanilaJS
    );
  }

  getHtmlcssProjects(): void {
    this.htmlCssProjects = this._ProjectsService.getProjectsByType(
      EProjectType.HtmlCss
    );
  }
}
