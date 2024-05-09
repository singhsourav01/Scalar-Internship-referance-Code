import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    street: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    city: new FormControl('', [Validators.required]),
    zip: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{5}'),
    ]),
  });
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      street: ['', [
        Validators.required,
        Validators.maxLength(20),
      ]],
      city: ['', [Validators.required]],
      zip: ['', [
        Validators.required,
        Validators.pattern('[0-9]{5}'),
      ]],
    });
  }

  save() {
    console.log(this.userForm);
  }
}
