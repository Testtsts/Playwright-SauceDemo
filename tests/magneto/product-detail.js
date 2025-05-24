class ProductDetail {
  constructor(page) {
    this.page = page;
    this.sizeOption = page.locator('.swatch-option.text');
    this.colorOption = page.locator('.swatch-option.color');
    this.qtyField = page.locator('#qty');
    this.addToCartButton = page.locator('#product-addtocart-button');
  }

  async getSizeOption() {
    return this.sizeOption;
  }

  async getColorOption() {
    return this.colorOption;
  }

  async fillQtyField(number) {
    await this.qtyField.fill(number.toString());
  }

  async clickAddToCartButton() {
    await this.addToCartButton.click();
  }
}

module.exports = { ProductDetail };
