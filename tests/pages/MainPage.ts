import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabLocator: Locator;
  private readonly menuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.locator('.header-module__mainHeader');
    this.categoriesTabLocator = this.page
      .locator('main div')
      .filter({
        hasText: 'ГлавнаяРекомендацииФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ ',
      })
      .nth(1);
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
  }
  async open() {
    await this.page.goto('https://rutube.ru/');
  }

  async headerHasCorrectAria() {
    await expect(this.headerLocator).toHaveScreenshot('headerLocation.png');
  }

  async categoriesTabHaveCorrectAria() {
    await expect(this.categoriesTabLocator).toHaveScreenshot('categoriesTabsLocation.png');
  }

  async menuHasCorrectAria() {
    await expect(this.menuLocator).toHaveScreenshot('menuLocation.png');
  }
}
