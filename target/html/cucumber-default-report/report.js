$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddEmployee.feature");
formatter.feature({
  "name": "Add Employee",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addemployee"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigated_to_Add_Employee_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new Employee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addemployee"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I add \"John\", \"S\" and \"Smith\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_add_and_(String,String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#firstName\"}\n  (Session info: chrome\u003d79.0.3945.130)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-SI2CE0P\u0027, ip: \u002710.0.0.77\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\nesli\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61335}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 06f4dbb94178dc1e87109cefafed7d93\n*** Element info: {Using\u003did, value\u003dfirstName}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.clear(Unknown Source)\r\n\tat com.hrms.utils.CommonMethods.sendText(CommonMethods.java:190)\r\n\tat com.hrms.steps.AddEmployeeSteps.i_add_and_(AddEmployeeSteps.java:75)\r\n\tat ✽.I add \"John\", \"S\" and \"Smith\"(file:src/test/resources/features/AddEmployee.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click Save",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see Employee has been succesfully added",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_see_Employee_has_been_succesfully_added()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add new Employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I add \"\u003cFirstName\u003e\", \"\u003cMiddleName\u003e\" and \"\u003cLastName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click Save",
  "keyword": "And "
});
formatter.step({
  "name": "I see Employee with \"\u003cFirstName\u003e\", \"\u003cMiddleName\u003e\" and \"\u003cLastName\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "MiddleName",
        "LastName"
      ]
    },
    {
      "cells": [
        "James",
        "",
        "Smith"
      ]
    },
    {
      "cells": [
        "Jane",
        "J",
        "Smith"
      ]
    },
    {
      "cells": [
        "Sasha",
        "J",
        "Smith"
      ]
    },
    {
      "cells": [
        "David",
        "J",
        "Smith"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigated_to_Add_Employee_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new Employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addemployee"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I add \"James\", \"\" and \"Smith\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_add_and_(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Save",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see Employee with \"James\", \"\" and \"Smith\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_see_Employee_with_and_is_displayed(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigated_to_Add_Employee_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new Employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addemployee"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I add \"Jane\", \"J\" and \"Smith\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_add_and_(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Save",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see Employee with \"Jane\", \"J\" and \"Smith\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_see_Employee_with_and_is_displayed(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigated_to_Add_Employee_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new Employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addemployee"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I add \"Sasha\", \"J\" and \"Smith\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_add_and_(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Save",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see Employee with \"Sasha\", \"J\" and \"Smith\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_see_Employee_with_and_is_displayed(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigated_to_Add_Employee_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new Employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addemployee"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I add \"David\", \"J\" and \"Smith\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_add_and_(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Save",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see Employee with \"David\", \"J\" and \"Smith\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_see_Employee_with_and_is_displayed(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigated_to_Add_Employee_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add and Modify Employee Details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addemployee"
    },
    {
      "name": "@inProgress"
    }
  ]
});
formatter.step({
  "name": "I enter employee details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "MiddleName",
        "LastName"
      ]
    },
    {
      "cells": [
        "John",
        "J",
        "Smith"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_enter_employee_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Save",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to modify Employee Details",
  "rows": [
    {
      "cells": [
        "DriverLisence",
        "ExpirationDate",
        "SSN",
        "SIN",
        "Gender",
        "MaritalStatus",
        "Nationality",
        "DOB"
      ]
    },
    {
      "cells": [
        "N78787886",
        "2021-12-08",
        "123-45-6789",
        "7687687",
        "Male",
        "Other",
        "Afghan",
        "1980-10-10"
      ]
    },
    {
      "cells": [
        "Nuy89889800",
        "2018-12-08",
        "yiy-45-6789",
        "uyiy",
        "Female",
        "Married",
        "Burmese",
        "1980-10-10"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.modifyEmployeeDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigated_to_Add_Employee_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Employee without employee id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addemployee"
    }
  ]
});
formatter.step({
  "name": "I add firstName, middleName and last name",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I delete employee id",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click Save",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see employee without employee id is being added",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigated_to_Add_Employee_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Employee negative scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addemployee"
    }
  ]
});
formatter.step({
  "name": "I click Save",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see required error message next to the first and last name",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigated_to_Add_Employee_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "AddEmployee and Login Credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addemployee"
    }
  ]
});
formatter.step({
  "name": "I add firstName, middleName and last name",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on create login checkbox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I enter username, password and confirm password",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click Save",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see Employee has been succesfully added",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_see_Employee_has_been_succesfully_added()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});