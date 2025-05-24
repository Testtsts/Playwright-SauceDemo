class GlobalElements {
  constructor(page) {
    this.page = page;
    this.showCartButton = page.locator('.action.showcart');
    this.cartCounter = page.locator('.counter-number');
  }

  async getShowCart() {
    return this.showCartButton;
  }

  async getCartCounter() {
    return this.cartCounter;
  }
}

module.exports = { GlobalElements };
