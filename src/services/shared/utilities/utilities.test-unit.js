import Utilities from './utilities.js';





describe('UUID Management', () => {
  beforeAll(() => { });

  afterAll(() => { });

  beforeEach(() => { });

  afterEach(() => { });

  test('can generate a valid id', () => {
    const uuid = Utilities.generateUUID();
    expect(typeof uuid).toBe('string');
    expect(uuid.length).toBe(36);
    expect(Utilities.validateUUID(uuid)).toBe(true);
    expect(
      /^[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}$/.test(uuid),
    ).toBe(true);
  });

  test('can identify invalid uuids', () => {
    expect(Utilities.validateUUID()).toBe(false);
    expect(Utilities.validateUUID(123)).toBe(false);
    expect(Utilities.validateUUID(undefined)).toBe(false);
    expect(Utilities.validateUUID(null)).toBe(false);
    expect(Utilities.validateUUID('')).toBe(false);
    expect(Utilities.validateUUID({})).toBe(false);
    expect(Utilities.validateUUID('9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d')).toBe(true);
    expect(Utilities.validateUUID('9b1deb4d-3b7d4bad-9bdd-2b0d7b3dcb6d')).toBe(false);
    expect(Utilities.validateUUID('somethingelse')).toBe(false);
    expect(Utilities.validateUUID('9b1deb4d-3%7d-4bad-9bdd-2b0d7b3d-b6d')).toBe(false);
    expect(Utilities.validateUUID('d9428888-122b-11e1-b85c-61cd3cbb3210')).toBe(false);
    expect(Utilities.validateUUID('c106a26a-21bb-5538-8bf2-57095d1976c1')).toBe(false);
    expect(Utilities.validateUUID('630eb68f-e0fa-5ecc-887a-7c7a62614681')).toBe(false);
  });
});
