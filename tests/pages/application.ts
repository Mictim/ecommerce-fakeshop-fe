import { Page } from "@playwright/test";
import { HeaderComponent } from "./header.component";
import { HomePage } from "./home.page";
import { ProductPage } from "./product.page";
import { AllPage } from "./all.page";
import { ProfilePage } from "./login.page";


export class App {
    readonly header: HeaderComponent;
    readonly home: HomePage;
    product: ProductPage;
    profile: ProfilePage;
    all: AllPage;
    constructor(private page: Page) {
        this.header = new HeaderComponent(page);
        this.home = new HomePage(page);
        this.product = new ProductPage(page);
        this.all = new AllPage(page);
        this.profile = new ProfilePage(page);
    }
}