import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  
  

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+ [a-zA-Z]+$/)]],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/)        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/)        ],
      ],
      
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    // console.log(JSON.stringify(this.form.value, null, 2));
    // console.log(this.form, 'Sourav')
    let element = document.getElementsByClassName("displayElement")
    for( let key in this.form.value){
      const para = document.createElement("p");
      const node = document.createTextNode(this.form.value[key]);
      para.appendChild(node);

      document.getElementsByClassName("displayElement")[0].appendChild(para);
      // console.log(this.form.value[key]);
    }

    if (this.form.invalid) {
      return;
    }
  }
}


// You have to display the all the element -> Done
// YOu have to create a custom form validator for password matching -> 