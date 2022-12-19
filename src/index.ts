import { Builder, Browser, WebDriver, By, WebElement } from "selenium-webdriver";

import Chrome from "selenium-webdriver/chrome";
import { path } from "chromedriver";
import assert from "assert";

async function getRabotaBy() {
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    await driver.manage().window().maximize();
    await driver.get("https://rabota.by/?hhtmFrom=main");
    await driver.findElement(By.xpath('//*[@id="HH-React-Root"]/div/div[3]/div/div/div/div/div[1]/a')).click();
    await driver.sleep(1000);
    await driver.findElement(By.css("[data-qa=mainmenu_areaSwitcher]")).click();
    await driver.sleep(1000);
    await driver.quit;
}
getRabotaBy();

async function searchRabotaBy() {
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    await driver.manage().window().maximize();
    await driver.get("https://rabota.by/?hhtmFrom=main");
    const search: WebElement = await driver.findElement(By.id("a11y-search-input"));
    await search.sendKeys("Epam");
    await driver.sleep(1000);
    await driver.findElement(By.css("[data-qa=search-button]>button")).click();
    await driver.sleep(1000);
    const search2: WebElement = await driver.findElement(By.id("a11y-search-input"));
    await driver.sleep(1000);
    await search2.clear();
    await driver.sleep(1000);
    await search2.sendKeys("IBA");
    await driver.sleep(1000);
    await driver.quit();
}
searchRabotaBy();

async function checkEnabledElement() {
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    await driver.manage().window().maximize();
    await driver.get("https://rabota.by/?hhtmFrom=main");
    const Cv: WebElement = await driver.findElement(
        By.xpath('//*[@id="HH-React-Root"]/div/div[3]/div/div/div/div/div[4]/a'),
    );
    const CvStatus = await Cv.isEnabled();
    assert.equal(CvStatus, true);
    await driver.sleep(1000);
    await driver.quit();
}
checkEnabledElement();

async function checkLogin() {
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    await driver.manage().window().maximize();
    await driver.get("https://rabota.by/?hhtmFrom=main");
    await driver.findElement(By.css('[data-qa="login"]')).click();
    await driver.sleep(1000);
    await driver.findElement(By.css('[data-qa="account-signup-email"]')).sendKeys("+375291234567");
    await driver.findElement(By.css('[data-qa="account-signup-submit"]')).click();
    await driver.sleep(10000);
    await driver.quit();
}
checkLogin();

async function searchVacancy() {
    const service = new Chrome.ServiceBuilder(path);
    const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    await driver.manage().window().maximize();
    await driver.get("https://rabota.by/?hhtmFrom=main");
    await driver.findElement(By.css('[data-qa="advanced-search"]')).click();
    await driver.sleep(1000);
    const keywords: WebElement = await driver.findElement(By.css('[data-qa="vacancysearch__keywords-input"]'));
    await keywords.sendKeys("Бухгалтер");
    await driver.sleep(1000);
    await driver.findElement(By.css("[data-qa=bloko-suggest-list]>li:first-child")).click();
    await driver.sleep(1000);
    await driver.findElement(By.css('[data-qa="advanced-search-salary"]')).sendKeys("3000");
    await driver.sleep(1000);
    await driver.findElement(By.css('[data-qa="advanced-search-submit-button"]')).submit();
    await driver.sleep(1000);
    await driver.quit();
}
searchVacancy();
