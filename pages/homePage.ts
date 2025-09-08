import {Page, Locator} from '@playwright/test';
import {BasePage} from './basePage';

export class HomePage extends BasePage {
    readonly welcomeMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.welcomeMessage = page.locator('h1.title', { hasText: 'Accounts Overview' });
    }

    async isWelcomeMessageVisible(): Promise<boolean> {
        return this.isElementVisible(this.welcomeMessage);
    }


}   