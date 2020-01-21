import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  minDate: any = new Date(1990,1,1);
  maxDate: any = new Date(1997,1,1);
  userDetails = new FormGroup({
    fname: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern("^[a-zA-Z]+[ ]?[a-zA-Z]*$")
      ]),
    lname: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern("[a-zA-Z\'\.,-]+")
      ]),
    address: new FormControl('',[
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(80)
      ]),
    email: new FormControl('',[
        Validators.email,
        Validators.minLength(10),
        Validators.maxLength(30),
        Validators.required,
        this.domainfilter
      ]),
    password: new FormControl('',[
        Validators.required,
        Validators.pattern("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{8,13}")
      ]),
    gender: new FormControl('',[
        Validators.required
      ]),
    dob: new FormControl('',[
        Validators.required
      ])
  })
  constructor() { }

  ngOnInit() {
  }

  domainfilter(control: AbstractControl):{[key: string]: Boolean} | null{
    if (control.value.indexOf("gmail.com") > 0){
        return null;
    } else {
        return {domainFilter: true};
    }
}
}
