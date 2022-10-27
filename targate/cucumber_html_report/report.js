$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality scenarios",
  "description": "",
  "id": "login-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2488752800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether the User is able to login with valid credentials",
  "description": "",
  "id": "login-functionality-scenarios;verify-whether-the-user-is-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I login to the Applicatio using Username \"suraj.karwande@gmail.com\" and Password \"Suraj@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see that the User is able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 12317265500,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_page()"
});
formatter.result({
  "duration": 2677956500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suraj.karwande@gmail.com",
      "offset": 42
    },
    {
      "val": "Suraj@123",
      "offset": 82
    }
  ],
  "location": "Login.i_login_to_the_Applicatio_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 860335500,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_that_the_User_is_able_to_login_successfully()"
});
formatter.result({
  "duration": 59238000,
  "status": "passed"
});
formatter.after({
  "duration": 914048600,
  "status": "passed"
});
formatter.before({
  "duration": 1322024600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify whether the User is not able to login with invalid credentials",
  "description": "",
  "id": "login-functionality-scenarios;verify-whether-the-user-is-not-able-to-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Login"
    },
    {
      "line": 10,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I navigate to Account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I login to the Applicatio using Username \"surajkarwande05@gmail.com\" and Password \"Srk@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see an error message that the credentials are invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 12914154500,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_page()"
});
formatter.result({
  "duration": 2650213500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surajkarwande05@gmail.com",
      "offset": 42
    },
    {
      "val": "Srk@123",
      "offset": 83
    }
  ],
  "location": "Login.i_login_to_the_Applicatio_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 653763200,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_that_the_credentials_are_invalid()"
});
formatter.result({
  "duration": 45827800,
  "status": "passed"
});
formatter.after({
  "duration": 861885500,
  "status": "passed"
});
formatter.before({
  "duration": 1460612700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify whether the User is not able to login without providing credentials",
  "description": "",
  "id": "login-functionality-scenarios;verify-whether-the-user-is-not-able-to-login-without-providing-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Login"
    },
    {
      "line": 17,
      "name": "@Three"
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
  "name": "I navigate to Account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I login to the Applicatio using Username \"\" and Password \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should see an error message that the credentials are invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 14033171400,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_page()"
});
formatter.result({
  "duration": 2296303100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 42
    },
    {
      "val": "",
      "offset": 58
    }
  ],
  "location": "Login.i_login_to_the_Applicatio_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 521646800,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_that_the_credentials_are_invalid()"
});
formatter.result({
  "duration": 47152700,
  "status": "passed"
});
formatter.after({
  "duration": 851039000,
  "status": "passed"
});
formatter.before({
  "duration": 1522387400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify whether the User is not able to login with invalid credentials",
  "description": "",
  "id": "login-functionality-scenarios;verify-whether-the-user-is-not-able-to-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Login"
    },
    {
      "line": 23,
      "name": "@Four"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I navigate to Account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I reset the forgotten password for email \"suraj.karwande@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I should see a message informing the User that information related to reseting password have been sent to email address",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 10163387800,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_page()"
});
formatter.result({
  "duration": 2980032000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suraj.karwande@gmail.com",
      "offset": 42
    }
  ],
  "location": "Login.i_reset_the_forgotten_password_for_email(String)"
});
formatter.result({
  "duration": 1242195500,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_a_message_informing_the_User_that_information_related_to_reseting_password_have_been_sent_to_email_address()"
});
formatter.result({
  "duration": 39607400,
  "status": "passed"
});
formatter.after({
  "duration": 867329200,
  "status": "passed"
});
formatter.uri("FeatureFiles/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration functionality scenarios",
  "description": "",
  "id": "registration-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1264491300,
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
  "duration": 10184441300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 5993084100,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_the_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 503722900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 100669000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continew_Button()"
});
formatter.result({
  "duration": 718254200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_account_has_successfully_created()"
});
formatter.result({
  "duration": 62524500,
  "status": "passed"
});
formatter.after({
  "duration": 947940100,
  "status": "passed"
});
formatter.before({
  "duration": 1337398300,
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
  "duration": 12053349900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 20262271500,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continew_Button()"
});
formatter.result({
  "duration": 12588954400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_account_is_not_created()"
});
formatter.result({
  "duration": 48314000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_the_error_messages_informing_the_User_to_fill_the_mandatory_fields()"
});
formatter.result({
  "duration": 212265700,
  "status": "passed"
});
formatter.after({
  "duration": 923817900,
  "status": "passed"
});
formatter.before({
  "duration": 1710110800,
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
  "duration": 15958474100,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 5419947500,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_the_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 480167200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 102831400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_subscribe_to_Newsletter()"
});
formatter.result({
  "duration": 84827800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continew_Button()"
});
formatter.result({
  "duration": 614265600,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_account_has_successfully_created()"
});
formatter.result({
  "duration": 59149000,
  "status": "passed"
});
formatter.after({
  "duration": 948594500,
  "status": "passed"
});
formatter.before({
  "duration": 1266787100,
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
  "duration": 10551065300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 11594427700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_the_below_duplicate_details(DataTable)"
});
formatter.result({
  "duration": 472163300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 104725300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continew_Button()"
});
formatter.result({
  "duration": 587914000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_is_restricted_from_creating_duplicate_account()"
});
formatter.result({
  "duration": 38215100,
  "status": "passed"
});
formatter.after({
  "duration": 894457300,
  "status": "passed"
});
});