import { test } from '@playwright/test';
import { ProductPage } from '../Pages/ProductPage';

test('Verify add and remove from cart functionality', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.navigate();

    const productName = await productPage.selectProduct();

    await productPage.addToCart();

    await productPage.openCartPreview();

    await productPage.verifyProductInCart(productName);

    await productPage.openCart();

    await productPage.removeProduct();

    await productPage.verifyProductRemoved(productName);
});