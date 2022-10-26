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
 
 @Register @Two
 Scenario: Verify whether the user is not allowed to register on skiping the mandatory fields
   Given I launch the application
   And I navigate to Account Registration page
   When I click on Continew Button
   Then I should see that the User account is not created
   And I should see the error messages informing the User to fill the mandatory fields
  
  @Register @Three 
 Scenario: Verify whether the user is able to register into the application by opting for Newsletter subsciption
   Given I launch the application
   And I navigate to Account Registration page
   When I provide the all the below valid details
   | FirstName | Suraj                   |
   | LastName  | Karwande                |
   | Email     | suraj.karwande2@gmail.com|
   | Telephone | 8668229150              |
   | Password  | Suraj@123               |
   And I select the Privacy Policy
   And I subscribe to Newsletter
   And I click on Continew Button
   Then I should see that the User account has successfully created
   
 @Register @Four  
 Scenario: Verify whether the user is restricted from creating a duplicate account  
    Given I launch the application
    And I navigate to Account Registration page
    When I provide the below duplicate details
     | FirstName | Suraj                   |
     | LastName  | Karwande                |
     | Email     | suraj.karwande@gmail.com|
     | Telephone | 8668229150              |
     | Password  | Suraj@123               |
    And I select the Privacy Policy
    And I click on Continew Button
    Then I should see that the User is restricted from creating duplicate account
    
    
   
   
  