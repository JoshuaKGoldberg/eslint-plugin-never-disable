import { ESLintUtils } from "@typescript-eslint/utils";

export const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/JoshuaKGoldberg/eslint-plugin-never-disable/blob/main/docs/rules/${name}.md`,
);
