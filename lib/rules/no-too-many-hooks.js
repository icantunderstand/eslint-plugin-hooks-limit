/**
 * @fileoverview no too many hooks
 * @author icantunderstand
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

let initialized = false;
const limitData = new Map();

module.exports = {
    meta: {
        docs: {
            description: "to limit your hooks called times",
            category: "",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            {
                type: "object",
                properties: {
                  list: {
                    type: "array",
                  },
                },
                additionalProperties: false,
              },
        ],
        // 报错信息描述
        messages: {
        },
    },

    create: function(context) {
        if(!initialized) {
            const options = context.options[0] || {}
            const list = options.list || [{ "name": "useState", "limit": 5 }]
            list.forEach(config => {
                const { name = '', limit = 0 } = config || {}
                limitData.set(name, { limit, currentNum: 0 })
            })
            initialized = true
        }
        return {
            'CallExpression Identifier': (node) => {

                if(limitData.has(node.name)) {
                    const { currentNum = 0, limit = 0 } = limitData.get(node.name) || {}
                    limitData.set(node.name, { limit, currentNum: currentNum + 1 })
                    if(currentNum + 1 >= limit) {
                        context.report({
                            node,
                            message: `hooksLimit: you have called too many ${node.name}, you need to limit it under ${limit}`
                        });
                    }
                }
            },
        };
    }
};

