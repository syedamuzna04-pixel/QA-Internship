package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import utils.ElementUtils;

public class ProductPage {

    private ElementUtils elementUtils;

    // Locators
    private By productName = By.cssSelector(".inventory_details_name");
    private By productPrice = By.cssSelector(".inventory_details_price");
    private By productDescription = By.cssSelector(".inventory_details_desc");
    private By addToCartButton = By.id("add-to-cart");

    // Constructor
    public ProductPage(WebDriver driver) {
        elementUtils = new ElementUtils(driver);
    }

    // Get product name
    public String getProductName() {
        return elementUtils.getText(productName);
    }

    // Get product price
    public String getProductPrice() {
        return elementUtils.getText(productPrice);
    }

    // Get product description
    public String getProductDescription() {
        return elementUtils.getText(productDescription);
    }

    // Check Add to Cart button
    public boolean isAddToCartButtonDisplayed() {
        return elementUtils.isDisplayed(addToCartButton);
    }
}