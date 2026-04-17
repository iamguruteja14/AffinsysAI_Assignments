import { expect } from '@playwright/test';

export class ProductPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.productItems = page.locator('a[href*="/collections/frontpage/products/"]').first();
        this.addToCartBtn = page.locator('input[value="Add to Cart"]');
        this.cartIcon = page.locator('(//div[@id="minicart"]//a)[3]');
        this.cartButton = page.locator('(//div[@id="minicart"]//a)[1]');
        this.removeBtn = page.locator('//a[text()="Remove"]');
    }

    async navigate() {
        await this.page.goto('https://sauce-demo.myshopify.com/');
    }

    async selectProduct() {
        const productName = await this.productItems.textContent();
        await this.productItems.click();
        return productName;
    }

    async addToCart() {
        await this.addToCartBtn.click();
    }

    async openCartPreview() {
        await this.cartIcon.click();
    }

    async openCart() {
        await this.cartButton.click();
    }

    async verifyProductInCart(productName) {
        await expect(
            this.page.locator(`text=${productName.trim()}`)
        ).toBeVisible();
    }

    async removeProduct() {
        await this.removeBtn.click();
    }

    async verifyProductRemoved(productName) {
        await expect(
            this.page.locator(`text=${productName.trim()}`)
        ).not.toBeVisible();
    }
}