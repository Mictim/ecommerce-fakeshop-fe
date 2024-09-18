import { Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { Product } from "../types/product";
import { step } from "../utils/step";


export class HeaderComponent extends BasePage {
    private homeBtn = this.page.getByTestId('home-btn');
    private allPageBtn = this.page.getByTestId('all-btn');
    private menPageBtn = this.page.getByTestId('men-btn');
    private womenPageBtn = this.page.getByTestId('women-btn');
    private electronicPageBtn = this.page.getByTestId('electronics-btn');
    private jeweleryPageBtn = this.page.getByTestId('jewelery-btn');
    private cartBtn = this.page.getByTestId('cart-btn');
    private profileBtn = this.page.getByTestId('profile-btn');

    constructor(page: Page) {
        super(page);
    }

    isPageOpened() {

    };

    @step('Open Home Page')
    async openHomePage(): Promise<Product[]> {
        const products = await this.getResponse<Product[]>('**/products', this.homeBtn)
        return products;
    }

    @step('Open All Page')
    async openAllPage(): Promise<Product[]> {
        const products = await this.getResponse<Product[]>('**/products', this.allPageBtn)
        return products;
    }

    @step('Open Men Page')
    async openMenPage(): Promise<Product[]> {
        const products = await this.getResponse<Product[]>("**/products/category/men's%20clothing", this.menPageBtn)
        return products;
    }

    @step('Open Women Page')
    async openWomenPage(): Promise<Product[]> {
        const products = await this.getResponse<Product[]>("**/products/category/women's%20clothing", this.womenPageBtn)
        return products;
    }

    @step('Open Electronics Page')
    async openElectronicsPage(): Promise<Product[]> {
        const products = await this.getResponse<Product[]>("**/products/category/electronics", this.electronicPageBtn)
        return products;
    }
    
    @step('Open Jewelery Page')
    async openJeweleryPage(): Promise<Product[]> {
        const products = await this.getResponse<Product[]>("**/products/category/jewelery", this.jeweleryPageBtn);  
        return products;
    }

    @step('Open Cart Page')
    async openCartPage(): Promise<void> {
        await this.cartBtn.click();
    }

    @step('Open Profile Page')
    async openProfilePage(): Promise<void> {
        await this.profileBtn.click();
    }
    
}