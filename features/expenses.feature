Feature: Expense tracking
  Background: as a user i want to track my exspences
    Given I visit the url "/"

    Scenario: as a user i want to add an expence
      When I enter the title, description and category
      Then I expect to see it saved in my expences with the total including tax
      And If its a new category I want to be prompted to add a tax rate to the new expence

    Scenario: Total Exepnses
      Given I am on the dashboard
      Then i expext to see a total for all expenses

    Scenario: Total Expenses per category
      Given I am on the dashboard
      Then i expext to see a list of each category plus the total value of expenses in that cetegory

    Scenario: Bouns Feature?
