import { test } from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Checking availability elments of header', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeModalWindow();
  await mainPage.closeCookiesAlert();
  await mainPage.closeVPNModalAlert();
  await mainPage.headerHasCorrectAria();
});

test('Checking availability elments of tabs categories', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeModalWindow();
  await mainPage.closeCookiesAlert();
  await mainPage.closeVPNModalAlert();
  await mainPage.categoriesTabHaveCorrectAria();
});

test('Checking availability elments of menu', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeModalWindow();
  await mainPage.closeCookiesAlert();
  await mainPage.closeVPNModalAlert();
  await mainPage.menuHasCorrectAria();
});
