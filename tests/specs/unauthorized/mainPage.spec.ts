import { test } from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Open Main Page', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
});
