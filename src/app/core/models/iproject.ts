import { EProjectType } from './iproject-type';

export interface IProject {
  projectType: EProjectType;
  projectName: string;
  Description: string;
  liveDemoLink: string;
  projectVideoLink: string;
  githubLink: string;
  projectMainPicture: string;
  technologiesUsed: string[];
}
