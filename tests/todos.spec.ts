import {test, expect, webkit,} from '@playwright/test';

test('Title', async ({page, baseURL}) => {
  await page.goto(baseURL!);
  await expect(page).toHaveTitle('AngularTodoApp');
});

test('Add todo (webkit)', async ({baseURL}) => {
  const browser = await webkit.launch({headless: false})
  const page = await browser.newPage();
  await page.goto(baseURL!);

  // await page.pause()

  await expect(
    await page.getByTestId('todo-list').evaluate(element => element.childElementCount)
  ).toBe(2)
  await page.getByTestId('add-todo-button').click();
  await expect(
    await page.getByTestId('todo-list').evaluate(element => element.childElementCount)
  ).toBe(3)
});

// test('Drag and drop', async ({page, baseURL}) => {
//   await page.goto(baseURL!);
//
//   await expect(
//     await page.getByTestId('todo-list').evaluate(element => element.firstChild)
//   ).to('Todo 1')
//   await expect(
//     await page.getByTestId('todo-list').evaluate(element => element.firstChild)
//   ).toContain('Todo 2')
// });
