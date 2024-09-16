import { expect, Page } from "@playwright/test";
import { BasePage } from "./base.page";


export class AllPage extends BasePage {

    constructor(protected page: Page) {
        super(page);
    }

    async isPageOpened() {
        expect(await this.page.getByTestId('page-name')).toHaveText('All');
    }
}