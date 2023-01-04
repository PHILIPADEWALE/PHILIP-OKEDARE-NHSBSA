package automationTesting.pages;

import cucumber.api.java.en.And;
import repository.RepositoryContext;
import wrappers.SeleniumWrapper;
import wrappers.WrapperConstants;

public class NHSQuestionPage extends SeleniumWrapper {
    public RepositoryContext context = new RepositoryContext();;

    public NHSQuestionPage() throws InterruptedException {
        context.setContextCurrentPage("question_page");
        context.loadRepository();
        waitForTitleToLoad("Check what help you could get to pay for NHS costs - NHSBSA", WrapperConstants.MEDIUM_WAIT);
    }
    @And("User selects (.*) as country")
    public void userSelectsAsCountry(String countryName) {
        if(countryName.equalsIgnoreCase("england")){
        clickJavaScriptExecutor(context.getElement("selectCountryAsEngland"),"User selects ENGLAND as country");
        }
    }

    @And("User clicks on Next button")
    public void userClicksOnNextButton() {
        waitUntilElementVisible(context.getElement("nextButton"),  WrapperConstants.MEDIUM_WAIT);
        click(context.getElement("nextButton"),"User clicks on the next button");
    }

    @And("User selects (.*) for GP practice in Scotland or Walves")
    public void userSelectsNoForGPPracticeInScotlandOrWalves(String booleanValue) {
        clickJavaScriptExecutor(context.getElement("RadioButtonNo"),"User selects No as GP practice in Scotland or Wales?");
    }

    @And("User selects (.*) as country for dental practice")
    public void userSelectsENGLANDAsCountryForDentalPractice(String countryName) {
        if(countryName.equalsIgnoreCase("england")){
            clickJavaScriptExecutor(context.getElement("selectCountryAsEngland"),"User selects ENGLAND as country");
        }
    }

    @And("User enters the birthdate (.*)")
    public void userEntersTheBirthdateLessThanYears(String birthDayWindow) {

        if(birthDayWindow.equals("less than 18 years")){
            typeInput(context.getElement("BirthDate"),"30","Enter the Birth Date");
            typeInput(context.getElement("BirthMonth"),"10","Enter the Birth Month");
            typeInput(context.getElement("BirthYear"),"1993","Enter the Birth Year");
        }else if(birthDayWindow.equalsIgnoreCase("Inbetween 18 to 60")){
            typeInput(context.getElement("BirthDate"),"30","Enter the Birth Date");
            typeInput(context.getElement("BirthMonth"),"10","Enter the Birth Month");
            typeInput(context.getElement("BirthYear"),"1993","Enter the Birth Year");
        }
    }

