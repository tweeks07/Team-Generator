// Starter file provided by Instructor (03/09/2021) AC

const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const test = "school";
    const intern = new Intern("Taylor", 7, "taylor@email.com", test);
    expect(intern.internSchool).toEqual(test);

});

test("getRole() should return \"Intern\"", () => {
    const test = "Intern";
    const intern = new Intern("Taylor", 7, "taylor@email.com", "Howard University");
    expect(intern.getRole()).toEqual(test);

});

test("Can get school via getSchool()", () => {
    const test = "school";
    const intern = new Intern("Taylor", 7, "taylor@email.com", test);
    expect(intern.getSchool()).toEqual(test);

});
