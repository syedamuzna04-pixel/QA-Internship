package tests;

import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import pages.InventoryPage;
import pages.LoginPage;

public class LoginTest extends BaseTest {

    private LoginPage loginPage;

    @BeforeMethod
    public void initializePage() {
        loginPage = new LoginPage(driver);
    }

    @Test
    public void invalidLoginTest() {

        loginPage.login(
                "invalid_user",
                "invalid_password"
        );

        String expectedError =
                "Epic sadface: Username and password do not match any user in this service";

        String actualError = loginPage.getErrorMessage();

        Assert.assertEquals(actualError, expectedError);
    }

    @Test
    public void validLoginTest() {

        loginPage.login(
                "standard_user",
                "secret_sauce"
        );

        InventoryPage inventoryPage = new InventoryPage(driver);

        Assert.assertEquals(
                inventoryPage.getPageTitle(),
                "Products"
        );

        Assert.assertTrue(
                inventoryPage.isShoppingCartDisplayed(),
                "Shopping cart should be displayed"
        );
    }
}