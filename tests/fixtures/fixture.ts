import { App } from "../pages/application"
import { test as base } from "@playwright/test";

type TestOptions = {
    app: App
}

export const test = base.extend<TestOptions>({
    page: async ({ page, baseURL }, use) => {
        await page.goto(baseURL!);
        await use(page);
        await page.close();
    },
    app: async ({ page }, use) => {
        await use(new App(page));
    }
})