Feature: user should not be able to login successfully with invalid credential

  Background:
    Given user is on home page

  @invalidsenario
  Scenario Outline: user should not be able to login successfully with invalid credential

    When user enter invalid "<username>" and "<password>"
    And user click on login
    Then user should not be able to login successfully and user should see "<ErrorMessage>"
    Examples:
      | username | password | ErrorMessage             |
      | Mansi    | SHAH     | Invalid credentials      |
      | Admin    | SHAH     | Invalid credentials      |
      | Admin12  | admin123 | Invalid credentials      |
      | admin    | Admin123 | Invalid credentials      |
      |          | admin123 | Username cannot be empty |
      | Admin    |          | Password cannot be empty |
      |          |          | Username cannot be empty |
      | RADAHA   |          | Password cannot be empty |
      |          | Patel    | Username cannot be empty |


