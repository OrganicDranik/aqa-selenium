import { WebDriver } from "selenium-webdriver";
import { HomePage } from "./HomePage";
import { Pages } from "../tests";
import { LoginPage } from "./LoginPage";

export class PageFactory {
    static getPage(driver: WebDriver, pageName: Pages) {
        switch (pageName) {
            case Pages.HomePage:
                return new HomePage(driver);
            case Pages.LoginPage:
                return new LoginPage(driver);
            default:
                return new HomePage(driver);
        }
    }
}
