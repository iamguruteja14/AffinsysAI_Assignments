import {test,expect} from '@playwright/test'
test("Verify add to card functionality",async({page})=>{
  await page.goto('https://sauce-demo.myshopify.com/')

  const productitems=page.locator('a[href*="/collections/frontpage/products/"]').first()

  const productname=await productitems.textContent()

  await productitems.click()

  await page.locator('input[value="Add to Cart"]').click()

  
  await page.locator('(//div[@id="minicart"]//a)[3]').click()

  
  await expect(page.locator(`text=${productname.trim()}`)).toBeVisible()
  
  
  console.log(productname)
  
//Remove the product from the cart
await page.locator('(//div[@id="minicart"]//a)[1]').click()

await page.locator('//a[text()="Remove"]').click()

await expect(page.locator(`text=${productname.trim()}`)).not.toBeVisible()
})