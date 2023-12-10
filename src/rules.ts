import type { TSESLint } from "@typescript-eslint/utils";

import { createRule } from "./utils/createRule.js";

export interface RuleOption {
	message: string;
	rule: string;
}

export interface Options {
	rules: RuleOption[];
}

export type MessageIds = "disallowedDisable";

export const rules: TSESLint.RuleModule<MessageIds, [Options]> = createRule<
	[Options],
	MessageIds
>({
	create(context, [{ rules }]) {
		if (!rules.length) {
			return {};
		}

		const ruleBans = rules.map(({ message, rule }) => ({
			message,
			rule,
			tester: new RegExp(
				`^eslint-disable(?:-next-line)?.*\\s+${rule}(\\s*,?|$)`,
			),
		}));

		return {
			Program() {
				for (const comment of context.sourceCode.getAllComments()) {
					for (const ruleBan of ruleBans) {
						if (ruleBan.tester.test(comment.value.trim())) {
							context.report({
								data: {
									message: ruleBan.message,
									rule: ruleBan.rule,
								},
								loc: comment.loc,
								messageId: "disallowedDisable",
							});
						}
					}
				}
			},
		};
	},
	defaultOptions: [{ rules: [] }],
	meta: {
		docs: { description: "Completely bans disabling specific rules." },
		messages: {
			disallowedDisable:
				"Rule '{{ rule }}' should not be disabled. {{ message }}",
		},
		schema: [
			{
				additionalProperties: false,
				properties: {
					rules: {
						items: {
							additionalProperties: false,
							properties: {
								message: {
									description: "Message to include in rule reports.",
									type: "string",
								},
								rule: {
									description: "Rule to disable, including plugin name.",
									type: "string",
								},
							},
							type: "object",
						},
						type: "array",
					},
				},
				type: "object",
			},
		],
		type: "problem",
	},
	name: "rules",
});
