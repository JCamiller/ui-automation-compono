Feature: Library Add Book API

Add a book

    Scenario: POST Add Book
        Given I have valid book details
        When a user adds a new book
        Then "POST Add Book" should show status code of 200
        And "POST Add Book" should get success message on response

    Scenario: GET Book Details By Author
        When a book details is being fetched by using an author name
        Then "GET Book Details By Author" should show status code of 200
        And it should get valid book details