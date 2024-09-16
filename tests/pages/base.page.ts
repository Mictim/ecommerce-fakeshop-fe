import { Locator, Page } from "@playwright/test";


export abstract class BasePage {
    constructor(protected page: Page) {
    };

    abstract  isPageOpened();

    /**
     * Method returns method casted to generic type of the response
     * @param endpoint Endpoint url(regex)
     * @param btn Button on which user click, to perform Request
     * @returns Serialized Object of class T
    */
    protected async getResponse<T>(endpoint: string,
        btn: Locator,
        timeout: number = 15000): Promise<T> {
        const [response] = await Promise.all([this.page.waitForResponse(endpoint, { timeout: timeout }), btn.click()]);
        if (response.ok()) {
            const r = await response.json();
            return r as unknown as T;
        } else {
            throw new Error(`Response for endpoint: ${endpoint} is failed with status: ${response.status()}`);
        }
    }

    protected async getResponseFromPage<T>(endpoint: string,
        url: string,
        timeout: number = 15000): Promise<T> {
        const [response] = await Promise.all([
            this.page.waitForResponse(endpoint, { timeout: timeout }),
            await this.page.goto(url)
        ]);
        if (response.ok()) {
            const r = await response.json();
            return r as unknown as T;
        } else {
            throw new Error(`Response for endpoint: ${endpoint} is failed with status: ${response.status()}`);
        }
    }
}