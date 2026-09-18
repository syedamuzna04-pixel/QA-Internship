export class DarazSearchResultsPage {
  constructor(page) {
    this.page = page;

    // Brand filter
    this.brand = page.getByText('Iqbal Electronics', { exact: true });

    // Price filter
    this.minPrice = page.getByRole('spinbutton', { name: 'Min' });
    this.maxPrice = page.getByRole('spinbutton', { name: 'Max' });

    // Price filter button
    this.priceFilterButton = page.getByRole('button').nth(2);

    // Price filter verification
    this.priceFilterText = page.getByText('Price: 500-5000', {
      exact: false
    });

    // Product links
    this.products = page.locator('a[href*="/products/"]');
  }

  async applyBrandFilter() {
    await this.brand.click();
  }

  async applyPriceFilter(min, max) {
    await this.minPrice.fill(String(min));
    await this.maxPrice.fill(String(max));
    await this.priceFilterButton.click();
  }

  async getProductCount() {
    return await this.products.count();
  }

  async openFirstProduct() {
    await this.products.first().click();
  }
}