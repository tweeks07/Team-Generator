// Starter file provided by Instructor (03/09/2021) AC

const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const test = "github";
    const engineer = new Engineer("Taylor", 7, "taylor@email.com", test);
    expect(engineer.engineerGithub).toEqual(test);

});

test("getRole() should return \"Engineer\"", () => {
    const test = "Engineer";
    const engineer = new Engineer("Taylor", 7, "taylor@email.com", "tweeks07");
    expect(engineer.getRole()).toEqual(test);

});

test("Can get GitHub username via getGithub()", () => {
    const test = "github";
    const engineer = new Engineer("Taylor", 7, "taylor@email.com", test);
    expect(engineer.getGithub()).toEqual(test);

});
