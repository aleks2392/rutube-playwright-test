import { Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closeModalWindow() {
    const headingLocator = this.page.getByRole('heading', {
      name: 'Больше возможностей RUTUBE',
    });
    if (await headingLocator.isVisible()) {
      await this.page.getByText('Ok', { exact: true }).click();
    }
  }

  async closeCookiesAlert() {
    const headerCookiesModal = this.page.getByText('This website uses cookies');

    if (await headerCookiesModal.isVisible()) {
      await this.page.getByText('Ok', { exact: true }).click();
    }
  }

  async closeVPNModalAlert() {
    const headerVPMModal = this.page.getByText('VPN лучше выключить: RUTUBE');

    if (await headerVPMModal.isVisible()) {
      await this.page.getByLabel('закрыть', { exact: true });
    }
  }
}
