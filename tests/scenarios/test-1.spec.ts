import { test } from '@playwright/test';
import { test as fixtureTest} from "../fixtures/fixture";
import { App } from '../pages/application';

test('test', async ({ page, baseURL }) => {
  const app = new App(page);
  await page.goto(baseURL!);
  await app.home.isPageOpened();
  await app.header.openAllPage();
});

fixtureTest('test with fixture', async({ app }) => {
  await app.home.isPageOpened();
  await app.header.openProfilePage();
  await app.profile.isPageOpened();
})