$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration functionality scenarios",
  "description": "",
  "id": "registration-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2805992000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether the user is able to register into the application by provoiding all the details",
  "description": "",
  "id": "registration-functionality-scenarios;verify-whether-the-user-is-able-to-register-into-the-application-by-provoiding-all-the-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I provide the all the below valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Suraj"
      ],
      "line": 8
    },
    {
      "cells": [
        "LastName",
        "Karwande"
      ],
      "line": 9
    },
    {
      "cells": [
        "Email",
        "suraj.karwande@gmail.com"
      ],
      "line": 10
    },
    {
      "cells": [
        "Telephone",
        "8668229150"
      ],
      "line": 11
    },
    {
      "cells": [
        "Password",
        "Suraj@123"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Continew Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see that the User account has successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 3439343600,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 1872266700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_the_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 895545400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 173303900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continew_Button()"
});
formatter.result({
  "duration": 827238300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_account_has_successfully_created()"
});
formatter.result({
  "duration": 102474200,
  "status": "passed"
});
formatter.after({
  "duration": 1143366600,
  "status": "passed"
});
formatter.before({
  "duration": 1622234200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify whether the user is not allowed to register on skiping the mandatory fields",
  "description": "",
  "id": "registration-functionality-scenarios;verify-whether-the-user-is-not-allowed-to-register-on-skiping-the-mandatory-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Register"
    },
    {
      "line": 17,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Continew Button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should see that the User account is not created",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I should see the error messages informing the User to fill the mandatory fields",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 3324601000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 3502132200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continew_Button()"
});
formatter.result({
  "duration": 468790800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_account_is_not_created()"
});
formatter.result({
  "duration": 82680100,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_the_error_messages_informing_the_User_to_fill_the_mandatory_fields()"
});
formatter.result({
  "duration": 395768100,
  "status": "passed"
});
formatter.after({
  "duration": 1134608700,
  "status": "passed"
});
formatter.before({
  "duration": 1468513900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify whether the user is able to register into the application by opting for Newsletter subsciption",
  "description": "",
  "id": "registration-functionality-scenarios;verify-whether-the-user-is-able-to-register-into-the-application-by-opting-for-newsletter-subsciption",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Register"
    },
    {
      "line": 25,
      "name": "@Three"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I provide the all the below valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Suraj"
      ],
      "line": 30
    },
    {
      "cells": [
        "LastName",
        "Karwande"
      ],
      "line": 31
    },
    {
      "cells": [
        "Email",
        "suraj.karwande2@gmail.com"
      ],
      "line": 32
    },
    {
      "cells": [
        "Telephone",
        "8668229150"
      ],
      "line": 33
    },
    {
      "cells": [
        "Password",
        "Suraj@123"
      ],
      "line": 34
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I subscribe to Newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Continew Button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see that the User account has successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 4194619100,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 1795252900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_the_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 987256000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 177099900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_subscribe_to_Newsletter()"
});
formatter.result({
  "duration": 187277500,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continew_Button()"
});
formatter.result({
  "duration": 652166100,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_account_has_successfully_created()"
});
formatter.result({
  "duration": 86911600,
  "status": "passed"
});
formatter.after({
  "duration": 1022306800,
  "status": "passed"
});
formatter.before({
  "duration": 1420761900,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify whether the user is restricted from creating a duplicate account",
  "description": "",
  "id": "registration-functionality-scenarios;verify-whether-the-user-is-restricted-from-creating-a-duplicate-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@Register"
    },
    {
      "line": 40,
      "name": "@Four"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I provide the below duplicate details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Suraj"
      ],
      "line": 45
    },
    {
      "cells": [
        "LastName",
        "Karwande"
      ],
      "line": 46
    },
    {
      "cells": [
        "Email",
        "suraj.karwande@gmail.com"
      ],
      "line": 47
    },
    {
      "cells": [
        "Telephone",
        "8668229150"
      ],
      "line": 48
    },
    {
      "cells": [
        "Password",
        "Suraj@123"
      ],
      "line": 49
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on Continew Button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I should see that the User is restricted from creating duplicate account",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 7428505400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 2187417200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_the_below_duplicate_details(DataTable)"
});
formatter.result({
  "duration": 946037400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 175001600,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continew_Button()"
});
formatter.result({
  "duration": 636880200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_is_restricted_from_creating_duplicate_account()"
});
formatter.result({
  "duration": 62896700,
  "status": "passed"
});
formatter.after({
  "duration": 1161095700,
  "status": "passed"
});
});