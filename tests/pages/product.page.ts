import { expect, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { Product } from "../types/product";


export class ProductPage extends BasePage {
    private breadcrumb = this.page.getByTestId('breadcrumb');
    constructor(page: Page) {
        super(page);
    }

    async isPageOpened() {
        expect(await this.breadcrumb).toContainText('Home');
    }

    async openProductById(url: string) {
        return this.getResponseFromPage<Product>(`https://fakestoreapi.com/products/**`, url);
    }

    async getProductDataById(id: number) {
        return this.page.goto(`https://fakestoreapi.com/products/${id}`);
    }
    
}