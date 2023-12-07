# never-disable/rules

<!-- end auto-generated rule header -->

Completely bans disabling specific rules.

## Examples

Given the following configuration:

```js
module.exports = {
	plugins: ["eslint-plugin-never-disable"],
	rules: {
		"never-disable/rules": [
			{
				message: "Explanation for why this is so.",
				rule: "rule-to-never-disable",
			},
		],
	},
};
```

The rule will report on any ESLint disable directive on `rule-to-never-disable`:

```plaintext
// eslint-disable-next-line rule-to-never-disable
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Rule 'rule-to-never-disable' should not be disabled. Explanation for why this is so.
```

## Options

Rules may be specified as an array of objects, each of which have the following properties:

- `message` _(`string`)_: Message to include in rule reports.
- `message` _(`string`)_: Rule to disable, including plugin name.

<!-- begin auto-generated rule options list -->

| Name      | Type     |
| :-------- | :------- |
| `message` | String   |
| `rule`    | String   |
| `rules`   | Object[] |

<!-- end auto-generated rule options list -->
