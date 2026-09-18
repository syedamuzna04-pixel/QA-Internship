export class DarazProductPage {
  constructor(page) {
    this.page = page;

    this.freeShipping = page.getByText('Free Shipping', {
      exact: true
    });
  }

  async isFreeShippingAvailable() {
    return await this.freeShipping.count() > 0;
  }
}