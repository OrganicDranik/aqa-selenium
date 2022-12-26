import {By, WebDriver} from "selenium-webdriver";
import { BasePage } from "./BasePage/BasePage";

export class HomePage extends BasePage {
    constructor(protected driver: WebDriver) {
        super(driver);
        this.url = "https://rabota.by/";
    }

    async getSearchInput() {
        return this.driver.findElement(By.id("a11y-search-input"));
    }

    async setSearchInput(value: string) {
        const searchInput = await this.getSearchInput();
        await searchInput.clear();
        await searchInput.sendKeys(value);
    }

    async getSearchButton() {
        return this.driver.findElement(By.css("[data-qa=search-button]>button"));
    }

    async clickSearchButton() {
        const searchButton = await this.getSearchButton();
        await searchButton.click();
    }


    async getLoginButton() {
        return this.driver.findElement(By.css('[data-qa="login"]'));
    }

    async getSearchFilters() {
        return this.driver.findElement(By.css('[data-qa="advanced-search"]'))
    }

    async setKeywordsInput(keyword: string) {
        const keywordsInput = await this.driver.findElement(By.css('[data-qa="vacancysearch__keywords-input"]'));
        await keywordsInput.sendKeys(keyword);
    }

    async getAutosuggestItem() {
        return this.driver.findElement(By.css("[data-qa=bloko-suggest-list]>li:first-child"));
    }

    async getSalaryFilterInput() {
        return this.driver.findElement(By.css('[data-qa="advanced-search-salary"]'));
    }

    async submitFilters() {
        const submitButton = await this.driver.findElement(By.css('[data-qa="advanced-search-submit-button"]'));
        await submitButton.submit();
    }

    async setSalaryFilterValue(value: number) {
        const salaryFilter = await this.getSalaryFilterInput();
        salaryFilter.sendKeys(value);
    }

    async getSearchButtonXpath() {
        return this.driver.findElement(
            By.xpath('//*[@id="HH-React-Root"]/div/div[4]/div[1]/div[1]/div/div/div[2]/div/form/div/div[2]/button'),
        );
    }

    async clickFeedbackButton() {
        const feedbackLink = await this.driver.findElement(By.css('[data-qa="supernova-help-feedback-link"]'));
        await feedbackLink.click();
    }
}
