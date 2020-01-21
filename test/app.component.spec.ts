import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../src/app/app.component';
import { HeaderComponent } from '../src/app/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from '../src/app/register/register.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        RegisterComponent
      ],
      imports:
        [
          MatToolbarModule,
          MatFormFieldModule,
          MatInputModule,
          MatButtonModule,
          BrowserAnimationsModule,
          MatMenuModule,
          MatIconModule,
          ReactiveFormsModule,
          MatButtonModule,
          MatRadioModule,
          MatDatepickerModule,
          MatNativeDateModule
        ]
    }).compileComponents();
  }));

  it('AppComponent should be created', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('AppComponent should contain the Header Component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header')).toBeTruthy('Add app-header to the AppComponent');
  });

  it('AppComponent should contain the Register Component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-register')).toBeTruthy('Add app-register to the AppComponent');
  });
});

describe('RegisterComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegisterComponent
      ],
      imports:
        [
          MatFormFieldModule,
          MatInputModule,
          MatButtonModule,
          BrowserAnimationsModule,
          ReactiveFormsModule,
          MatButtonModule,
          MatRadioModule,
          MatDatepickerModule,
          MatNativeDateModule
        ]
    }).compileComponents();
  }));

  it('Register Component Should Contain input field for First Name', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let element = compiled.querySelectorAll('mat-form-field input')[0];
    expect(element).toBeTruthy('add input element inside mat-form-field');
    expect(element.type).toBe('text', 'element should be of type "text"');
    expect(element.name).toBe('firstName', 'add name attribute to the element by name="firstName"');
    expect(element.getAttribute('formControlName')).toBe('fname', 'bind the element with the property "fname" by formControlName="fname"');
  });

  it('Register Component Should Contain input field for Last Name', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let element = compiled.querySelectorAll('mat-form-field input')[1];
    expect(element).toBeTruthy('add input element inside mat-form-field');
    expect(element.type).toBe('text', 'element should be of type "text"');
    expect(element.name).toBe('lastName', 'add name attribute to the element by name="lastName"');
    expect(element.getAttribute('formControlName')).toBe('lname', 'bind the element with the property "lname" by formControlName="lname"');
  });

  it('Register Component Should Contain input field for Address', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let element = compiled.querySelectorAll('mat-form-field input')[2];
    expect(element).toBeTruthy('add input element inside mat-form-field');
    expect(element.type).toBe('text', 'element should be of type "text"');
    expect(element.name).toBe('address', 'add name attribute to the element by name="lastName"');
    expect(element.getAttribute('formControlName')).toBe('address', 'bind the element with the property "address" by formControlName="address"');
  });

  it('Register Component Should Contain input field for email', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let element = compiled.querySelectorAll('mat-form-field input')[3];
    expect(element).toBeTruthy('add input element inside mat-form-field');
    expect(element.type).toBe('email', 'element should be of type "email"');
    expect(element.name).toBe('email', 'add name attribute to the element by name="email"');
    expect(element.getAttribute('formControlName')).toBe('email', 'bind the element with the property "email" by formControlName="email"');
  });

  it('Register Component Should Contain input field for password', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let element = compiled.querySelectorAll('mat-form-field input')[4];
    expect(element).toBeTruthy('add input element inside mat-form-field');
    expect(element.type).toBe('password', 'element should be of type "password"');
    expect(element.name).toBe('password', 'add name attribute to the element by name="password"');
    expect(element.getAttribute('formControlName')).toBe('password', 'bind the element with the property "password" by formControlName="password"');
  });

  it('Register Component Should Contain input field for Date of Birth', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let element = compiled.querySelectorAll('mat-form-field input')[5];
    expect(element).toBeTruthy('add input element inside mat-form-field');
    expect(element.name).toBe('dob', 'add name attribute to the element by name="dob"');
    expect(element.getAttribute('formControlName')).toBe('dob', 'bind the element with the property "dob" by formControlName="dob"');
  });

  it('Register Component Should Contain input mat-radio-group for Gender', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let element = compiled.querySelector('mat-radio-group');
    let radio_btns = compiled.querySelectorAll('mat-radio-group mat-radio-button');
    expect(element).toBeTruthy('add mat-radio-group to the RegisterComponent');
    expect(element.getAttribute('name')).toBe('gender', 'add name attribute to the element by name="gender"');
    expect(element.getAttribute('formControlName')).toBe('gender', 'bind the element with the property "gender" by formControlName="gender"');
    expect(radio_btns[0].getAttribute('value')).toBe('Male', 'add mat-radio-button inside mat-radio-group with value as "Male"');
    expect(radio_btns[0].textContent).toContain('Male', 'add text "Male" inside the mat-radio-button');
    expect(radio_btns[1].getAttribute('value')).toBe('Female', 'add mat-radio-button inside mat-radio-group with value as "Female"');
    expect(radio_btns[1].textContent).toContain('Female', 'add text "Female" inside the mat-radio-button');
    expect(radio_btns[2].getAttribute('value')).toBe('Other', 'add mat-radio-button inside mat-radio-group with value as "Other"');
    expect(radio_btns[2].textContent).toContain('Other', 'add text "Other" inside the mat-radio-button');
  });
});

