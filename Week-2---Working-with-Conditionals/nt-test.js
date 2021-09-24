/**
 * @jest-environment jsdom
 */


import isOldEnoughToVote from './conditionals-01/main'

describe('Testing isOldEnoughToVote()', () => {
    test('Should be old enough to vote', () => {
        const result = isOldEnoughToVote(18)
        expect(result).toEqual(true)
    });
    test('Should check isOldEnoughToVote', () => {
        const result = isOldEnoughToVote(12)
        expect(result).toEqual(false)
    });
})
