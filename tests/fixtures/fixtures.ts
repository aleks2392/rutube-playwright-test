import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

type MyFixtures = {
  mainPage: MainPage;
};

export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closeModalWindow();
    await mainPage.closeCookiesAlert();
    await mainPage.closeVPNModalAlert();

    await use(mainPage);
  },
});
export { expect } from '@playwright/test';
