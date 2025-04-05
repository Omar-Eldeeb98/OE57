import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss'],
})
export class ContactmeComponent {
  form: FormGroup;
  isLoadoing: boolean = false;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  async sendMessage() {
    this.isLoadoing = true;
    emailjs.init('35_I9hdTQ_9HcPSIu');
    let response = await emailjs.send('service_2ibk49p', 'template_d3h4f6k', {
      name: this.form.value.name,
      email: this.form.value.email,
      phone: this.form.value.phone,
      message: this.form.value.message,
    });

    if (response.status === 200) {
      this.isLoadoing = false;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Success',
        text: 'Your message has been sent successfully!',
        background: '#1e1e2f',
        color: '#8A8B95',
        iconColor: '#4caf50',
        showConfirmButton: false,
        timer: 2000,
        didOpen: (popup) => {
          (popup as HTMLElement).style.borderRadius = '16px'; // Set border radius directly
        },
      });
      this.form.reset();
    } else {
      this.isLoadoing = false;
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error',
        text: 'There was an error sending your message. Please try again later.',
        background: '#1e1e2f',
        color: '#8A8B95',
        iconColor: '#ff0000',
        showConfirmButton: false,
        timer: 2000,
        didOpen: (popup) => {
          (popup as HTMLElement).style.borderRadius = '16px'; // Set border radius directly
        },
      });
    }
  }
}
