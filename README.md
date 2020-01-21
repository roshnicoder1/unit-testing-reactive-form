# Angular Reactive Forms and Validations - Exercise-3

## Objective  

To understand Application development using ReactiveForms and adding Built-in Validators as well as Custom Validators.

## Instructions for doing the Exercise  

1. You are expected to create an application view that contains a registration form with header
2. App component should be the root component and should contain header and register component.
3. Header component and Register Component are as developed in the previous exercises.
4. All the Form elements should be contained within one FormGroup and should also be binded with the corresponding component property variables using the attribute 'formControlName'.  
5. Add all the required Validators to all the FormControls based on the validation rules mentioned below.  

## Instructions for running the Test cases

1. Run the unit testcases by `ng test`.
2. Refactor the code and run the unit testcases again until all the testcases are passing.
3. Run the e2e testcases by `ng e2e`.
4. Refactor the code and run the e2e testcases again until all the testcases are passing.
5. commit the code & push it to gitlab and submit in hobbes.
6. Refactor the code and submit in hobbes again unit the score is 100.

## Milestones

1. Creating new angular app with app, header and register component
2. Developing header component using Angular material design components
3. Developing register component using Angular material design components
4. Defining FormGroup and FormControl Variables in component file for the Input Fields
5. Apply Built-in Validators to the formcontrols and implement/apply custom validator functions wherever rquired.    

## Validation Rules:
### First Name  
 - Cannot be empty
 - should contain only alphabets
 - should contain atleast one string with minimum of 3 letters and maximum of 30 letters
 - Cannot contain numbers and special characters

 ### Last Name
 - Cannot be empty
 - Must contain only one string with minimum of 3 letters and macimum of 30 letters
 - cannot contain numbers
 - cannot  contain any special characters other than appostraphe,comma,period and dash.

 ### Address  
 - Cannot be empty
 - Can contain any characters with minimum length of 20 and macimum length of 80

 ### Email  

 - Cannot be empty
 - Cannot contain space anywhere in the email value
 - Must contain only one @ symbol between the string
 - Must only contain gmail.com address - (create a custom validator for filtering out email with domains other than gmail.com)  

 ### Password  

 - Cannot be empty
 - Must be minimum of 8 Characters and can have maximum of 13 characters
 - Should contain atleast 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character

 ### DOB  

 - Cannot be empty,
 - Date should be between 1st Jan 1990 and 1st Jan 1997 - Use JS Date Object to define the minDate and MaxDate and bind the property to the formControl using the attributes "[min]" and "[max]" 
