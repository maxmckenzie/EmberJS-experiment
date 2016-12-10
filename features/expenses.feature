Feature: Expense tracking
  Background: as a user i want to track my expenses
    Given I visit the url "/"

    Scenario: as a user i want to add an expense
      When I enter the title, description, price and category
      Then I expect to see it saved in my expenses with the total including tax
      And If its a new category I want to be prompted to add a tax rate to the new expense

    Scenario: Total expenses
      Given I am on the dashboard
      Then i expect to see a total for all expenses

    Scenario: Total Expenses per category
      Given I am on the dashboard
      Then i expect to see a list of each category plus the total value of expenses in that category

    Scenario: additional Feature?
