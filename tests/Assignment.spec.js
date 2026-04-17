import {test,expect} from '@playwright/test'
test("verify the product whether add to cart or not",async ({page})=>{
  await page.goto('https://sauce-demo.myshopify.com/')
  const product=page.locator('a[href*="/products/"]').nth(2)
  const productname=await product.textContent()
  await product.click()
  await page.locator('//input[@value="Add to Cart"]').click()

//Wait until mini cart appears (this confirms add-to-cart completed)
await page.locator('#minicart').waitFor();

//Now click safely
await page.locator('(//div[@id="minicart"]//a)[1]').click();
  


  //await page.locator('//a[@class="toggle-drawer cart desktop "]').click()

//   const cartitem=page.locator('//a[@href="/collections/all/products/grey-jacket"]')
//   await expect(cartitem).toContainText(productname.trim())
await expect(page.locator('img[alt="Grey jacket - Grey jacket"]')).toBeVisible()
})