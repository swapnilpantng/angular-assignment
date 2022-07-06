# Hulu -Streaming platform

github link: https://github.com/swapnilpantng/angular-assignment – master branch

deployed link - http://swapnil-angular.s3-website.ap-south-1.amazonaws.com/

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
