$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Automation/NHSCost.feature");
formatter.feature({
  "name": "As a citizen of the UK",
  "description": "  I need to know what help I can get with my NHS costs\n  So that I can get the treatment I need",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with blood sugar levels as No",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@DiabetesYes"
    },
    {
      "name": "@BloodSugarNo"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBloodSugar\u003e for do you need to take medication to keep your blood sugar levels stable",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "Pregnant",
        "Injury",
        "Diabetes",
        "BloodSugar",
        "NHSCharges",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "No",
        "NO",
        "Yes",
        "Yes",
        "Yes",
        "No",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "No",
        "NO",
        "Yes",
        "Yes",
        "Yes",
        "No",
        "Yes",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with blood sugar levels as No",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@DiabetesYes"
    },
    {
      "name": "@BloodSugarNo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with blood sugar levels as No",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@DiabetesYes"
    },
    {
      "name": "@BloodSugarNo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with blood sugar levels as Yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@DiabetesYes"
    },
    {
      "name": "@BloodSugarYes"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBloodSugar\u003e for do you need to take medication to keep your blood sugar levels stable",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "Pregnant",
        "Injury",
        "Diabetes",
        "BloodSugar",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "NO",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with blood sugar levels as Yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@DiabetesYes"
    },
    {
      "name": "@BloodSugarYes"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with care home as Yes and local council as No",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLocalCouncil\u003e for do you get help to pay for your care home from your local council",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "Pregnant",
        "Injury",
        "Diabetes",
        "LocalCouncil",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with care home as Yes and local council as No",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for do you need to take medication to keep your blood sugar levels stable",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsDiabetesForDoYouNeedToTakeMedicationToKeepYourBloodSugarLevelsStable(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with care home as Yes and local council as Yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLocalCouncil\u003e for do you get help to pay for your care home from your local council",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "Pregnant",
        "Injury",
        "Diabetes",
        "LocalCouncil",
        "CareHome"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with care home as Yes and local council as Yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for do you need to take medication to keep your blood sugar levels stable",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsDiabetesForDoYouNeedToTakeMedicationToKeepYourBloodSugarLevelsStable(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you need to take medication to keep your blood sugar levels stable",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsDiabetesForDoYouNeedToTakeMedicationToKeepYourBloodSugarLevelsStable(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get help to pay for your care home from your local council",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsLocalCouncilForDoYouGetHelpToPayForYourCareHomeFromYourLocalCouncil(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get help to pay for your care home from your local council",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsLocalCouncilForDoYouGetHelpToPayForYourCareHomeFromYourLocalCouncil(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as no, tax credit income as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxCreditType\u003e for which type of tax credit do you get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cIncome\u003e for is your household income £15276 or less",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "TaxCreditType",
        "Income",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "No",
        "Yes",
        "NOT YET",
        "Tax Credit",
        "Working Tax Credit on its own, including a disability element",
        "No",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "No",
        "Yes",
        "NOT YET",
        "Tax Credit",
        "Working Tax Credit and Child Tax Credit together",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "No",
        "Yes",
        "NOT YET",
        "Tax Credit",
        "Child Tax Credit on its own",
        "No",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "No",
        "Yes",
        "NO",
        "Tax Credit",
        "Working Tax Credit on its own, including a disability element",
        "No",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "No",
        "Yes",
        "NO",
        "Tax Credit",
        "Working Tax Credit and Child Tax Credit together",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "No",
        "Yes",
        "NO",
        "Tax Credit",
        "Child Tax Credit on its own",
        "No",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, tax credit income as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit on its own, including a disability element for which type of tax credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, tax credit income as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, tax credit income as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, tax credit income as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, tax credit income as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, tax credit income as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Child Tax Credit on its own for which type of tax credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Child Tax Credit on its own for which type of tax credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit and Child Tax Credit together for which type of tax credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit and Child Tax Credit together for which type of tax credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit on its own, including a disability element for which type of tax credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as no, tax credit income as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxCreditType\u003e for which type of tax credit do you get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cIncome\u003e for is your household income £15276 or less",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "TaxCreditType",
        "Income"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NOT YET",
        "Tax Credit",
        "Working Tax Credit on its own, including a disability element",
        "YES"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NOT YET",
        "Tax Credit",
        "Working Tax Credit and Child Tax Credit together",
        "YES"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NOT YET",
        "Tax Credit",
        "Child Tax Credit on its own",
        "YES"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NO",
        "Tax Credit",
        "Working Tax Credit on its own, including a disability element",
        "YES"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NO",
        "Tax Credit",
        "Working Tax Credit and Child Tax Credit together",
        "YES"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NO",
        "Tax Credit",
        "Child Tax Credit on its own",
        "YES"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, tax credit income as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, tax credit income as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, tax credit income as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit on its own, including a disability element for which type of tax credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects YES for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, tax credit income as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, tax credit income as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit on its own, including a disability element for which type of tax credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, tax credit income as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects YES for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as no, TaxCreditType as Working Tax Credit on its own",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxCreditType\u003e for which type of tax credit do you get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "TaxCreditType",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NOT YET",
        "Tax Credit",
        "Working Tax Credit on its own",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NO",
        "Tax Credit",
        "Working Tax Credit on its own",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, TaxCreditType as Working Tax Credit on its own",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit and Child Tax Credit together for which type of tax credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit and Child Tax Credit together for which type of tax credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects YES for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects YES for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit on its own for which type of tax credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Child Tax Credit on its own for which type of tax credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, TaxCreditType as Working Tax Credit on its own",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects YES for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Child Tax Credit on its own for which type of tax credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as no,Tax Benefits as Income Support",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NOT YET",
        "Income Support"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NO",
        "Income Support"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no,Tax Benefits as Income Support",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects YES for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Income Support for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit on its own for which type of tax credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no,Tax Benefits as Income Support",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.resultformatter.step(({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
}{
  "status": "passed"
});
);
formatter.match(formatter.{
  "location": "NHSHomePage.signUpLogin()"
});
step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as Yes,ESA as Contribution Based ESA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cESA\u003e for which type of Employment and Support Allowance ESA do you get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "ESA",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NOT YET",
        "ESA",
        "Contribution based ESA",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NO",
        "ESA",
        "Contribution based ESA",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as Yes,ESA as Contribution Based ESA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as no,ESA as Income Related ESA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cESA\u003e for which type of Employment and Support Allowance ESA do you get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "ESA"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NOT YET",
        "ESA",
        "Income Related ESA"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NO",
        "ESA",
        "Income Related ESA"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no,ESA as Income Related ESA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ESA for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Contribution based ESA for which type of Employment and Support Allowance ESA do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfEmploymentAndSupportAllowanceESADoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Income Support for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ESA for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Income Related ESA for which type of Employment and Support Allowance ESA do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfEmploymentAndSupportAllowanceESADoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "error_message": "java.lang.RuntimeException\r\n\tat utils.Reporter.reportStep(Reporter.java:128)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.clickJavaScriptExecutor(SeleniumWrapper.java:352)\r\n\tat automationTesting.pages.NHSQuestionPage.userSelectsForWhichTypeOfEmploymentAndSupportAllowanceESADoYouGet(NHSQuestionPage.java:260)\r\n\tat ✽.User selects Income Related ESA for which type of Employment and Support Allowance ESA do you get(src/test/resources/features/Automation/NHSCost.feature:352)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no,ESA as Income Related ESA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as no, JSA as Contribution Based JSA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cJSA\u003e for which type of Jobseeker Allowance JSA do you get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "JSA",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NOT YET",
        "JSA",
        "Contribution based JSA",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NO",
        "JSA",
        "Contribution based JSA",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, JSA as Contribution Based JSA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ESA for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as no, JSA as Income Related JSA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cJSA\u003e for which type of Jobseeker Allowance JSA do you get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "JSA"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NOT YET",
        "JSA",
        "Income Related JSA"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NO",
        "JSA",
        "Income Related JSA"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, JSA as Income Related JSA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Income Related ESA for which type of Employment and Support Allowance ESA do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfEmploymentAndSupportAllowanceESADoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, JSA as Income Related JSA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as Yes,ESA as Contribution Based ESA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cESA\u003e for which type of Employment and Support Allowance ESA do you get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "ESA",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NOT YET",
        "ESA",
        "Contribution based ESA",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NO",
        "ESA",
        "Contribution based ESA",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as Yes,ESA as Contribution Based ESA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects JSA for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects JSA for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as no, JSA as Contribution Based JSA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cJSA\u003e for which type of Jobseeker Allowance JSA do you get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "JSA",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NOT YET",
        "JSA",
        "Contribution based JSA",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NO",
        "JSA",
        "Contribution based JSA",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, JSA as Contribution Based JSA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Contribution based JSA for which type of Jobseeker Allowance JSA do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfJobseekerAllowanceJSADoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Income Related JSA for which type of Jobseeker Allowance JSA do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfJobseekerAllowanceJSADoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects JSA for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Income Related JSA for which type of Jobseeker Allowance JSA do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfJobseekerAllowanceJSADoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects JSA for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Contribution based JSA for which type of Jobseeker Allowance JSA do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfJobseekerAllowanceJSADoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ESA for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as no, PensionCredit as Credit Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPensionCredit\u003e for what type of Pension Credit do you get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "PensionCredit"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NOT YET",
        "Pension Credit",
        "Guarantee Credit only"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NOT YET",
        "Pension Credit",
        "Guarantee Credit with Savings Credit"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NO",
        "Pension Credit",
        "Guarantee Credit only"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NO",
        "Pension Credit",
        "Guarantee Credit with Savings Credit"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, PensionCredit as Credit Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Contribution based ESA for which type of Employment and Support Allowance ESA do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfEmploymentAndSupportAllowanceESADoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Pension Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Guarantee Credit only for what type of Pension Credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhatTypeOfPensionCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, PensionCredit as Credit Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Pension Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Guarantee Credit with Savings Credit for what type of Pension Credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhatTypeOfPensionCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, PensionCredit as Credit Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, PensionCredit as Credit Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Pension Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as no, PensionCredit as Saving Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPensionCredit\u003e for what type of Pension Credit do you get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "PensionCredit",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NOT YET",
        "Pension Credit",
        "Savings Credit",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NO",
        "Pension Credit",
        "Savings Credit",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, PensionCredit as Saving Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Guarantee Credit only for what type of Pension Credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhatTypeOfPensionCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Pension Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Savings Credit for what type of Pension Credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhatTypeOfPensionCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, PensionCredit as Saving Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Pension Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as no, benefits as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NOT YET",
        "No",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "NO",
        "No",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, benefits as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Savings Credit for what type of Pension Credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhatTypeOfPensionCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, benefits as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Pension Credit for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Guarantee Credit with Savings Credit for what type of Pension Credit do you get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhatTypeOfPensionCreditDoYouGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for do you get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as no, take home as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cJointUniversal\u003e for as part of your joint Universal Credit do you have any of these",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTakeHomeBool\u003e for did you have a combined take-home pay of \u003cTakeHomeValue\u003e or less in your last Universal Credit period",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "JointUniversal",
        "TakeHomeBool",
        "TakeHomeValue",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "Yes",
        "Yes",
        "No",
        "$935",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "Yes",
        "No",
        "No",
        "$435",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, take home as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, take home as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as no, take home as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cJointUniversal\u003e for as part of your joint Universal Credit do you have any of these",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTakeHomeBool\u003e for did you have a combined take-home pay of \u003cTakeHomeValue\u003e or less in your last Universal Credit period",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "JointUniversal",
        "TakeHomeBool",
        "TakeHomeValue",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "$935",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "NO",
        "Yes",
        "Yes",
        "No",
        "Yes",
        "$435",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, take home as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for as part of your joint Universal Credit do you have any of these",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsPartOfYourJointUniversalCreditDdoYouHaveAnyOfThese(String)"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as no, take home as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for as part of your joint Universal Credit do you have any of these",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsPartOfYourJointUniversalCreditDdoYouHaveAnyOfThese(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for did you have a combined take-home pay of $935 or less in your last Universal Credit period",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsJointUniversalForDidYouHaveACombinedTakeHomePayOfOrLessInYourLastUniversalCreditPeriod(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as yes, tax credit income as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxCreditType\u003e for which type of tax credit do you or your partner gets",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cIncome\u003e for is your household income £15276 or less",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "TaxCreditType",
        "Income",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "Tax Credit",
        "Working Tax Credit on its own, including a disability element",
        "No",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "Tax Credit",
        "Working Tax Credit and Child Tax Credit together",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "Tax Credit",
        "Child Tax Credit on its own",
        "No",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "Tax Credit",
        "Working Tax Credit on its own, including a disability element",
        "No",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "Tax Credit",
        "Working Tax Credit and Child Tax Credit together",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "Tax Credit",
        "Child Tax Credit on its own",
        "No",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, tax credit income as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for as part of your joint Universal Credit do you have any of these",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsPartOfYourJointUniversalCreditDdoYouHaveAnyOfThese(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for as part of your joint Universal Credit do you have any of these",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsPartOfYourJointUniversalCreditDdoYouHaveAnyOfThese(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for did you have a combined take-home pay of $435 or less in your last Universal Credit period",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsJointUniversalForDidYouHaveACombinedTakeHomePayOfOrLessInYourLastUniversalCreditPeriod(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for did you have a combined take-home pay of $935 or less in your last Universal Credit period",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsJointUniversalForDidYouHaveACombinedTakeHomePayOfOrLessInYourLastUniversalCreditPeriod(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for did you have a combined take-home pay of $435 or less in your last Universal Credit period",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsJointUniversalForDidYouHaveACombinedTakeHomePayOfOrLessInYourLastUniversalCreditPeriod(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit on its own, including a disability element for which type of tax credit do you or your partner gets",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouOrYourPartnerGets(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, tax credit income as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, tax credit income as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, tax credit income as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Child Tax Credit on its own for which type of tax credit do you or your partner gets",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouOrYourPartnerGets(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, tax credit income as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit and Child Tax Credit together for which type of tax credit do you or your partner gets",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouOrYourPartnerGets(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, tax credit income as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit on its own, including a disability element for which type of tax credit do you or your partner gets",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouOrYourPartnerGets(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit and Child Tax Credit together for which type of tax credit do you or your partner gets",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouOrYourPartnerGets(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Child Tax Credit on its own for which type of tax credit do you or your partner gets",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouOrYourPartnerGets(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as yes, tax credit income as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxCreditType\u003e for which type of tax credit do you or your partner gets",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cIncome\u003e for is your household income £15276 or less",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "TaxCreditType",
        "Income"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "Tax Credit",
        "Working Tax Credit on its own, including a disability element",
        "YES"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "Tax Credit",
        "Working Tax Credit and Child Tax Credit together",
        "YES"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "Tax Credit",
        "Child Tax Credit on its own",
        "YeS"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "Tax Credit",
        "Working Tax Credit on its own, including a disability element",
        "YES"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "Tax Credit",
        "Working Tax Credit and Child Tax Credit together",
        "YES"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "Tax Credit",
        "Child Tax Credit on its own",
        "YeS"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, tax credit income as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit on its own, including a disability element for which type of tax credit do you or your partner gets",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouOrYourPartnerGets(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects YES for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, tax credit income as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, tax credit income as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, tax credit income as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit and Child Tax Credit together for which type of tax credit do you or your partner gets",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouOrYourPartnerGets(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, tax credit income as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects YES for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Child Tax Credit on its own for which type of tax credit do you or your partner gets",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouOrYourPartnerGets(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, tax credit income as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects YeS for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Child Tax Credit on its own for which type of tax credit do you or your partner gets",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouOrYourPartnerGets(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects YeS for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit and Child Tax Credit together for which type of tax credit do you or your partner gets",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouOrYourPartnerGets(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects YES for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as yes, TaxCreditType as Working Tax Credit on its own",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxCreditType\u003e for which type of tax credit do you or your partner gets",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "TaxCreditType",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "Tax Credit",
        "Working Tax Credit on its own",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "Tax Credit",
        "Working Tax Credit on its own",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, TaxCreditType as Working Tax Credit on its own",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit on its own, including a disability element for which type of tax credit do you or your partner gets",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouOrYourPartnerGets(String)"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects YES for is your household income £15276 or less",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForIsYourHouseholdIncome15276OrLess(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit on its own for which type of tax credit do you or your partner gets",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouOrYourPartnerGets(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, TaxCreditType as Working Tax Credit on its own",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Tax Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Working Tax Credit on its own for which type of tax credit do you or your partner gets",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfTaxCreditDoYouOrYourPartnerGets(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as yes,ESA as Income Related ESA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cESA\u003e for which type of Employment and Support Allowance ESA do you or your partner get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "ESA"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "ESA",
        "Income Related ESA"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "ESA",
        "Income Related ESA"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes,ESA as Income Related ESA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as Yes,Tax Benefits as Income Support",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "Income Support"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "Income Support"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as Yes,Tax Benefits as Income Support",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ESA for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Income Related ESA for which type of Employment and Support Allowance ESA do you or your partner get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfEmploymentAndSupportAllowanceESADoYouOrYourPartnerGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Income Support for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as Yes,Tax Benefits as Income Support",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as yes,ESA as Contribution Based ESA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cESA\u003e for which type of Employment and Support Allowance ESA do you or your partner get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "ESA",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "ESA",
        "Contribution based ESA",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "ESA",
        "Contribution based ESA",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes,ESA as Contribution Based ESA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Income Support for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ESA for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Contribution based ESA for which type of Employment and Support Allowance ESA do you or your partner get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfEmploymentAndSupportAllowanceESADoYouOrYourPartnerGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes,ESA as Contribution Based ESA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as yes,ESA as Income Related ESA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cESA\u003e for which type of Employment and Support Allowance ESA do you or your partner get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "ESA"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "ESA",
        "Income Related ESA"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "ESA",
        "Income Related ESA"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes,ESA as Income Related ESA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ESA for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Contribution based ESA for which type of Employment and Support Allowance ESA do you or your partner get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfEmploymentAndSupportAllowanceESADoYouOrYourPartnerGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ESA for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Income Related ESA for which type of Employment and Support Allowance ESA do you or your partner get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfEmploymentAndSupportAllowanceESADoYouOrYourPartnerGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as yes, JSA as Contribution Based JSA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cJSA\u003e for which type of Jobseeker Allowance JSA do you or your partner get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "JSA",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "JSA",
        "Contribution based JSA",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "JSA",
        "Contribution based JSA",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, JSA as Contribution Based JSA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as yes, JSA as Income Related JSA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cJSA\u003e for which type of Jobseeker Allowance JSA do you or your partner get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "JSA"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "JSA",
        "Income Related JSA"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "JSA",
        "Income Related JSA"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, JSA as Income Related JSA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects JSA for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Contribution based JSA for which type of Jobseeker Allowance JSA do you or your partner get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfJobseekerAllowanceJSADoYouOrYourPartnerGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects JSA for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Income Related JSA for which type of Jobseeker Allowance JSA do you or your partner get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfJobseekerAllowanceJSADoYouOrYourPartnerGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, JSA as Income Related JSA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as yes, PensionCredit as Credit Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPensionCredit\u003e for what type of Pension Credit do you or your partner get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "PensionCredit"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "Pension Credit",
        "Guarantee Credit only"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "Pension Credit",
        "Guarantee Credit with Savings Credit"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "Pension Credit",
        "Guarantee Credit only"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "Pension Credit",
        "Guarantee Credit with Savings Credit"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, PensionCredit as Credit Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects JSA for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Income Related JSA for which type of Jobseeker Allowance JSA do you or your partner get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfJobseekerAllowanceJSADoYouOrYourPartnerGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Pension Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, PensionCredit as Credit Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Guarantee Credit with Savings Credit for what type of Pension Credit do you or your partner get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhatTypeOfPensionCreditDoYouOrYourPartnerGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as yes, JSA as Contribution Based JSA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cJSA\u003e for which type of Jobseeker Allowance JSA do you or your partner get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "JSA",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "JSA",
        "Contribution based JSA",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "JSA",
        "Contribution based JSA",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, JSA as Contribution Based JSA",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as yes, PensionCredit as Savings Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPensionCredit\u003e for what type of Pension Credit do you or your partner get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "PensionCredit",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "Pension Credit",
        "Savings Credit",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "Pension Credit",
        "Savings Credit",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, PensionCredit as Savings Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects JSA for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Contribution based JSA for which type of Jobseeker Allowance JSA do you or your partner get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhichTypeOfJobseekerAllowanceJSADoYouOrYourPartnerGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Pension Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Guarantee Credit only for what type of Pension Credit do you or your partner get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhatTypeOfPensionCreditDoYouOrYourPartnerGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Pension Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Savings Credit for what type of Pension Credit do you or your partner get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhatTypeOfPensionCreditDoYouOrYourPartnerGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as yes, PensionCredit as Credit Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPensionCredit\u003e for what type of Pension Credit do you or your partner get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "PensionCredit"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "Pension Credit",
        "Guarantee Credit only"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "Pension Credit",
        "Guarantee Credit with Savings Credit"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "Pension Credit",
        "Guarantee Credit only"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "Pension Credit",
        "Guarantee Credit with Savings Credit"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, PensionCredit as Credit Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, PensionCredit as Credit Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as yes, benefits as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "No",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "No",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, benefits as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Pension Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Guarantee Credit with Savings Credit for what type of Pension Credit do you or your partner get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhatTypeOfPensionCreditDoYouOrYourPartnerGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Pension Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Guarantee Credit only for what type of Pension Credit do you or your partner get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhatTypeOfPensionCreditDoYouOrYourPartnerGet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.after({
  "status": "passed"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, benefits as no",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as yes, PensionCredit as Savings Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button based on the \u003cUniversalCredit\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cBenefits\u003e for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPensionCredit\u003e for what type of Pension Credit do you or your partner get",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cPregnant\u003e for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInjury\u003e for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cDiabetes\u003e for do you have diabetes",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cNHSCharges\u003e for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cGlaucoma\u003e for do you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cCareHome\u003e for do you live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cInvestements\u003e for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "Benefits",
        "PensionCredit",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NOT YET",
        "Pension Credit",
        "Savings Credit",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "NO",
        "Pension Credit",
        "Savings Credit",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, PensionCredit as Savings Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NOT YET for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button based on the NOT YET",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects No for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.scenarioOutline({
  "name": "User verifies the NHS Cost with live without partner as yes, take home as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the birthdate \u003cBirthDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cLiveWithPartner\u003e for do you live with a partner",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTaxBenefits\u003e for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cUniversalCredit\u003e for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cJointUniversal\u003e for as part of your joint Universal Credit do you have any of these",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \u003cTakeHomeBool\u003e for did you and your partner have a combined take-home pay of \u003cTakeHomeValue\u003e or less in your last Universal Credit period",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BirthDate",
        "LiveWithPartner",
        "TaxBenefits",
        "UniversalCredit",
        "JointUniversal",
        "TakeHomeBool",
        "TakeHomeValue",
        "Pregnant",
        "Injury",
        "Diabetes",
        "NHSCharges",
        "Glaucoma",
        "CareHome",
        "Investements"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "$935",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    },
    {
      "cells": [
        "Inbetween 18 to 60",
        "Yes",
        "Yes",
        "Yes",
        "No",
        "Yes",
        "$435",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO",
        "NO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User verifies the NHS Cost with live without partner as yes, take home as yes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NHSBSA"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the start now button in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NHSHomePage.signUpLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "error_message": "java.lang.StackOverflowError\r\n\tat java.lang.String.equalsIgnoreCase(String.java:1109)\r\n\tat sun.net.spi.DefaultProxySelector$3.run(DefaultProxySelector.java:219)\r\n\tat sun.net.spi.DefaultProxySelector$3.run(DefaultProxySelector.java:209)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat sun.net.spi.DefaultProxySelector.select(DefaultProxySelector.java:208)\r\n\tat okhttp3.internal.connection.RouteSelector.resetNextProxy(RouteSelector.java:129)\r\n\tat okhttp3.internal.connection.RouteSelector.\u003cinit\u003e(RouteSelector.java:63)\r\n\tat okhttp3.internal.connection.StreamAllocation.\u003cinit\u003e(StreamAllocation.java:101)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:111)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:101)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:298)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat ✽.User clicks on Next button(src/test/resources/features/Automation/NHSCost.feature:1021)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects NO for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button based on the NO",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButtonBasedOntheUniversalCredit(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects Pension Credit for do you or your partner get any of these benefits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects Savings Credit for what type of Pension Credit do you or your partner get",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsForWhatTypeOfPensionCreditDoYouOrYourPartnerGet(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects NO for are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "skipped"
});
formatter.result({
  "error_message": "java.lang.StackOverflowError\r\n\tat java.lang.String.equalsIgnoreCase(String.java:1109)\r\n\tat sun.net.spi.DefaultProxySelector$3.run(DefaultProxySelector.java:219)\r\n\tat sun.net.spi.DefaultProxySelector$3.run(DefaultProxySelector.java:209)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat sun.net.spi.DefaultProxySelector.select(DefaultProxySelector.java:208)\r\n\tat okhttp3.internal.connection.RouteSelector.resetNextProxy(RouteSelector.java:129)\r\n\tat okhttp3.internal.connection.RouteSelector.\u003cinit\u003e(RouteSelector.java:63)\r\n\tat okhttp3.internal.connection.StreamAllocation.\u003cinit\u003e(StreamAllocation.java:101)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:111)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:101)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:298)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat ✽.User click on the start now button in the home page(src/test/resources/features/Automation/NHSCost.feature:1144)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User selects ENGLAND as country",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsCountry(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects No for GP practice in Scotland or Walves",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForGPPracticeInScotlandOrWalves(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects ENGLAND as country for dental practice",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsENGLANDAsCountryForDentalPractice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters the birthdate Inbetween 18 to 60",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userEntersTheBirthdateLessThanYears(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects Yes for do you live with a partner",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLiveWithAPartner(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects Yes for do you or your partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects Yes for do you or your partner get paid Universal Credit",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects Yes for as part of your joint Universal Credit do you have any of these",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsAsPartOfYourJointUniversalCreditDdoYouHaveAnyOfThese(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects Yes for did you and your partner have a combined take-home pay of $935 or less in your last Universal Credit period",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsJointUniversalForDidYouAndYourPartnerHaveACombinedTakeHomePayOfOrLessInYourLastUniversalCreditPeriod(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.RuntimeException\r\n\tat utils.Reporter.reportStep(Reporter.java:128)\r\n\tat wrappers.SeleniumWrapper.quitBrowser(SeleniumWrapper.java:285)\r\n\tat wrappers.Cucumber.executeAfterScenario(Cucumber.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:53)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:56)\r\n\tat automationTesting.runner.AutomationTestRunner.runFeature(AutomationTestRunner.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:75)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:14)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:750)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "java.lang.RuntimeException\r\n\tat utils.Reporter.reportStep(Reporter.java:128)\r\n\tat wrappers.SeleniumWrapper.quitBrowser(SeleniumWrapper.java:285)\r\n\tat wrappers.Cucumber.executeAfterScenario(Cucumber.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:53)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:56)\r\n\tat automationTesting.runner.AutomationTestRunner.runFeature(AutomationTestRunner.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:75)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:14)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:750)\r\n",
  "status": "failed"
});
formatter.result({
  "error_message": "java.lang.StackOverflowError\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat sun.net.spi.DefaultProxySelector.select(DefaultProxySelector.java:208)\r\n\tat okhttp3.internal.connection.RouteSelector.resetNextProxy(RouteSelector.java:129)\r\n\tat okhttp3.internal.connection.RouteSelector.\u003cinit\u003e(RouteSelector.java:63)\r\n\tat okhttp3.internal.connection.StreamAllocation.\u003cinit\u003e(StreamAllocation.java:101)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:111)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:101)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:298)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat wrappers.SeleniumWrapper.getScreenshotNumber(SeleniumWrapper.java:301)\r\n\tat utils.Reporter.reportStep(Reporter.java:116)\r\n\tat utils.Reporter.reportStep(Reporter.java:138)\r\n\tat ✽.User clicks on Next button(src/test/resources/features/Automation/NHSCost.feature:1078)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User selects NO for do you have an injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects NO for do you have diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveDiabetes(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects NO for to check what help you can get with NHS charges",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects NO for do you have glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveGlaucoma(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects NO for do you live permanently in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouLivePermanentlyInACareHome(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects NO for do you have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userClicksOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User could get help to pay for your NHS costs",
  "keyword": "And "
});
formatter.match({
  "location": "NHSQuestionPage.userCouldGetHelpToPayForYourNHSCosts()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.RuntimeException\r\n\tat utils.Reporter.reportStep(Reporter.java:128)\r\n\tat wrappers.SeleniumWrapper.quitBrowser(SeleniumWrapper.java:285)\r\n\tat wrappers.Cucumber.executeAfterScenario(Cucumber.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:53)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:56)\r\n\tat automationTesting.runner.AutomationTestRunner.runFeature(AutomationTestRunner.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:75)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:14)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:750)\r\n",
  "status": "failed"
});
