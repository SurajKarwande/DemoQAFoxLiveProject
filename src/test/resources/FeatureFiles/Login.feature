Feature: Login functionality scenarios

@Login @One
Scenario: Verify whether the User is able to login with valid credentials

    Given I launch the application
    And I navigate to Account Login page
    When I login to the Applicatio using Username "suraj.karwande@gmail.com" and Password "Suraj@123"
    Then I should see that the User is able to login successfully
@Login @Two    
Scenario: Verify whether the User is not able to login with invalid credentials
    Given I launch the application
    And I navigate to Account Login page
    When I login to the Applicatio using Username "surajkarwande05@gmail.com" and Password "Srk@123"
    Then I should see an error message that the credentials are invalid
    
@Login @Three    
Scenario: Verify whether the User is not able to login without providing credentials
    Given I launch the application
    And I navigate to Account Login page
    When I login to the Applicatio using Username "" and Password ""
    Then I should see an error message that the credentials are invalid    
@Login @Four     
Scenario: Verify whether the User is not able to login with invalid credentials
    Given I launch the application
    And I navigate to Account Login page    
    When I reset the forgotten password for email "suraj.karwande@gmail.com"
    Then I should see a message informing the User that information related to reseting password have been sent to email address
        