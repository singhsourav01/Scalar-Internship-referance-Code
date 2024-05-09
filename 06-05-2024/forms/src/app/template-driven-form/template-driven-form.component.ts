import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  formEmail = '';
  formPassword = '';

  onSubmit(form: NgForm) {
    console.log('Form Submitted:', form.value);
    // Handle form submission logic here (e.g., send data to server)
  }

}
