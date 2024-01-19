import { expect, test } from '@playwright/test';
import type { Color } from '../src/models/Color';
import { Profile } from '../src/models/Profile';

const COLOR_BLACK: Color = { code: '#000', name: 'black' };
const COLOR_WHITE: Color = { code: '#FFF', name: 'white' };

function buildProfile(size: number, colors: Color[], age: number, pattern: string): Profile {
    return new Profile(
        '1',
        'firstname',
        'lastname',
        'abstract',
        'city',
        size,
        colors,
        age,
        pattern,
        [],
        COLOR_BLACK
    );
};

test.describe('profile test', () => {
    test('when computing similarity rate between a profile and itself, then should return 1', () => {
        const profile: Profile = buildProfile(37, [], 0, 'Striped');
        expect(profile.similarityRate(profile)).toBe(1);
        expect(profile.formattedSimilarityRate(profile)).toBe('100%');
    });

    test('given 2 profiles only differenciated by their age, when computing similarity rate between them, then should return 2/3', () => {
        const profile: Profile = buildProfile(37, [], 0, 'Striped');
        const comparison: Profile = buildProfile(37, [], 1, 'Striped');

        expect(profile.similarityRate(comparison)).toBe(2 / 3);
        expect(profile.formattedSimilarityRate(comparison)).toBe('67%');
    });

    test('given 2 profiles with no common point, when computing similarity rate between them, then should return 0', () => {
        const profile: Profile = buildProfile(37, [], 0, 'Striped');
        const comparison: Profile = buildProfile(38, [COLOR_BLACK], 1, 'Polka-Dot');

        expect(profile.similarityRate(comparison)).toBe(0);
        expect(profile.formattedSimilarityRate(comparison)).toBe('0%');
    });

    test('given 2 profiles with different colors, when computing similarity rate between them, then should return 2/3', () => {
        const profileBlack: Profile = buildProfile(38, [COLOR_BLACK], 1, 'Striped');
        const profileWhite: Profile = buildProfile(38, [COLOR_WHITE], 1, 'Striped');

        expect(profileBlack.similarityRate(profileWhite)).toBe(3 / 4);
        expect(profileBlack.formattedSimilarityRate(profileWhite)).toBe('75%');
    });

    test('given 2 profiles with some common colors, when computing similarity rate between them, then should return 3/4', () => {
        const profileBlackAndWhite: Profile = buildProfile(38, [COLOR_BLACK, COLOR_WHITE], 1, 'Striped');
        const profileWhite: Profile = buildProfile(38, [COLOR_WHITE], 1, 'Striped');

        expect(profileBlackAndWhite.similarityRate(profileWhite)).toBe(4 / 5);
        expect(profileBlackAndWhite.formattedSimilarityRate(profileWhite)).toBe('80%');
    });
});
