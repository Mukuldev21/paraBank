import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/homePage';
import {LoginPage} from '../pages/loginPage';
import { testData } from '../fixtures/testdata';

test.describe('Valid Login Tests', () => {
    
        test('Successful Login Test', async ({page}) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
    
        await loginPage.navigateToHomePage();
        await loginPage.login(testData.validUser.username, testData.validUser.password);
    
        // Wait for the welcome message to be visible
        await homePage.welcomeMessage.waitFor({ state: 'visible', timeout: 10000 });
    
        const isWelcomeMessageVisible = await homePage.isWelcomeMessageVisible();
        expect(isWelcomeMessageVisible).toBeTruthy();
    });
});     

