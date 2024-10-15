import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  personalFormGroup!: FormGroup;
  educationFormGroup!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void{
    this.personalFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.educationFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required],
    });
  }
  
  isEditable = false;
}
