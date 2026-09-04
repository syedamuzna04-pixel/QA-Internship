package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import utils.ElementUtils;

public class LoginPage {

    private ElementUtils elementUtils;

    // Locators
    private By usernameField = By.id("user-name");
    private By passwordField = By.id("password");
    private By loginButton = By.id("login-button");
    private By errorMessage = By.cssSelector("[data-test='error']");

    // Constructor
    public LoginPage(WebDriver driver) {
        elementUtils = new ElementUtils(driver);
    }

    // Enter username
    public void enterUsername(String username) {
        elementUtils.type(usernameField, username);
    }

    // Enter password
    public void enterPassword(String password) {
        elementUtils.type(passwordField, password);
    }

    // Click login
    public void clickLogin() {
        elementUtils.click(loginButton);
    }

    // Complete login action
    public void login(String username, String password) {
        enterUsername(username);
        enterPassword(password);
        clickLogin();
    }

    // Get error message
    public String getErrorMessage() {
        return elementUtils.getText(errorMessage);
    }
}
