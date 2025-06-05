Feature: Demo page

  Scenario: Click button to change title
    Given I open the demo page
    When I click the change button
    Then I should see the text "Button Clicked"
