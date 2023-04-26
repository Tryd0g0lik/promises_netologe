module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'airbnb-base',
		"eslint:recommended",
		{ "plugin": "import/recommended" }
	],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		"no-restricted-syntax": [
			"error",
			"LabeledStatement",
			"WithStatement"
		]
	},
};
