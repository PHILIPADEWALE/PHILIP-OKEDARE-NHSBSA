package automationTesting.pages;

import cucumber.api.java.en.Given;
import repository.RepositoryContext;
import wrappers.SeleniumWrapper;
import wrappers.WrapperConstants;

public class NHSHomePage extends SeleniumWrapper {
    public RepositoryContext context = new RepositoryContext();

    public NHSHomePage() throws InterruptedException {

        context.setContextCurrentPage("home_page");
        context.loadRepository();
        waitForTitleToLoad("Check what help you could get to pay for NHS costs - NHSBSA", WrapperConstants.MEDIUM_WAIT);

    }

    @Given("User click on the start now button in the home page")
    public void signUpLogin(){

        waitUntilElementVisible(context.getElement("cookiesButton"),  WrapperConstants.MEDIUM_WAIT);
        click(context.getElement("cookiesButton"), "User clicks on the Cookies Accept Button");

        waitUntilElementVisible(context.getElement("startNowButton"),  WrapperConstants.MEDIUM_WAIT);
        click(context.getElement("startNowButton"), "User clicks on the Start Now Button");
    }
}

