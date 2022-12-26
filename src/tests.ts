import { Builder, Browser, WebDriver } from "selenium-webdriver";

import Chrome from "selenium-webdriver/chrome";
import { path } from "chromedriver";
import { HomePage } from "./Pages/HomePage";
import { PageFactory } from "./Pages/PageFactory";
import assert from "assert";

export enum Pages {
    HomePage = "HomePage",
    LoginPage = "Login",
}

async function isFeedBackPage() {
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    const homePage = PageFactory.getPage(driver, Pages.HomePage) as HomePage;
    await homePage.maximizeAndVisit();
    await homePage.clickFeedbackButton();
    const currentUrl = await homePage.getCurrentUrl();
    await assert.equal(currentUrl.split('?')[0], 'https://rabota.by/feedback');
    await driver.quit();
}

isFeedBackPage();

async function isSearchFunctional() {
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    const homePage = PageFactory.getPage(driver, Pages.HomePage) as HomePage;

    await homePage.maximizeAndVisit();
    await homePage.setSearchInput("Epam");
    await homePage.clickSearchButton();
    await homePage.setSearchInput('IBA');
    await homePage.clickSearchButton();
    await driver.quit();
}

isSearchFunctional();

async function isSearchButtonEnabled() {
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    const homePage = PageFactory.getPage(driver, Pages.HomePage) as HomePage;
    await homePage.maximizeAndVisit();
    const searchButton = await homePage.getSearchButtonXpath();
    assert.equal(await searchButton.isEnabled(), true);
    await driver.sleep(1000);
    await driver.quit();
}

isSearchButtonEnabled();

async function shouldFollowToLoginPage() {
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    const homePage = PageFactory.getPage(driver, Pages.HomePage) as HomePage;
    await homePage.maximizeAndVisit();
    const loginButton = await homePage.getLoginButton();
    await loginButton.click();
    await driver.sleep(1000);
    const currentUrl = await homePage.getCurrentUrl();
    assert.equal(currentUrl.split("?")[0], "https://rabota.by/account/login");
    await driver.sleep(1000);
    await driver.quit();
}

shouldFollowToLoginPage();

async function searchVacancy() {
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    const homePage = PageFactory.getPage(driver, Pages.HomePage) as HomePage;
    await homePage.maximizeAndVisit();
    const searchFilters = await homePage.getSearchFilters();
    await searchFilters.click();
    await homePage.setKeywordsInput("Бухгалтер");
    await driver.sleep(1000);
    const autosuggestItem = await homePage.getAutosuggestItem();
    await autosuggestItem.click();
    await homePage.setSalaryFilterValue(3000);
    await driver.sleep(3000);
    await homePage.submitFilters();
    await driver.sleep(3000);
    await driver.quit();
}

searchVacancy();
