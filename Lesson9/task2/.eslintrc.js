module.exports = {
    extends: 'eslint-config-airbnb-base',
    rules: {
        'no-console': 2,
        'no-restricted-globals': 0,
        'no-param-reassign': 0
    },
    env: {
        browser: true,
    },
    globals: {
        task: true,
        event: true,
    }
};