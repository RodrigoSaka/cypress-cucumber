Feature: Demo page

  Scenario: Click button to change title
    Given I open the demo page
    When I click the change button
    Then I should see the text "Button Clicked"

  Scenario: Token display
    Given I open the demo page with a test token
    When I click the change button
    Then I should see the token displayed in the page
