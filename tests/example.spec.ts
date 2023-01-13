import { test, expect } from '@playwright/test';

test('Test', async ({ page, baseURL }) => {
  await page.goto(baseURL!);
  await expect(page).toHaveTitle('AngularTodoApp');
});
