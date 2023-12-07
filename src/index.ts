import { TSESLint } from "@typescript-eslint/utils";

import { rules as rulesValue } from "./rules.js";

export const rules: Record<string, TSESLint.RuleModule<string, unknown[]>> = {
	rules: rulesValue,
};
