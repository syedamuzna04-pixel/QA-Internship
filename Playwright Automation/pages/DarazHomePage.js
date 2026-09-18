export class DarazHomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('input[type="search"]');
  }

  async navigate() {
    await this.page.goto('https://www.daraz.pk/');
  }

  async searchProduct(productName) {
    await this.searchBox.fill(productName);
    await this.searchBox.press('Enter');
    await this.page.waitForLoadState('domcontentloaded');
  }
}
