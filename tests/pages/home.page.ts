import { expect, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { step } from "../utils/step";
import { Product } from "../types/product";


export class HomePage extends BasePage {
    private pageHeader = this.page.getByTestId('home-header-txt');
    private shopNowBtn = this.page.getByTestId('shop-now-btn');
    constructor(protected page: Page) {
        super(page);
    }

    @step('Validate Home page is opened')
    async isPageOpened() {
        expect.soft(await this.pageHeader, 'Home Page Header is visible').toBeVisible();
        expect.soft(await this.pageHeader).toHaveText('unleash your Stylefind your Flow.')
    }

    @step('Perform Shop Now')
    async openAllPage(): Promise<Product[]> {
        const products = await this.getResponse<Product[]>('**/products', this.shopNowBtn)
        return products;
    }
}