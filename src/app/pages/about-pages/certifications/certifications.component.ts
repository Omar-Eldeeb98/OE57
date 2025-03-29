import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent {
  certifications: any[] = [
    {
      title: 'typescript',
      img: '../../../../assets/images/certifications/typescript.jpg',
      link: 'https://drive.google.com/file/d/1xkHb6aJq8HT5yK7qwYFa6F9BVGXQ-ds3/view?usp=sharing',
    },
    {
      title: 'java ',
      img: '../../../../assets/images/certifications/java.png',
      link: 'https://www.sololearn.com/certificates/CT-CXQN82RJ',
    },
    {
      title: 'angular',
      img: '../../../../assets/images/certifications/angular.png',
      link: 'https://www.sololearn.com/certificates/CC-FVRWFYXH',
    },

    {
      title: 'java se 8',
      img: '../../../../assets/images/certifications/javase8.jpg',
      link: 'https://drive.google.com/file/d/19d2p1iG8Xei4cZL5clzf6s2987HUYSpt/view?usp=sharing',
    },
    {
      title: 'oop',
      img: '../../../../assets/images/certifications/oop.jpg',
      link: 'https://drive.google.com/file/d/16lz0Z0vmN5CVqmWj9rCN0y7yG3rs7B3y/view?usp=sharing',
    },
    {
      title: 'my sql',
      img: '../../../../assets/images/certifications/mysql.jpg',
      link: 'https://drive.google.com/file/d/1X2y8SCbxc2nqJO2nhgSOL-G3RVxT37z7/view?usp=sharing',
    },
    {
      title: 'android dev',
      img: '../../../../assets/images/certifications/android.jpg',
      link: 'https://drive.google.com/file/d/12RLWCD0p-TtMUIO-ICYgI9Ms-mxX5oGF/view?usp=sharing',
    },
  ];
}
