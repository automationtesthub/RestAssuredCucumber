Feature: User Registration

Scenario Outline: User Registration Positive flow
Given uri "<URI>" and firstname "<FirstName>",LastName "<LastName>",UserName "<UserName>", Password "<Password>", Email "<Email>"
When method post
Then reponse status code should be "<SatausCode>"
And Node "<Node>" is equal to "<NodeValue>"

Examples:
|URI                                        | FirstName | LastName | UserName  | Password | Email             | SatausCode | Node        | NodeValue        |
|http://restapi.demoqa.com/customer/register| Sanjiv    | Dass     | SanjibCCsS| Sanjib002|Sanjib100@gmail.com|201         | SuccessCode | OPERATION_SUCCESS|



Scenario Outline: User Registration Negative flow
Given uri "<URI>" and firstname "<FirstName>",LastName "<LastName>",UserName "<UserName>", Password "<Password>", Email "<Email>"
When method post
Then reponse status code should be "<SatausCode>"
And Node "<Node>" is equal to "<NodeValue>"

Examples:
|URI                                        | FirstName | LastName | UserName | Password | Email             | SatausCode | Node        | NodeValue          |
|http://restapi.demoqa.com/customer/register| Sanjib    | Das      | SanjibDAS| Sanjib001|Sanjib123@gmail.com|200         | FaultId     | User already exists|