import { rules } from "./rules.js";
import { ruleTester } from "./utils/ruleTester.js";

ruleTester.run("rules", rules, {
	invalid: [
		{
			code: `// eslint-disable-next-line one-var`,
			errors: [
				{
					data: { message: "Do not want.", rule: "one-var" },
					messageId: "disallowedDisable",
				},
			],
			options: [{ rules: [{ message: "Do not want.", rule: "one-var" }] }],
		},
		{
			code: `/* eslint-disable one-var */`,
			errors: [
				{
					data: { message: "Do not want.", rule: "one-var" },
					messageId: "disallowedDisable",
				},
			],
			options: [{ rules: [{ message: "Do not want.", rule: "one-var" }] }],
		},
		{
			code: `/* eslint-disable no-var, one-var */`,
			errors: [
				{
					data: { message: "Do not want.", rule: "one-var" },
					messageId: "disallowedDisable",
				},
			],
			options: [{ rules: [{ message: "Do not want.", rule: "one-var" }] }],
		},
	],
	valid: [
		{
			code: `// eslint-disable-next-line no-var`,
			options: [{ rules: [{ message: "Do not want.", rule: "one-var" }] }],
		},
		{
			code: `// eslint-disable-next-line no-shadow, no-var`,
			options: [{ rules: [{ message: "Do not want.", rule: "one-var" }] }],
		},
		{
			code: `/* eslint-disable no-var */`,
			options: [{ rules: [{ message: "Do not want.", rule: "one-var" }] }],
		},
		{
			code: `/* eslint-disable no-shadow, no-var */`,
			options: [{ rules: [{ message: "Do not want.", rule: "one-var" }] }],
		},
	],
});
