package tests;

import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import pages.InventoryPage;
import pages.LoginPage;
import pages.ProductPage;

public class ProductTest extends BaseTest {

    private LoginPage loginPage;

    @BeforeMethod
    public void initializePage() {
        loginPage = new LoginPage(driver);

        loginPage.login(
                "standard_user",
                "secret_sauce"
        );
    }

    @Test
    public void productDetailsTest() {

        InventoryPage inventoryPage = new InventoryPage(driver);

        inventoryPage.clickBackpack();

        ProductPage productPage = new ProductPage(driver);

        Assert.assertEquals(
                productPage.getProductName(),
                "Sauce Labs Backpack"
        );

        Assert.assertEquals(
                productPage.getProductPrice(),
                "$29.99"
        );

        Assert.assertFalse(
                productPage.getProductDescription().isEmpty(),
                "Product description should not be empty"
        );

        Assert.assertTrue(
                productPage.isAddToCartButtonDisplayed(),
                "Add to Cart button should be displayed"
        );
    }
}