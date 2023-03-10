package wrappers;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;
import repository.PageElement;
import utils.PlatformType;
import utils.Reporter;
import utils.SystemInfo;

/**
 * This is a wrapper for selenium framework and can be used for other framework./SeleniumWrapperContext
 */
public class SeleniumWrapper extends Reporter implements SeleniumWrapperContext {

    protected static final ThreadLocal<SeleniumWrapper> driverThreadLocal = new ThreadLocal<SeleniumWrapper>();
    public static String appURL;
    public static String apiHostName;
    public static String environmentType;
    public RemoteWebDriver driver;
    protected Properties prop;
    private String browserName;
    private Boolean isLaunchSuccess = false;
    private String executionType;
    private volatile static int counter = 0;
    public Map<String,String> frameworkData = new HashMap<String,String>();
    /**
     * This is a constructor to just initialize the member variables.
     */
    public SeleniumWrapper() {
        try {
            prop = new Properties();
            InputStream inputStream = ClassLoader.getSystemClassLoader()
                    .getResourceAsStream("runnerconfig/DriverConfig.properties");
            prop.load(inputStream);
            browserName = prop.getProperty(WrapperConstants.BROWSER_NAME);
            appURL = prop.getProperty(WrapperConstants.APPLICATION_URL);
            apiHostName = prop.getProperty(WrapperConstants.API_HOST_NAME);
            executionType = prop.getProperty(WrapperConstants.EXECUTION_TYPE);


        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * This is helper method to the property value from a given property file and property name.
     *
     * @param propPath Property file path.
     * @param propName Property name.
     * @return Property value.
     */
    public String loadPropertiesData(String propPath, String propName) {
        String propData = null;
        try {
            prop = new Properties();
            prop.load(new FileInputStream(propPath));
            propData = prop.getProperty(propName);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return propData;
    }

    public RemoteWebDriver getDriver() {
        return driverThreadLocal.get().driver;
    }

    public void setDriver(SeleniumWrapper wrappers) {
        driverThreadLocal.set(wrappers);
    }


    /**
     * This is a helper method to invoke the web app using the appropriate driver.
     *
     * @return Remote driver instance that was used to invoke the app.
     */
    public synchronized RemoteWebDriver invokeApp() {

        PlatformType platformType = SystemInfo.getPlatformType();

        if (PlatformType.UNKNOWN.equals(platformType)) {
            // Fail fast in case we can't detect the platform
            throw new RuntimeException("Couldn't determine underlying platform");
        }

        String userDirectory = System.getProperty("user.dir");
        if(executionType.equalsIgnoreCase("local")) {

            if ("chrome".equalsIgnoreCase(environmentType)) {
                ChromeOptions options = new ChromeOptions();
                options.addArguments("disable-infobars");
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver(options);
            }else if("firefox".equalsIgnoreCase(environmentType)){
                WebDriverManager.firefoxdriver().setup();
                driver = new FirefoxDriver();
            }
        }
        SeleniumWrapper seleniumWrapper = new SeleniumWrapper();
        seleniumWrapper.driver = driver;
        setDriver(seleniumWrapper);
        getDriver().manage().window().maximize();
        getDriver().manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        getDriver().get(appURL);
        isLaunchSuccess = true;
        return getDriver();
    }

    /**
     * This is a helper method that reports whether browser is launched or not.
     */
    public void reportBrowserLaunch() {
        if (isLaunchSuccess) {
            reportStep("The " + browserName + " browser "
                    + " launched successfully", Status.INFO, false);
        }
    }

    /**
     * This is a a helper method to locate element on the given page.
     *
     * @param locatorElement the locator element that to find the element.
     * @return The element associated with the locator element.
     */
    public WebElement locateElement(PageElement locatorElement) {
        WebElement element = null;
        try {
            switch (locatorElement.getLocatorType()) {
                case "id":
                    element = getDriver().findElementById(locatorElement.getLocator());
                    break;
                case "link":
                    element = getDriver().findElementByLinkText(locatorElement.getLocator());
                    break;
                case "xpath":
                    element = getDriver().findElementByXPath(locatorElement.getLocator());
                    break;
                case "name":
                    element = getDriver().findElementByName(locatorElement.getLocator());
                    break;
                case "class":
                    element = getDriver().findElementByClassName(locatorElement.getLocator());
                    break;
                case "tag":
                    element = getDriver().findElementByTagName(locatorElement.getLocator());
                    break;
                default:
                    throw new NoSuchElementException("no such element");
            }
        } catch (NoSuchElementException e) {
            reportStep("The element " + locatorElement.toString() + " not found.", Status.FAIL);
        } catch (WebDriverException e) {
            reportStep("Unknown exception occurred while finding " + locatorElement.getLocatorType()
                    + " with the value " + locatorElement.getLocator(), Status.FAIL);
        }
        return element;
    }

    /**
     * This is a a helper method to locate elements on the given page.
     *
     * @param locatorElement the locator element that to find the element.
     * @return The list of element associated with the locator element.
     */
    public List<WebElement> locateElements(PageElement locatorElement) {
        List<WebElement> elements = null;
        try {
            switch (locatorElement.getLocatorType()) {
                case "id":
                    elements = getDriver().findElementsById(locatorElement.getLocator());
                    break;
                case "link":
                    elements = getDriver().findElementsByLinkText(locatorElement.getLocator());
                    break;
                case "xpath":
                    elements = getDriver().findElementsByXPath(locatorElement.getLocator());
                    break;
                case "name":
                    elements = getDriver().findElementsByName(locatorElement.getLocator());
                    break;
                case "class":
                    elements = getDriver().findElementsByClassName(locatorElement.getLocator());
                    break;
                case "tag":
                    elements = getDriver().findElementsByTagName(locatorElement.getLocator());
                    break;
                default:
                    throw new NoSuchElementException("no such element");
            }
        } catch (NoSuchElementException e) {
            reportStep("The element " + locatorElement.toString() + " not found.", Status.FAIL);
        } catch (WebDriverException e) {
            reportStep("Unknown exception occurred while finding " + locatorElement.getLocatorType()
                    + " with the value " + locatorElement.getLocator(), Status.FAIL);
        }
        return elements;
    }

    /**
     * This is a helper method to wait until the element is visible. It waits until the specificed seconds.
     *
     * @param pageElement      Page element for which we want to wait.
     * @param timeOutInSeconds The amount of time that we want to wait.
     */
    public void waitUntilElementVisible(PageElement pageElement, long timeOutInSeconds) {
        try {
            WebDriverWait wait = new WebDriverWait(getDriver(), timeOutInSeconds);
            wait.until(ExpectedConditions.visibilityOf(locateElement(pageElement)));

        } catch (TimeoutException e) {
            reportStep("This element is not visible " + pageElement.toString(), Status.FAIL);
        }

    }

    /**
     * This is a helper method to provide input to the given element.
     *
     * @param pageElement Element to which we want to provide the input.
     * @param data        input that we want to provide to the given element.
     * @param description input message displayed in the html report file.
     */
    public void typeInput(PageElement pageElement, String data, String description) {
        try {
            WebElement element = locateElement(pageElement);
            element.clear();
            element.sendKeys(data);
            reportStep(description, Status.PASS);
        } catch (NoSuchElementException e) {
            reportStep("The data: " + data + " could not be entered in the field", Status.FAIL);
        } catch (WebDriverException e) {
            reportStep("Unknown exception occurred while entering " + data + " in the field ", Status.FAIL);
        } catch (Exception e) {
            reportStep("Unknown exception occurred while entering " + data + " in the field ", Status.FAIL);
        }
    }

    /**
     * Helper method to perform a click operation on the given element.
     *
     * @param pageElement Page element on which we will perform click operation.
     * @param description Description of the clickable operation.
     */
    public void click(PageElement pageElement, String description) {
        try {
            locateElement(pageElement).click();
            reportStep(description + " - clicked ", Status.PASS);
        } catch (Exception e) {
            e.printStackTrace();
            reportStep(description + " could not be clicked ", Status.FAIL);
        }
    }

    /**
     * This is a helper method to quite the browser.
     */
    public void quitBrowser() {
        try {
            getDriver().quit();
            reportStep("The Browser is closed", Status.INFO, false);
        } catch (Exception e) {
            reportStep("Unexpected error occurred in Browser", Status.FAIL, false);
        }
    }

    /**
     * This is a helper method  that provides a random screenshot number that can be used to name the file.
     *
     * @return Screen number that was used to create screenshot image file.
     */
    public long getScreenshotNumber() {

        long number = (long) Math.floor(Math.random() * 900000000L) + 10000000L;
        try {
            FileUtils.copyFile(getDriver().getScreenshotAs(OutputType.FILE),
                    new File("./reports/images/" + number + ".jpg"));
        } catch (WebDriverException e) {
            reportStep("The browser has been closed.", Status.FAIL);
        } catch (Exception e) {
            reportStep("The snapshot could not be taken", Status.WARN);
        }
        return number;
    }

    /**
     * This method extract out the text from the given element.
     *
     * @param element Element object.
     * @return The text value from the element.
     */
    public String getText(WebElement element) {
        try {
            return element.getText();
        } catch (Exception e) {
            e.printStackTrace();
            reportStep("Unknown exception occurred while verifying the text ", Status.FAIL);
        }
        return null;
    }

    /**
     * This is a helper method to wait for the title and also wait.
     *
     * @param titleName        Title name for the page.
     * @param timeOutInSeconds Time out value in seconds.
     */
    public void waitForTitleToLoad(String titleName, long timeOutInSeconds) {
        try {
            WebDriverWait wait = new WebDriverWait(getDriver(), timeOutInSeconds);
            wait.until(ExpectedConditions.titleContains(titleName));
        } catch (TimeoutException e) {
            reportStep("Title is not visible", Status.FAIL);
        }
    }

    /**
     * Helper method to perform a click operation on the given element.
     *
     * @param pageElement Page element on which we will perform click operation.
     * @param description Description of the clickable operation.
     */
    public void clickJavaScriptExecutor(PageElement pageElement, String description) {
        try {
            JavascriptExecutor js = (JavascriptExecutor) getDriver();
            js.executeScript("arguments[0].click()", locateElement(pageElement));
            reportStep(description + " - clicked ", Status.PASS);
        } catch (Exception e) {
            e.printStackTrace();
            reportStep(description + " could not be clicked ", Status.FAIL);
        }
    }

}
