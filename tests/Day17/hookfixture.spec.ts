import {test} from '../../Fixtures/hookfixture';

test('Test1',async({page,loginfixture})=>{

    await page.locator('//*[@class="inventory_item"]').filter({hasText:'Sauce Labs Backpack'}).getByRole('button').click();

})

test('Test 2',async({page,loginfixture})=>{

    await page.locator('.bm-burger-button').isVisible();
})