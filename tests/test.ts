import { expect, test } from '@playwright/test';
import { pairsOfCurrentProfile, profiles } from '../src/store/store';
import { get } from 'svelte/store';

test.describe('EXPLORE page', () => {
	test('should show as many cards as number of profiles to explore in the store', async ({ page }) => {
		await page.goto('/explore');

		const count = get(profiles);
		await expect(page.getByTestId('profile-preview').count()).toEqual(count);
	});

	test('when pairing with a sock, then it should be visible in PAIRS tab', async ({ page }) => {
		//initial pairs
		const numberOfPairs = get(pairsOfCurrentProfile).length;
		await page.goto('/pairs');
		await expect(page.getByTestId('profile-preview').count()).toEqual(numberOfPairs);

		//add a pair
		await page.goto('/explore');
		const socks = page.getByTestId('pair-sock');
		await expect(socks.count()).toBeGreaterThan(0);
		await socks.first().click();

		//check new number of pairs
		expect(get(pairsOfCurrentProfile).length).toEqual(numberOfPairs + 1);
		await page.goto('/pairs');
		await expect(page.getByTestId('profile-preview').count()).toBe(numberOfPairs + 1);

		//remove pair
		await page.goto('/explore');
		await socks.first().click();

		//check new number of pairs
		expect(get(pairsOfCurrentProfile).length).toEqual(numberOfPairs);
		await page.goto('/pairs');
		await expect(page.getByTestId('profile-preview').count()).toBe(numberOfPairs);
	});
});