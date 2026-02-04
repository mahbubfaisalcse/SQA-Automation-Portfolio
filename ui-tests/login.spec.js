import { test, expect } from "@playwright/test";

test("Login Test", async ({ page }) => {
  await page.goto("https://example.com/login");
  await page.fill("#username", "admin");
  await page.fill("#password", "12345");
  await page.click("#login");
  await expect(page).toHaveURL("/dashboard");
});
