import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expectedResult = 'someClass additionalClass1 additionalClass2';
        expect(
            classNames('someClass', {}, ['additionalClass1', 'additionalClass2']),
        ).toBe(expectedResult);
    });

    test('with mods', () => {
        const expectedResult = 'someClass additionalClass1 additionalClass2 hovered scrollable';
        expect(
            classNames(
                'someClass',
                { hovered: true, scrollable: true },
                ['additionalClass1', 'additionalClass2'],
            ),
        ).toBe(expectedResult);
    });

    test('with mods false', () => {
        const expectedResult = 'someClass additionalClass1 additionalClass2 hovered';
        expect(
            classNames(
                'someClass',
                { hovered: true, scrollable: false },
                ['additionalClass1', 'additionalClass2'],
            ),
        ).toBe(expectedResult);
    });

    test('with mods undefined', () => {
        const expectedResult = 'someClass additionalClass1 additionalClass2 hovered';
        expect(
            classNames(
                'someClass',
                { hovered: true, scrollable: undefined },
                ['additionalClass1', 'additionalClass2'],
            ),
        ).toBe(expectedResult);
    });
});
