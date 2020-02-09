$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/UserRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "User Registration",
  "description": "",
  "id": "user-registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User Registration Positive flow",
  "description": "",
  "id": "user-registration;user-registration-positive-flow",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "uri \"\u003cURI\u003e\" and firstname \"\u003cFirstName\u003e\",LastName \"\u003cLastName\u003e\",UserName \"\u003cUserName\u003e\", Password \"\u003cPassword\u003e\", Email \"\u003cEmail\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "method post",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "reponse status code should be \"\u003cSatausCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Node \"\u003cNode\u003e\" is equal to \"\u003cNodeValue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "user-registration;user-registration-positive-flow;",
  "rows": [
    {
      "cells": [
        "URI",
        "FirstName",
        "LastName",
        "UserName",
        "Password",
        "Email",
        "SatausCode",
        "Node",
        "NodeValue"
      ],
      "line": 10,
      "id": "user-registration;user-registration-positive-flow;;1"
    },
    {
      "cells": [
        "http://restapi.demoqa.com/customer/register",
        "Sanjiv",
        "Dass",
        "SanjibCCsS",
        "Sanjib002",
        "Sanjib100@gmail.com",
        "201",
        "SuccessCode",
        "OPERATION_SUCCESS"
      ],
      "line": 11,
      "id": "user-registration;user-registration-positive-flow;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "User Registration Positive flow",
  "description": "",
  "id": "user-registration;user-registration-positive-flow;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "uri \"http://restapi.demoqa.com/customer/register\" and firstname \"Sanjiv\",LastName \"Dass\",UserName \"SanjibCCsS\", Password \"Sanjib002\", Email \"Sanjib100@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "method post",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "reponse status code should be \"201\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Node \"SuccessCode\" is equal to \"OPERATION_SUCCESS\"",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://restapi.demoqa.com/customer/register",
      "offset": 5
    },
    {
      "val": "Sanjiv",
      "offset": 65
    },
    {
      "val": "Dass",
      "offset": 83
    },
    {
      "val": "SanjibCCsS",
      "offset": 99
    },
    {
      "val": "Sanjib002",
      "offset": 122
    },
    {
      "val": "Sanjib100@gmail.com",
      "offset": 141
    }
  ],
  "location": "UserRegistration.uri_and_firstname_LastName_UserName_Password_Email_SatausCode_Node_NodeValue(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1182078917,
  "status": "passed"
});
formatter.match({
  "location": "UserRegistration.method_post()"
});
formatter.result({
  "duration": 3210528093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 31
    }
  ],
  "location": "UserRegistration.reponse_status_code_should_be(String)"
});
formatter.result({
  "duration": 316444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuccessCode",
      "offset": 6
    },
    {
      "val": "OPERATION_SUCCESS",
      "offset": 32
    }
  ],
  "location": "UserRegistration.node_is_equal_to(String,String)"
});
formatter.result({
  "duration": 659922702,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "User Registration Negative flow",
  "description": "",
  "id": "user-registration;user-registration-negative-flow",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "uri \"\u003cURI\u003e\" and firstname \"\u003cFirstName\u003e\",LastName \"\u003cLastName\u003e\",UserName \"\u003cUserName\u003e\", Password \"\u003cPassword\u003e\", Email \"\u003cEmail\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "method post",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "reponse status code should be \"\u003cSatausCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Node \"\u003cNode\u003e\" is equal to \"\u003cNodeValue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "user-registration;user-registration-negative-flow;",
  "rows": [
    {
      "cells": [
        "URI",
        "FirstName",
        "LastName",
        "UserName",
        "Password",
        "Email",
        "SatausCode",
        "Node",
        "NodeValue"
      ],
      "line": 22,
      "id": "user-registration;user-registration-negative-flow;;1"
    },
    {
      "cells": [
        "http://restapi.demoqa.com/customer/register",
        "Sanjib",
        "Das",
        "SanjibDAS",
        "Sanjib001",
        "Sanjib123@gmail.com",
        "200",
        "FaultId",
        "User already exists"
      ],
      "line": 23,
      "id": "user-registration;user-registration-negative-flow;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "User Registration Negative flow",
  "description": "",
  "id": "user-registration;user-registration-negative-flow;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "uri \"http://restapi.demoqa.com/customer/register\" and firstname \"Sanjib\",LastName \"Das\",UserName \"SanjibDAS\", Password \"Sanjib001\", Email \"Sanjib123@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "method post",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "reponse status code should be \"200\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Node \"FaultId\" is equal to \"User already exists\"",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://restapi.demoqa.com/customer/register",
      "offset": 5
    },
    {
      "val": "Sanjib",
      "offset": 65
    },
    {
      "val": "Das",
      "offset": 83
    },
    {
      "val": "SanjibDAS",
      "offset": 98
    },
    {
      "val": "Sanjib001",
      "offset": 120
    },
    {
      "val": "Sanjib123@gmail.com",
      "offset": 139
    }
  ],
  "location": "UserRegistration.uri_and_firstname_LastName_UserName_Password_Email_SatausCode_Node_NodeValue(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1495412,
  "status": "passed"
});
formatter.match({
  "location": "UserRegistration.method_post()"
});
formatter.result({
  "duration": 862517030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "UserRegistration.reponse_status_code_should_be(String)"
});
formatter.result({
  "duration": 132564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FaultId",
      "offset": 6
    },
    {
      "val": "User already exists",
      "offset": 28
    }
  ],
  "location": "UserRegistration.node_is_equal_to(String,String)"
});
formatter.result({
  "duration": 15157243,
  "status": "passed"
});
});