    @And("User selects (.*) for do you live with a partner")
    public void userSelectsNoForDoYouLiveWithAPartner(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("no"))
            clickJavaScriptExecutor(context.getElement("RadioButtonNo"),"User selects No for do you live with your partner");
        else
            clickJavaScriptExecutor(context.getElement("RadioButtonYes"),"User selects Yes for do you live with your partner");
    }

    @And("User selects (.*) for do you claim any benefits or tax credits")
    public void userSelectsNoForDoYouClaimAnyBenefitsOrTaxCredits(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("no"))
            clickJavaScriptExecutor(context.getElement("RadioButtonNo"),"User selects No for do you claim any benefits or tax credits");
        else
            clickJavaScriptExecutor(context.getElement("RadioButtonYes"),"User selects Yes for do you claim any benefits or tax credits");
    }

    @And("User selects (.*) for are you pregnant or have you given birth in the last 12 months")
    public void userSelectsNoForAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("no"))
            clickJavaScriptExecutor(context.getElement("RadioButtonNo"),"User selects No for are you pregnant or have you given birth in the last 12 months");
        else
            clickJavaScriptExecutor(context.getElement("RadioButtonYes"),"User selects Yes for are you pregnant or have you given birth in the last 12 months");
    }

    @And("User selects (.*) for do you have an injury or illness caused by serving in the armed forces")
    public void userSelectsNoForDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("no"))
            clickJavaScriptExecutor(context.getElement("RadioButtonNo"),"User selects No for do you have an injury or illness caused by serving in the armed forces");
        else
            clickJavaScriptExecutor(context.getElement("RadioButtonYes"),"User selects Yes for do you have an injury or illness caused by serving in the armed forces");
    }

    @And("User selects (.*) for do you have diabetes")
    public void userSelectsNoForDoYouHaveDiabetes(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("no"))
            clickJavaScriptExecutor(context.getElement("RadioButtonNo"),"User selects No for do you have diabetes");
        else
            clickJavaScriptExecutor(context.getElement("RadioButtonYes"),"User selects Yes for do you have diabetes");
    }

    @And("User selects (.*) for to check what help you can get with NHS charges")
    public void userSelectsNoForToCheckWhatHelpYouCanGetWithNHSCharges(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("no"))
            clickJavaScriptExecutor(context.getElement("RadioButtonNo"),"User selects No for to check what help you can get with NHS charges");
        else
            clickJavaScriptExecutor(context.getElement("RadioButtonYes"),"User selects Yes for to check what help you can get with NHS charges");
    }

    @And("User selects (.*) for do you have glaucoma")
    public void userSelectsNoForDoYouHaveGlaucoma(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("no"))
        clickJavaScriptExecutor(context.getElement("RadioButtonNo"),"User selects No for do you have glaucoma");
    else
        clickJavaScriptExecutor(context.getElement("RadioButtonYes"),"User selects Yes for do you have glaucoma");
    }

    @And("User selects (.*) for do you live permanently in a care home")
    public void userSelectsNoForDoYouLivePermanentlyInACareHome(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("no"))
            clickJavaScriptExecutor(context.getElement("RadioButtonNo"),"User selects No for do you live permanently in a care home");
        else
            clickJavaScriptExecutor(context.getElement("RadioButtonYes"),"User selects Yes for do you live permanently in a care home");
    }

    @And("User selects (.*) for do you have more than £16000 in savings, investments or property")
    public void userSelectsNoForDoYouHaveMoreThan£InSavingsInvestmentsOrProperty(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("no"))
            clickJavaScriptExecutor(context.getElement("RadioButtonNo"),"User selects No for do you live permanently in a care home");
        else
            clickJavaScriptExecutor(context.getElement("RadioButtonYes"),"User selects Yes for do you live permanently in a care home");
    }

    @And("User could get help to pay for your NHS costs")
    public void userCouldGetHelpToPayForYourNHSCosts() {
       String actualResult =  getText(locateElement(context.getElement("EndResult")));
        reportStep(actualResult,Status.PASS);
    }

    @And("User selects (.*) for do you need to take medication to keep your blood sugar levels stable")
    public void userSelectsDiabetesForDoYouNeedToTakeMedicationToKeepYourBloodSugarLevelsStable(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("no"))
            clickJavaScriptExecutor(context.getElement("RadioButtonNo"),"User selects No for do you need to take medication to keep your blood sugar levels stable");
        else
            clickJavaScriptExecutor(context.getElement("RadioButtonYes"),"User selects Yes for do you need to take medication to keep your blood sugar levels stable");
    }

    @And("User selects (.*) for do you get help to pay for your care home from your local council")
    public void userSelectsLocalCouncilForDoYouGetHelpToPayForYourCareHomeFromYourLocalCouncil(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("no"))
            clickJavaScriptExecutor(context.getElement("RadioButtonNo"),"User selects No for do you get help to pay for your care home from your local council");
        else
            clickJavaScriptExecutor(context.getElement("RadioButtonYes"),"User selects Yes for do you get help to pay for your care home from your local council");
    }

    @And("User selects (.*) for do you or your partner claim any benefits or tax credits")
    public void userSelectsNoForDoYouOrYourPartnerClaimAnyBenefitsOrTaxCredits(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("no"))
            clickJavaScriptExecutor(context.getElement("RadioButtonNo"),"User selects No for do you or your partner claim any benefits or tax credits");
        else
            clickJavaScriptExecutor(context.getElement("RadioButtonYes"),"User selects Yes for do you or your partner claim any benefits or tax credits");
    }

    @And("User selects (.*) for do you or your partner get paid Universal Credit")
    public void userSelectsNoForDoYouOrYourPartnerGetPaidUniversalCredit(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("no"))
            clickJavaScriptExecutor(context.getElement("NoUniversal"),"User selects No for do you or your partner get paid Universal Credit");
        else if(booleanValue.equalsIgnoreCase("not yet"))
            clickJavaScriptExecutor(context.getElement("NotYetUniversal"),"User selects Not Yet for do you or your partner get paid Universal Credit");
        else
            clickJavaScriptExecutor(context.getElement("YesUniversal"),"User selects Yes for do you or your partner get paid Universal Credit");
    }
    @And("User selects (.*) for do you get paid Universal Credit")
    public void userSelectsNoForDoYouGetPaidUniversalCredit(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("no"))
            clickJavaScriptExecutor(context.getElement("NoUniversal"),"User selects No for do you get paid Universal Credit");
        else if(booleanValue.equalsIgnoreCase("not yet"))
            clickJavaScriptExecutor(context.getElement("NotYetUniversal"),"User selects Not Yet for do you get paid Universal Credit");
        else
            clickJavaScriptExecutor(context.getElement("YesUniversal"),"User selects Yes for do you get paid Universal Credit");
    }

    @And("User selects (.*) for do you or your partner get any of these benefits")
    public void userSelectsNoForDoYouOrYourPartnerGetAnyOfTheseBenifits(String value) {
        if(value.equalsIgnoreCase("tax credit"))
            clickJavaScriptExecutor(context.getElement("taxCredit"),"User selects Tax Credit for do you or your partner get any of these benefits");
        else if(value.equalsIgnoreCase("income support"))
            clickJavaScriptExecutor(context.getElement("incSupport"),"User selects Income Support for do you or your partner get any of these benefits");
        else if(value.equalsIgnoreCase("esa"))
            clickJavaScriptExecutor(context.getElement("esa"),"User selects Employment and Support Allowance (ESA) for do you or your partner get any of these benefits");
        else if(value.equalsIgnoreCase("jsa"))
            clickJavaScriptExecutor(context.getElement("jsa"),"User selects Jobseeker's Allowance (JSA) for do you or your partner get any of these benefits");
        else if(value.equalsIgnoreCase("pension credit"))
            clickJavaScriptExecutor(context.getElement("penCredit"),"User selects Pension Credit for do you or your partner get any of these benefits");
        else
            clickJavaScriptExecutor(context.getElement("continue"),"User selects No, we don't get any of these for do you or your partner get any of these benefits");
    }

    @And("User selects (.*) for do you get any of these benefits")
    public void userSelectsNoForDoYouGetAnyOfTheseBenifits(String value) {
        if(value.equalsIgnoreCase("tax credit"))
            clickJavaScriptExecutor(context.getElement("taxCredit"),"User selects Tax Credit for do you get any of these benefits");
        else if(value.equalsIgnoreCase("income support"))
            clickJavaScriptExecutor(context.getElement("incSupport"),"User selects Income Support for do you get any of these benefits");
        else if(value.equalsIgnoreCase("esa"))
            clickJavaScriptExecutor(context.getElement("esa"),"User selects Employment and Support Allowance (ESA) for do you get any of these benefits");
        else if(value.equalsIgnoreCase("jsa"))
            clickJavaScriptExecutor(context.getElement("jsa"),"User selects Jobseeker's Allowance (JSA) for do you get any of these benefits");
        else if(value.equalsIgnoreCase("pension credit"))
            clickJavaScriptExecutor(context.getElement("penCredit"),"User selects Pension Credit for do you get any of these benefits");
        else
            clickJavaScriptExecutor(context.getElement("continue"),"User selects No, we don't get any of these for do you get any of these benefits");
    }

    @And("User selects (.*) for which type of tax credit do you or your partner gets")
    public void userSelectsForWhichTypeOfTaxCreditDoYouOrYourPartnerGets(String value) {
        if(value.equalsIgnoreCase("working tax credit on its own"))
            clickJavaScriptExecutor(context.getElement("workingTaxCredit"),"User selects "+value+" for which type of tax credit do you or your partner gets");
        else if(value.equalsIgnoreCase("working tax credit and child tax credit together"))
            clickJavaScriptExecutor(context.getElement("workingChildTaxCredit"),"User selects "+value+" for which type of tax credit do you or your partner gets");
        else if(value.equalsIgnoreCase("child tax credit on its own"))
            clickJavaScriptExecutor(context.getElement("childTaxCredit"),"User selects "+value+" for which type of tax credit do you or your partner gets");
        else
            clickJavaScriptExecutor(context.getElement("workingTaxCreditWithDisability"),"User selects "+value+" for which type of tax credit do you or your partner gets");
    }

    @And("User selects (.*) for which type of tax credit do you get")
    public void userSelectsForWhichTypeOfTaxCreditDoYouGet(String value) {
        if(value.equalsIgnoreCase("working tax credit on its own"))
            clickJavaScriptExecutor(context.getElement("workingTaxCredit"),"User selects "+value+" for which type of tax credit do you get");
        else if(value.equalsIgnoreCase("working tax credit and child tax credit together"))
            clickJavaScriptExecutor(context.getElement("workingChildTaxCredit"),"User selects "+value+" for which type of tax credit do you get");
        else if(value.equalsIgnoreCase("child tax credit on its own"))
            clickJavaScriptExecutor(context.getElement("childTaxCredit"),"User selects "+value+" for which type of tax credit do you get");
        else
            clickJavaScriptExecutor(context.getElement("workingTaxCreditWithDisability"),"User selects "+value+" for which type of tax credit do you get");
    }


    @And("User selects (.*) for is your household income £15276 or less")
    public void userSelectsNoForIsYourHouseholdIncome15276OrLess(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("no"))
            clickJavaScriptExecutor(context.getElement("RadioButtonNo"),"User selects No for Is your household income £15,276 or less");
        else
            clickJavaScriptExecutor(context.getElement("RadioButtonYes"),"User selects Yes for Is your household income £15,276 or less");
    }

    @And("User clicks on Next button based on the (.*)")
    public void userClicksOnNextButtonBasedOntheUniversalCredit(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("not yet")){
            waitUntilElementVisible(context.getElement("nextButton"),  WrapperConstants.MEDIUM_WAIT);
            click(context.getElement("nextButton"),"User clicks on the next button");
        }
    }

    @And("User selects (.*) for which type of Employment and Support Allowance ESA do you or your partner get")
    public void userSelectsForWhichTypeOfEmploymentAndSupportAllowanceESADoYouOrYourPartnerGet(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("income related esa"))
            clickJavaScriptExecutor(context.getElement("incomeesa"),"User selects Income related RSA for Which type of Employment and Support Allowance (ESA) do you or your partner get");
        else
            clickJavaScriptExecutor(context.getElement("contributionesa"),"User selects Contribution based RSA for Which type of Employment and Support Allowance (ESA) do you or your partner get");
    }

    @And("User selects (.*) for which type of Employment and Support Allowance ESA do you get")
    public void userSelectsForWhichTypeOfEmploymentAndSupportAllowanceESADoYouGet(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("income related esa"))
            clickJavaScriptExecutor(context.getElement("incomeesa"),"User selects Income related RSA for Which type of Employment and Support Allowance (ESA) do you get");
        else
            clickJavaScriptExecutor(context.getElement("contributionesa"),"User selects Contribution based RSA for Which type of Employment and Support Allowance (ESA) do you get");
    }

    @And("User selects (.*) for which type of Jobseeker Allowance JSA do you or your partner get")
    public void userSelectsForWhichTypeOfJobseekerAllowanceJSADoYouOrYourPartnerGet(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("income related jsa"))
            clickJavaScriptExecutor(context.getElement("incomejsa"),"User selects Income related JSA for which type of Jobseekers Allowance (JSA) do you or your partner get");
        else
            clickJavaScriptExecutor(context.getElement("contributionjsa"),"User selects Contribution based JSA for which type of Jobseeker Allowance (JSA) do you or your partner get");
    }

    @And("User selects (.*) for which type of Jobseeker Allowance JSA do you get")
    public void userSelectsForWhichTypeOfJobseekerAllowanceJSADoYouGet(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("income related jsa"))
            clickJavaScriptExecutor(context.getElement("incomejsa"),"User selects Income related JSA for which type of Jobseekers Allowance (JSA) do you get");
        else
            clickJavaScriptExecutor(context.getElement("contributionjsa"),"User selects Contribution based JSA for which type of Jobseeker Allowance (JSA) do you get");
    }


    @And("User selects (.*) for what type of Pension Credit do you or your partner get")
    public void userSelectsForWhatTypeOfPensionCreditDoYouOrYourPartnerGet(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("guarantee credit only"))
            clickJavaScriptExecutor(context.getElement("guaranteecreditonly"),"User selects Guarantee Credit only for what type of Pension Credit do you or your partner get");
        else if(booleanValue.equalsIgnoreCase("guarantee credit with savings credit"))
            clickJavaScriptExecutor(context.getElement("guaranteecreditwithsavingcredit"),"User selects Guarantee Credit with Savings Credit for what type of Pension Credit do you or your partner get");
         else
             clickJavaScriptExecutor(context.getElement("savingcredit"),"User selects Savings Credit\n" +
                    "The maximum you can get per week is £16.20 for what type of Pension Credit do you or your partner get");
    }

    @And("User selects (.*) for what type of Pension Credit do you get")
    public void userSelectsForWhatTypeOfPensionCreditDoYouGet(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("guarantee credit only"))
            clickJavaScriptExecutor(context.getElement("guaranteecreditonly"),"User selects Guarantee Credit only for what type of Pension Credit do you get");
        else if(booleanValue.equalsIgnoreCase("guarantee credit with savings credit"))
            clickJavaScriptExecutor(context.getElement("guaranteecreditwithsavingcredit"),"User selects Guarantee Credit with Savings Credit for what type of Pension Credit do you get");
        else
            clickJavaScriptExecutor(context.getElement("savingcredit"),"User selects Savings Credit\n" +
                    "The maximum you can get per week is £16.20 for what type of Pension Credit do you get");
    }

    @And("User selects (.*) for as part of your joint Universal Credit do you have any of these")
    public void userSelectsAsPartOfYourJointUniversalCreditDdoYouHaveAnyOfThese(String booleanValue) {
        if(booleanValue.equalsIgnoreCase("no"))
            clickJavaScriptExecutor(context.getElement("RadioButtonNo"),"User selects No for as part of your joint Universal Credit do you have any of these");
        else
            clickJavaScriptExecutor(context.getElement("RadioButtonYes"),"User selects Yes for as part of your joint Universal Credit do you have any of these");
    }
    @And("User selects (.*) for did you and your partner have a combined take-home pay of (.*) or less in your last Universal Credit period")
    public void userSelectsJointUniversalForDidYouAndYourPartnerHaveACombinedTakeHomePayOfOrLessInYourLastUniversalCreditPeriod(String booleanValue, String value) {
        if(booleanValue.equalsIgnoreCase("no"))
            clickJavaScriptExecutor(context.getElement("RadioButtonNo"),"User selects No for Did you and your partner have a combined take-home pay of "+value+" or less in your last Universal Credit period");
        else
            clickJavaScriptExecutor(context.getElement("RadioButtonYes"),"User selects Yes for Did you and your partner have a combined take-home pay of "+value+" or less in your last Universal Credit period");

    }

    @And("User selects (.*) for did you have a combined take-home pay of (.*) or less in your last Universal Credit period")
    public void userSelectsJointUniversalForDidYouHaveACombinedTakeHomePayOfOrLessInYourLastUniversalCreditPeriod(String booleanValue, String value) {
        if(booleanValue.equalsIgnoreCase("no"))
            clickJavaScriptExecutor(context.getElement("RadioButtonNo"),"User selects No for did you have a combined take-home pay of "+value+" or less in your last Universal Credit period");
        else
            clickJavaScriptExecutor(context.getElement("RadioButtonYes"),"User selects Yes for did you have a combined take-home pay of "+value+" or less in your last Universal Credit period");

    }
}

