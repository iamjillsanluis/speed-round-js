"use strict";

import {addNumbers} from "./calculator.js";

test("addNumbers should add two numbers", () => {
	expect(addNumbers(1, 2)).toBe(3);
});
