// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const { expect } = require("@jest/globals");

test("Can set office number via constructor argument", () => {
    const test = 1;
    const manager = new Manager("Taylor", 7, "taylor@email.com", test);
    expect(manager.officeNumber).toEqual(test);

});

test('getRole() should return "Manager"', () => {
    const test = "Manager";
    const manager = new Manager("Taylor", 7, "taylor@email.com", 777);
    expect(manager.getRole()).toEqual(test);

});

test("Can get office number via getOffice()", () => {
    const test = 1;
    const manager = new Manager("Taylor", 7, "taylor@email.com", test);
    expect(manager.getOfficeNumber()).toEqual(test);

});