describe('HeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      imports:
        [
          MatToolbarModule,
          BrowserAnimationsModule,
          MatMenuModule,
          MatIconModule
        ]
    }).compileComponents();
  }));
  it('Header Component should contain mat-toolbar', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar')).toBeTruthy('Add Angular Material component in the Header Component');
  });
  it('Angular material toolbar should contain mat-icon', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar mat-icon')).toBeTruthy('Add mat-icon to the mat-toolbar');

  });
  it('Angular material toolbar should contain mat-menu', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar mat-menu')).toBeTruthy('Add mat-menu to the mat-toolbar');
  });
});

describe('RegisterComponent - FormControls Validations', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        RegisterComponent
      ],
      imports:
        [
          MatToolbarModule,
          MatFormFieldModule,
          MatInputModule,
          MatButtonModule,
          BrowserAnimationsModule,
          MatMenuModule,
          MatIconModule,
          ReactiveFormsModule,
          MatButtonModule,
          MatRadioModule,
          MatDatepickerModule,
          MatNativeDateModule
        ]
    }).compileComponents();
  }));

  it('Validation of  FormControl for FirstName', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.debugElement.componentInstance;
    let control = app.userDetails;
    control.patchValue({
      fname: ""
    });
    expect(control.controls.fname.valid).toBeFalsy('FormControl should not allow empty string as First Name. Add "Validators.required" to the fname formControl');
    control.patchValue({
      fname: "de"
    });
    expect(control.controls.fname.valid).toBeFalsy('FormControl should not allow strings that has length less than 3 as FirstName. Add "Validators.minLength" to the fname formControl');
    control.patchValue({
      fname: "Deepan Chakkaravarthyrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
    });
    expect(control.controls.fname.valid).toBeFalsy('FormControl should not allow strings that has length greater than 30 as FirstName. Add "Validators.maxLength" to the fname formControl');
    control.patchValue({
      fname: "Deepan Chakkaravarthy0987"
    });
    expect(control.controls.fname.valid).toBeFalsy('FormControl Should not allow string with numbers and special characters. Add Regular expression for FirstName using "Validators.pattern" to the formControl');
    control.patchValue({
      fname: "Deepan Chakkaravarthy*!"
    });
    expect(control.controls.fname.valid).toBeFalsy('FormControl Should not allow string with numbers and special characters. Add Regular expression for FirstName using "Validators.pattern" to the formControl');
  });

  it('Validation of FormControl for LastName', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.debugElement.componentInstance;
    let control = app.userDetails;
    let valid = control.controls.lname;
    control.patchValue({
      lname: ""
    });
    expect(valid.valid).toBeFalsy('FormControl should not allow empty string as Last Name. Add "Validators.required" to the lname formControl');
    control.patchValue({
      lname: "de"
    });
    expect(valid.valid).toBeFalsy('FormControl should not allow strings that has length less than 3 as LastName. Add "Validators.minLength" to the lname formControl');
    control.patchValue({
      lname: "Deepan Chakkaravarthyrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
    });
    expect(valid.valid).toBeFalsy('FormControl should not allow strings that has length greater than 30 as LastName. Add "Validators.maxLength" to the lname formControl');
    control.patchValue({
      lname: "Deepan Chakkaravarthy0987"
    });
    expect(valid.valid).toBeFalsy('FormControl Should not allow string with numbers. Add Regular expression for LastName using "Validators.pattern" to the formControl');
    control.patchValue({
      lname: "Deepan Chakkaravarthy"
    });
    expect(valid.valid).toBeFalsy('FormControl Should not allow string with space as Last Name. Add Regular expression for Last Name using "Validators.pattern" to the formControl');
    control.patchValue({
      lname: "Deepan#"
    });
    expect(valid.valid).toBeFalsy('FormControl Should not allow string with special characters other than "\'.,-" as Last Name. Add Regular expression for LastName using "Validators.pattern" to the formControl');
  });


  it('Validation of FormControl for Address', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.debugElement.componentInstance;
    let control = app.userDetails;
    let valid = control.controls.address;
    control.patchValue({
      address: ""
    });
    expect(valid.valid).toBeFalsy('FormControl should not allow empty string as Address. Add "Validators.required" to the address formControl');
    control.patchValue({
      address: "deep4"
    });
    expect(valid.valid).toBeFalsy('FormControl should not allow strings that has length less than 20 as Address. Add "Validators.minLength" to the address formControl');
    control.patchValue({
      address: "Deepan Chakkaravarthyrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
    });
    expect(valid.valid).toBeFalsy('FormControl should not allow strings that has length greater than 80 as Address. Add "Validators.maxLength" to the address formControl');
  });


  it('Validation of FormControl for Email', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.debugElement.componentInstance;
    let control = app.userDetails;
    let valid = control.controls.email;

    control.patchValue({
      email: ""
    });
    expect(valid.valid).toBeFalsy('FormControl should not allow empty string as email. Add "Validators.required" to the email formControl');
    control.patchValue({
      email: "de@g.com"
    });
    expect(valid.valid).toBeFalsy('FormControl should not allow strings that has length less than 10 as email. Add "Validators.minLength" to the email formControl');
    control.patchValue({
      email: "DeepanChakkaravarthyrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr@gmail.com"
    });
    expect(valid.valid).toBeFalsy('FormControl should not allow strings that has length greater than 30 as email. Add "Validators.maxLength" to the email formControl');

    control.patchValue({
      email: "Depp@yahoo.com"
    });
    expect(valid.valid).toBeFalsy('FormControl should allow only gmail addresses. Create a custom validator that filters domain names other than "gmail.com" and add it to the email formControl');
  });

  it('Validation of FormControl for Password', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.debugElement.componentInstance;
    let control = app.userDetails;
    let valid = control.controls.password;
    control.patchValue({
      password: ""
    });
    expect(valid.valid).toBeFalsy('FormControl should not allow empty string as Password. Add "Validators.required" to the password formControl');
    control.patchValue({
      password: "Deep!4"
    });
    expect(valid.valid).toBeFalsy('FormControl should not allow strings that has length less than 8 as Password. Add "Validators.minLength" to the password formControl');
    control.patchValue({
      password: "Deepan#123Chakkaravarthyrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
    });
    expect(valid.valid).toBeFalsy('FormControl should not allow strings that has length greater than 13 as Password. Add "Validators.maxLength" to the password formControl');
    control.patchValue({
      password: "deepan@123"
    });
    expect(valid.valid).toBeFalsy('FormControl should allow only strings that has atleast 1 UpperCase letter. Add Regular expression for Strong Password using "Validators.pattern" and add it to the password formControl');
    control.patchValue({
      password: "DEEPAN@123"
    });
    expect(valid.valid).toBeFalsy('FormControl should allow only strings that has atleast 1 LowerCase letter. Add Regular expression for Strong Password using "Validators.pattern" and add it to the password formControl');
    control.patchValue({
      password: "Deepan123"
    });
    expect(valid.valid).toBeFalsy('FormControl should allow only strings that has atleast 1 Special Character. Add Regular expression for Strong Password using "Validators.pattern" and add it to the password formControl');
    control.patchValue({
      password: "Deepan#"
    });
    expect(valid.valid).toBeFalsy('FormControl should allow only strings that has atleast 1 Number. Add Regular expression for Strong Password using "Validators.pattern" and add it to the password formControl');
  });
});
