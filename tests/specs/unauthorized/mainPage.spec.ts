import { test, expect } from '../../fixtures/fixtures';

test('Checking availability elments of header', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAria();
});

test('Checking availability elments of tabs categories', async ({ mainPage }) => {
  await mainPage.categoriesTabHaveCorrectAria();
});

test('Checking availability elments of menu', async ({ mainPage }) => {
  await mainPage.menuHasCorrectAria();
});
