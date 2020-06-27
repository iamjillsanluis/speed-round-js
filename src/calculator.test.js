"use strict";

const addNumbers = require("./calculator");

test("addNumbers should add two numbers", () => {
	expect(addNumbers(1, 2)).toBe(3);
});

