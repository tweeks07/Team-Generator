// Starter file provided by Instructor (03/09/2021) AC

const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");

});

test("Can set name via constructor arguments", () => {
    const test = "Taylor";
    const employee = new Employee(test);
    expect(employee.name).toEqual(test);

});

test("Can set id via constructor argument", () => {
    const test = 7;
    const employee = new Employee("Taylor", test);
    expect(employee.id).toEqual(test);

});

test("Can set email via constructor argument", () => {
    const test = "taylor@email.com";
    const employee = new Employee("Taylor", 7, test);
    expect(employee.email).toEqual(test);

});

test("Can get name via getName()", () => {
    const test = "Taylor";
    const employee = new Employee(test);
    expect(employee.getName()).toEqual(test);

});

test("Can get id via getId()", () => {
    const test = 7;
    const employee = new Employee("Taylor", test);
    expect(employee.getId()).toEqual(test);

});

test("Can get email via getEmail()", () => {
    const test = "taylor@email.com";
    const employee = new Employee("Taylor", 7, test);
    expect(employee.getEmail()).toEqual(test);

});

test("getRole() should return \"Employee\"", () => {
    const test = "Employee"
    const employee = new Employee("Taylor", 7, "taylor@email.com");
    expect(employee.getRole()).toEqual(test);

});
