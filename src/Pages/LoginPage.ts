import { WebDriver } from "selenium-webdriver";
import { BasePage } from "./BasePage/BasePage";

export class LoginPage extends BasePage {
    constructor(protected driver: WebDriver) {
        super(driver);
        this.url = "https://rabota.by/account/signup";
    }
}
