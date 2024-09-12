import { beforeEach, it, jest, expect } from '@jest/globals';
import { quux } from './index.js';

jest.unstable_mockModule('foo', () => ({ bar: 'baz' }), { virtual: true });

it('should import the virtual mock from the test file', async () => {
    const foo = await import('foo').catch(() => ({}));

    expect(Object.keys(foo)).toEqual(['bar']);
    expect(foo.bar).toBe('baz');
});

it('should import the virtual mock from the source file', async () => {
    const foo = await quux().catch(() => ({}));

    expect(Object.keys(foo)).toEqual(['bar']);
    expect(foo.bar).toBe('baz');
});