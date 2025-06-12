Feature: JWT Token Injection
  Scenario: Set token before the page loads
    Given I open the demo page injecting a JWT
    Then the token property should exist on the body
    And I can call the generateJWT function later
