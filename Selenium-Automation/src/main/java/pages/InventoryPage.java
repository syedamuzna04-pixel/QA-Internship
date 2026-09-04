package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import utils.ElementUtils;

public class InventoryPage {

    private ElementUtils elementUtils;

    // Locators
    private By pageTitle = By.cssSelector(".title");
    private By shoppingCart = By.id("shopping_cart_container");
    private By backpackLink = By.id("item_4_title_link");

    // Constructor
    public InventoryPage(WebDriver driver) {
        elementUtils = new ElementUtils(driver);
    }

    // Get page title
    public String getPageTitle() {
        return elementUtils.getText(pageTitle);
    }

    // Check if shopping cart is displayed
    public boolean isShoppingCartDisplayed() {
        return elementUtils.isDisplayed(shoppingCart);
    }

    // Open Sauce Labs Backpack product
    public void clickBackpack() {
        elementUtils.click(backpackLink);
    }
}