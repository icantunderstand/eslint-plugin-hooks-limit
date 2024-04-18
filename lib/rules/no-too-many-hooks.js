/**
 * @fileoverview no console.time()
 * @author Allan91
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "no too many hooks",
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
                  numLimit: {
                    type: "number"
                  }
                },
                additionalProperties: false,
              },
        ],
        // 报错信息描述
        messages: {
            hooksLimit: "too many hooks you called",
        },
    },

    create: function(context) {
        let currentNum = 0
        return {
            'CallExpression Identifier': (node) => {
                const options = context.options[0] || {}
                const list = options.list || ['useState']
                const numLimit = options.numLimit || 5

                if (list.includes(node.name)) {
                    currentNum++
                    if(currentNum >= numLimit) {
                        context.report({
                            node,
                            messageId: 'hooksLimit'
                        });
                    }
                    
                }
            },
        };
    }
};

