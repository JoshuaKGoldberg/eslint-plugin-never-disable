<h1 align="center">eslint-plugin-never-disable</h1>

<p align="center">ESLint plugin to completely ban disabling specific rules. 🙅</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="All Contributors: 1 👪" src="https://img.shields.io/badge/all_contributors-1_👪-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://codecov.io/gh/JoshuaKGoldberg/eslint-plugin-never-disable" target="_blank"><img alt="Codecov Test Coverage" src="https://codecov.io/gh/JoshuaKGoldberg/eslint-plugin-never-disable/branch/main/graph/badge.svg"/></a>
	<a href="https://github.com/JoshuaKGoldberg/eslint-plugin-never-disable/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="Contributor Covenant" src="https://img.shields.io/badge/code_of_conduct-enforced-21bb42" /></a>
	<a href="https://github.com/JoshuaKGoldberg/eslint-plugin-never-disable/blob/main/LICENSE.md" target="_blank"><img alt="License: MIT" src="https://img.shields.io/github/license/JoshuaKGoldberg/eslint-plugin-never-disable?color=21bb42"></a>
	<img alt="Style: Prettier" src="https://img.shields.io/badge/style-prettier-21bb42.svg" />
	<img alt="TypeScript: Strict" src="https://img.shields.io/badge/typescript-strict-21bb42.svg" />
	<img alt="npm package version" src="https://img.shields.io/npm/v/eslint-plugin-never-disable?color=21bb42" />
</p>

## Usage

Add the following options to your [ESLint configuration file](https://eslint.org/docs/latest/user-guide/configuring/configuration-files):

```js
module.exports = {
	// ...
	plugins: ["never-disable"],
	rules: {
		"never-disable/rules": [
			"error",
			{
				rules: [
					{
						message: "Explanation for why this is so.",
						rule: "rule-to-never-disable",
					},
				],
			},
		],
	},
	// ...
};
```

Then developers will receive the following error upon trying to disable a never-to-be-disabled rule:

```plaintext
// eslint-disable-next-line rule-to-never-disable
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Rule 'rule-to-never-disable' should not be disabled. Explanation for why this is so.
```

<!-- prettier-ignore-start -->
<!-- begin auto-generated rules list -->

| Name                         | Description                               |
| :--------------------------- | :---------------------------------------- |
| [rules](docs/rules/rules.md) | Completely bans disabling specific rules. |

<!-- end auto-generated rules list -->
<!-- prettier-ignore-end -->

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com/"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/eslint-plugin-never-disable/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="https://github.com/JoshuaKGoldberg/eslint-plugin-never-disable/commits?author=JoshuaKGoldberg" title="Documentation">📖</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

> 💙 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app).
