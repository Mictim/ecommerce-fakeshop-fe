import { test, expect } from '@playwright/test';
import { Product } from '../types/product'

test('[API] Actor API Mock example', async ({ page, baseURL }) => {
    const product: Product = {
        id: 1,
        title: 'Big Bag',
        price: 145,
        description: 'A Big Bag for men',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: {
            rate: 5.0,
            count: 111
        }
    }

    await page.route(`https://fakestoreapi.com/products/**`, async route => {
        const response = await route.fetch();
        await route.fulfill({ response, body: JSON.stringify(product) });
    })


    await page.goto(`${baseURL}/products/${product.id}`, { timeout: 15000 });
    await page.waitForLoadState('networkidle')
    expect(await page.getByTestId('product-details-title')).toHaveText(product.title);

})
