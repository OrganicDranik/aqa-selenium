import { WebDriver } from "selenium-webdriver";

export class BasePage {
    protected url = '';

    constructor(protected driver: WebDriver) {}

    async getCurrentUrl() {
        return this.driver.getCurrentUrl();
    }

    async visitPage() {
        return this.driver.get(this.url);
    }

    async maximizeAndVisit() {
        await this.driver.manage().window().maximize();
        return this.visitPage();
    }

    async closeBrowser() {
        return this.driver.quit();

    }
}
