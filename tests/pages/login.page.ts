import { expect, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { step } from "../utils/step";


export class ProfilePage extends BasePage {
    private profileContainer = this.page.getByTestId('profile-container');
    private profileSection = this.page.getByTestId('profile-section');
    private loginSection = this.page.getByTestId('login-section');

    constructor(protected page: Page) {
        super(page);
    }

    @step('Validate Profile page is opened')
    async isPageOpened() {
        expect.soft(await this.profileContainer, 'Profile Page is opened').toBeVisible();
    }
}