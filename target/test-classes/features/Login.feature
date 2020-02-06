#Author: syntax team (neslihan@syntaxtechs.com)
@sprint1 @login
Feature: Login

  Background: 
    Given I open browser and navigated to the HRMS

  @smoke @login_2
  Scenario: valid login
    When I enter valid username and valid password
    And I click on the login button
    Then I successfully logged in
    And I close browser

  @regression 
  Scenario: Invalid Login
    When I enter valid username and invalid password
    And I click on the login button
    Then I see error message
    And I close browser

@regression @login_1
  Scenario Outline: Invalid Login and message validation
    When I enter "<Username>" and "<Password>"
    And I click on the login button
    Then I see"<ErrorMessage>"

    Examples: 
      | Username | Password   | ErrorMessage             |
      | Admin    | Admin123   | Invalid credentials      |
      | Admin    |            | Password cannot be empty |
      |          | Syntax@123 | Username cannot be empty |
      |          |            |Username cannot be empty  |