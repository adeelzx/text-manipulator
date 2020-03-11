const assignment = require('../src/assignment');

test('upper case of adeel is ADEEL', () => {
  expect(assignment.upperCase("adeel")).toBe("ADEEL");
});

test('camel case of adeel is aDeEl', () => {
    expect(assignment.camelCase("adeel")).toBe("aDeEl");
});