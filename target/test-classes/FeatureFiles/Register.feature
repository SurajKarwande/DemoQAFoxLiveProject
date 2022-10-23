Feature: Registration functionality scenarios
 
@Register @One
Scenario: Verify whether the user is able to register into the application by provoiding all the details
 Given I launch the application
 And I navigate to Account Registration page
 When I provide the all the below valid details
   | FirstName | Suraj                   |
   | LastName  | Karwande                |
   | Email     | suraj.karwande@gmail.com|
   | Telephone | 8668229150              |
   | Password  | Suraj@123               |
 And I select the Privacy Policy
 And I click on Continew Button
 Then I should see that the User account has successfully created
 