"use strict";

module.exports = {
    rules: {
        'no-too-many-hooks': require('./rules/no-too-many-hooks'),
    },
    configs: {
        recommended: {
            rules: {
                'hooks-limit/no-too-many-hooks': [1, { list: ["useEffect", "useState", "useCallback"], numLimit: 5 }], // 可以省略 eslint-plugin 前缀
            },
        },
    },
};
