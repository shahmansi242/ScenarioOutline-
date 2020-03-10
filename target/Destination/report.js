$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/invalidsenario.feature");
formatter.feature({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalidsenario"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.step({
  "name": "user should not be able to login successfully and user should see \"\u003cErrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "ErrorMessage"
      ]
    },
    {
      "cells": [
        "Mansi",
        "SHAH",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Admin",
        "SHAH",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Admin12",
        "admin123",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "admin",
        "Admin123",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "RADAHA",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "Patel",
        "Username cannot be empty"
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
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalidsenario"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"Mansi\" and \"SHAH\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userEnterInvalidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to login successfully and user should see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userShouldNotBeAbleToLoginSuccessfullyAndUserShouldSee(java.lang.String)"
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
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalidsenario"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"Admin\" and \"SHAH\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userEnterInvalidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to login successfully and user should see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userShouldNotBeAbleToLoginSuccessfullyAndUserShouldSee(java.lang.String)"
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
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalidsenario"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"Admin12\" and \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userEnterInvalidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to login successfully and user should see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userShouldNotBeAbleToLoginSuccessfullyAndUserShouldSee(java.lang.String)"
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
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalidsenario"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"admin\" and \"Admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userEnterInvalidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to login successfully and user should see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userShouldNotBeAbleToLoginSuccessfullyAndUserShouldSee(java.lang.String)"
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
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalidsenario"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"\" and \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userEnterInvalidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to login successfully and user should see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userShouldNotBeAbleToLoginSuccessfullyAndUserShouldSee(java.lang.String)"
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
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalidsenario"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"Admin\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userEnterInvalidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to login successfully and user should see \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userShouldNotBeAbleToLoginSuccessfullyAndUserShouldSee(java.lang.String)"
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
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalidsenario"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userEnterInvalidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to login successfully and user should see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userShouldNotBeAbleToLoginSuccessfullyAndUserShouldSee(java.lang.String)"
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
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalidsenario"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"RADAHA\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userEnterInvalidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to login successfully and user should see \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userShouldNotBeAbleToLoginSuccessfullyAndUserShouldSee(java.lang.String)"
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
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalidsenario"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"\" and \"Patel\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userEnterInvalidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: Element \u003cinput id\u003d\"btnLogin\" class\u003d\"button\" name\u003d\"Submit\" type\u003d\"submit\"\u003e is not clickable at point (675,474) because another element \u003ciframe\u003e obscures it\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-RQ8000M\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 73.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200217142647, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 14500, moz:profile: C:\\Users\\MAHARAJ\\AppData\\Lo..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8d6e4e96-b719-416f-bedb-aeb46edc92a5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat org.WebTest2.Utils.clickOnElement(Utils.java:16)\r\n\tat org.WebTest2.HomePage.userClickOnLoginButton(HomePage.java:26)\r\n\tat WebTest2.MyStepdefs.userClickOnLogin(MyStepdefs.java:26)\r\n\tat ✽.user click on login(file:///C:/Users/MAHARAJ/IdeaProjects/ScenarioOutline/./src/test/resources/features/invalidsenario.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should not be able to login successfully and user should see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest2.MyStepdefs.userShouldNotBeAbleToLoginSuccessfullyAndUserShouldSee(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("...Scenario Failed...please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});