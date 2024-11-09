import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  data: any;
  firstFormData = {
    StudentId: '',
    date: '',
    fisrtName: '',
    middleName: '',
    lastName: '',
    f_Firstname: '',
    f_Middlename: '',
    f_Lastname: '',
    DOB: '',
    number: '',
    mail: '',
    contact: '',
    income: '',
    Address: ''
  };
  secondFormData = {
    course:'',
    degree:'',
    college:'',
    passing:'',
    percentage:'',

  };



    constructor(
      private _formBuilder: FormBuilder,
      private StudentService: StudentService,
      private router: Router
     
    ) {}

    ngOnInit(): void{
      
      this.firstFormGroup = this._formBuilder.group({
        StudentId: [''],
        date: [''],
        fisrtName: ['',],
        middleName: [''],
        lastName: [''],
        f_Firstname: [''],
        f_Middlename: [''],
        f_Lastname: [''],
        DOB: [''],
        number: [''],
        mail: [''],
        contact: [''],
        income: [''],
        address: ['']

      });
      this.secondFormGroup = this._formBuilder.group({
        course: ['',Validators.required],
        degree: [''],
        collage: [''],
        passing: [''],
        percentage: [''],
      });

      this.thirdFormGroup = this._formBuilder.group({
        signiture: [''],
        parent_signiture: [''],
        pdate: [''],
        decl:[''],
      });
      
    }

    dataverify() {
      // console.log(this.firstFormGroup.value);
      // console.log(this.secondFormGroup.value, this.secondFormGroup.controls['course']);

      this.firstFormData = {
        StudentId: this.firstFormGroup.controls['StudentId'].value,
        date: this.firstFormGroup.controls['date'].value,
        fisrtName: this.firstFormGroup.controls['fisrtName'].value,
        middleName: this.firstFormGroup.controls['middleName'].value,
        lastName: this.firstFormGroup.controls['lastName'].value,
        f_Firstname: this.firstFormGroup.controls['f_Firstname'].value,
        f_Middlename: this.firstFormGroup.controls['f_Middlename'].value,
        f_Lastname: this.firstFormGroup.controls['f_Lastname'].value,
        DOB: this.firstFormGroup.controls['DOB'].value,
        number: this.firstFormGroup.controls['number'].value,
        mail: this.firstFormGroup.controls['mail'].value,
        contact: this.firstFormGroup.controls['contact'].value,
        income: this.firstFormGroup.controls['income'].value,
        Address: this.firstFormGroup.controls['address'].value
      }
      this.secondFormData={
        course: this.secondFormGroup.controls['course'].value,
        degree: this.secondFormGroup.controls['degree'].value,
        college: this.secondFormGroup.controls['collage'].value,
        passing: this.secondFormGroup.controls['passing'].value,
        percentage: this.secondFormGroup.controls['percentage'].value,
      }

      
      // this.data = JSON.stringify(this.firstFormData);

      // console.log(this.firstFormData)
    }

  submit() : void {
    if(this.firstFormGroup.valid) {
        const {StudentId, date, fisrtName, middleName, lastName, f_Firstname,f_Middlename ,f_Lastname,DOB,number,mail,contact,income,Address} = this.firstFormGroup.value;
        console.log('Sign-Up Data: ', {StudentId, date, fisrtName, middleName, lastName, f_Firstname,f_Middlename ,f_Lastname,DOB,number,mail,contact,income,Address});
        
        this.StudentService.register({StudentId, date, fisrtName, middleName, lastName, f_Firstname,f_Middlename ,f_Lastname,DOB,number,mail,contact,income,Address}).subscribe(student => {
          console.log(student);
          this.router.navigate(['/signin']);
       
  
        });

      } else {
        console.log("Validation Failed")
      }
    }
    
    

  
 
  
  isLinear = true;
}


