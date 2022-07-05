# AngularAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

---

github link: https://github.com/swapnilpantng/angular-assignment – master branch

deployed link -

test case is written for CustomerSignupComponent and MessageService

Bonus point - attempted translation

S3 bucket policy
{
"Version": "2012-10-17",
"Statement": [
  {
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::swapnil-angular/*"
  }
  ]
}

some sample user credentials
  1) username - swapnil@gmail.com, password - admin123, prime user
  2) username - ok1@test.com, password - admin@123, not a prime user
