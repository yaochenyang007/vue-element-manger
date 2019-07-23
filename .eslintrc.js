module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [ "plugin:vue/essential", "eslint:recommended" ],
    "rules": {
        "no-unused-expressions": "off",
        "no-console": "off",
        "no-debugger": "off",
        "vue/component-name-in-template-casing": [ "error", "PascalCase" ],
        "vue/html-closing-bracket-newline": {
            "ignoreWhenEmpty": true,
            "ignores": [ "pre", "textarea" ]
        },
        "vue/mustache-interpolation-spacing": [ "error", "always" ],
        "vue/name-property-casing": [ "error", "PascalCase" ],
        "vue/no-multi-spaces": [
            "error",
            {
                "ignoreProperties": false
            }
        ],
        "vue/no-spaces-around-equal-signs-in-attribute": [ "error" ],
        "vue/prop-name-casing": [ "off", "camelCase" ],
        "vue/require-default-prop": "off",
        "vue/require-prop-types": "off",
        "vue/singleline-html-element-content-newline": [
            "off",
            {
                "ignoreWhenNoAttributes": true,
                "ignoreWhenEmpty": true,
                "ignores": [ "pre", "textarea" ]
            }
        ],
        "vue/v-bind-style": [ "error", "shorthand" ],
        "vue/v-on-style": [ "error", "shorthand" ],
        "vue/attributes-order": [
            "error",
            {
                "order": [ "DEFINITION", "LIST_RENDERING", "CONDITIONALS", "RENDER_MODIFIERS", "GLOBAL", "UNIQUE", "TWO_WAY_BINDING", "OTHER_DIRECTIVES", "OTHER_ATTR", "EVENTS", "CONTENT" ]
            }
        ],
        "vue/no-use-v-if-with-v-for": [
            "error",
            {
                "allowUsingIterationVar": false
            }
        ],
        "vue/no-v-html": "error",
        "vue/order-in-components": [
            "off",
            {
                "order": [ "el", "name", "parent", "functional", [ "delimiters", "comments" ], [ "components", "directives", "filters" ], "extends", "mixins", "inheritAttrs", "model", [ "props", "propsData" ], "data", "computed", "watch", "LIFECYCLE_HOOKS", "methods", [ "template", "render" ], "renderError" ]
            }
        ],
        "vue/this-in-template": [ "error", "never" ],
        "indent": [ "error" ],
        "no-compare-neg-zero": [ "warn" ],
        "no-cond-assign": [ "error", "always" ],
        "no-constant-condition": [
            "error",
            {
                "checkLoops": false
            }
        ],
        "no-control-regex": [ "error" ],
        "no-dupe-args": [ "error" ],
        "no-dupe-keys": [ "error" ],
        "no-duplicate-case": [ "error" ],
        "no-empty": [
            "error",
            {
                "allowEmptyCatch": true
            }
        ],
        "no-empty-character-class": [ "error" ],
        "no-ex-assign": [ "error" ],
        "no-extra-boolean-cast": [ "error" ],
        //此规则旨在在函数括号之前强制执行一致的间距，因此，只要空格不符合指定的偏好，就会发出警告。
        "space-before-function-paren": [
            "off",
            {
                "anonymous": "ignore",
                "named": "ignore",
                "asyncArrow": "ignore"
            }
        ],
        "no-extra-parens": [
            "error",
            "all",
            {
                "conditionalAssign": false,
                "returnAssign": false,
                "nestedBinaryExpressions": false,
                "ignoreJSX": "all",
                "enforceForArrowConditionals": false
            }
        ],
        "no-extra-semi": [ "error" ],
        "no-func-assign": [ "error" ],
        "no-inner-declarations": [ "error", "both" ],
        "no-invalid-regexp": [
            "error",
            {
                "allowConstructorFlags": [ "u", "y" ]
            }
        ],
        "no-irregular-whitespace": [
            "error",
            {
                "skipStrings": true,
                "skipComments": true,
                "skipRegExps": true,
                "skipTemplates": true
            }
        ],
        "no-obj-calls": [ "error" ],
        "no-prototype-builtins": [ "error" ],
        "no-regex-spaces": [ "error" ],
        "no-sparse-arrays": [ "error" ],
        "no-template-curly-in-string": [ "error" ],
        "no-unexpected-multiline": [ "off" ],
        //此规则强制使用分号。
        "semi": [
            "error",
            "always",
            {
                "omitLastInOneLineBlock": true
            }
        ],
        "no-unreachable": [ "error" ],
        "no-unsafe-finally": [ "error" ],
        "no-unsafe-negation": [ "error" ],
        "use-isnan": [ "error" ],
        "valid-jsdoc": [
            "error",
            {
                "prefer": {
                    "arg": "param",
                    "argument": "param",
                    "class": "constructor",
                    "return": "returns",
                    "virtual": "abstract"
                },
                "preferType": {
                    "Boolean": "boolean",
                    "Number": "number",
                    "object": "Object",
                    "String": "string"
                },
                "requireReturn": false,
                "requireReturnType": true,
                "requireParamDescription": true,
                "requireReturnDescription": true
            }
        ],
        "valid-typeof": [
            "error",
            {
                "requireStringLiterals": true
            }
        ],
        "array-callback-return": [
            "off",
            {
                "allowImplicit": true
            }
        ],
        "block-scoped-var": [ "error" ],
        "consistent-return": [
            "off",
            {
                "treatUndefinedAsUnspecified": false
            }
        ],
        "curly": [ "error", "multi-or-nest" ],
        "default-case": [ "error" ],
        "dot-location": [ "error", "property" ],
        "dot-notation": [
            "error",
            {
                "allowKeywords": false,
                "allowPattern": "^[a-z]+(_[a-z]+)+$"
            }
        ],
        "eqeqeq": [
            "error",
            "always",
            {
                "null": "ignore"
            }
        ],
        "guard-for-in": [ "error" ],
        "no-alert": [ "warn" ],
        "no-caller": [ "warn" ],
        "no-case-declarations": [ "error" ],
        "no-div-regex": [ "error" ],
        "no-else-return": [
            "error",
            {
                "allowElseIf": true
            }
        ],
        "no-empty-function": [ "error" ],
        "no-empty-pattern": [ "error" ],
        "no-eval": [ "off" ],
        "no-extend-native": [
            "error",
            {
                "exceptions": [ "Object" ]
            }
        ],
        "no-extra-bind": [ "error" ],
        "no-extra-label": [ "error" ],
        "no-fallthrough": [ "error" ],
        "no-floating-decimal": [ "warn" ],
        "no-global-assign": [
            "error",
            {
                "exceptions": [ "Object" ]
            }
        ],
        "no-implicit-coercion": [ "warn" ],
        "no-implicit-globals": [ "error" ],
        "no-implied-eval": [ "error" ],
        "no-invalid-this": [ "error" ],
        "no-iterator": [ "error" ],
        "no-labels": [ "error" ],
        "no-lone-blocks": [ "error" ],
        "no-loop-func": [ "error" ],
        "no-multi-spaces": [
            "error",
            {
                "ignoreEOLComments": true,
                "exceptions": {
                    "Property": true,
                    "BinaryExpression": true,
                    "VariableDeclarator": true,
                    "ImportDeclaration": true
                }
            }
        ],
        "key-spacing": [ "error", {} ],
        "no-multi-str": [ "error" ],
        "no-new": [ "error" ],
        "no-new-func": [ "error" ],
        "no-new-wrappers": [ "error" ],
        "no-octal": [ "error" ],
        "no-octal-escape": [ "error" ],
        //禁止重新分配功能参数
        "no-param-reassign": [ "off" ], 
        "no-proto": [ "error" ],
        "no-redeclare": [
            "error",
            {
                "builtinGlobals": true
            }
        ],
        "no-return-assign": [ "error" ],
        "no-return-await": [ "error" ],
        "no-script-url": [ "error" ],
        "no-self-assign": [
            "error",
            {
                "props": false
            }
        ],
        "no-self-compare": [ "error" ],
        "no-sequences": [ "error" ],
        "no-throw-literal": [ "error" ],
        "no-unmodified-loop-condition": [ "error" ],
        "no-unused-labels": [ "error" ],
        "no-useless-call": [ "error" ],
        "no-useless-concat": [ "error" ],
        //禁止不必要的转义用法（无用转义）
        "no-useless-escape": [ "off" ], 
        "no-with": [ "error" ],
        //这条规则旨在确保承诺只被Error对象拒绝。 "error",{ "allowEmptyReject": true }
        "prefer-promise-reject-errors": [ "off" ],
        "radix": [ "error" ],
        "require-await": [ "error" ],
        "vars-on-top": [ "error" ],
        "wrap-iife": [ "error" ],
        "yoda": [
            "error",
            "never",
            {
                "exceptRange": true
            }
        ],
        "init-declarations": [
            "off",
            "never",
            {
                "ignoreForLoopInit": true
            }
        ],
        "no-catch-shadow": [ "error" ],
        "no-delete-var": [ "error" ],
        "no-label-var": [ "error" ],
        "no-shadow": [
            "error",
            {
                "builtinGlobals": false,
                "hoist": "functions",
                "allow": []
            }
        ],
        "no-undef": [
            "error",
            {
                "typeof": true
            }
        ],
        "no-undef-init": [ "error" ],
        //禁止使用undefined变量
        "no-undefined": [ "error" ],
        "no-tabs": 0,
        "no-unused-vars": [
            "error",
            {
                "vars": "local",
                "args": "none",
                "ignoreRestSiblings": false
            }
        ],
        "no-use-before-define": [
            "error",
            {
                "functions": true,
                "classes": true
            }
        ],
        "array-bracket-newline": [
            "error",
            {
                "multiline": true
            }
        ],
        "array-bracket-spacing": [
            "error",
            "always",
            {
                "singleValue": true,
                "objectsInArrays": true,
                "arraysInArrays": true
            }
        ],
        "array-element-newline": [
            "warn",
            {
                "multiline": true
            }
        ],
        "block-spacing": [ "error", "always" ],
        "brace-style": [ "error" ],
        "camelcase": [
            "off",
            {
                "properties": "always"
            }
        ],
        "capitalized-comments": [
            "off",
            "always",
            {
                "line": {
                    "ignorePattern": "pragma|ignored"
                },
                "block": {
                    "ignoreInlineComments": true,
                    "ignorePattern": "ignored"
                }
            }
        ],
        //此规则强制在对象和数组文字中一致地使用尾随逗号。
        "comma-dangle": [ "error", "never" ],
        "comma-spacing": [ "error" ],
        "comma-style": [ "error" ],
        //规则在计算的属性括号内强制执行一致的间距。 "error", "always" 
        "computed-property-spacing": [ "off" ],
        //该规则在非空文件的末尾至少执行一个换行符（或不存在）。
        "eol-last": [ "error", "always" ],
        "func-name-matching": [ "error", "always" ],
        "func-names": [ "off", "as-needed" ],
        "func-style": [
            "error",
            "declaration",
            {
                "allowArrowFunctions": true
            }
        ],
        "function-paren-newline": [ "warn" ],
        //将某些标识符列入黑名单以防止它们被使用 "warn", "err", "e", "cb", "callback" 
        "id-blacklist": [ "off" ], 
        "jsx-quotes": [ "error", "prefer-single" ],
        "keyword-spacing": [ "error" ],
        //行注释可以位于代码上方或旁边。此规则可帮助团队保持一致的风格。
        "line-comment-position": [ "warn" ],
        "no-mixed-spaces-and-tabs": [ "error", "smart-tabs" ],
        "no-multiple-empty-lines": [ "error" ],
        "require-jsdoc": [
            "error",
            {
                "require": {
                    "FunctionDeclaration": true,
                    "MethodDefinition": false,
                    "ClassDeclaration": false,
                    "ArrowFunctionExpression": false,
                    "FunctionExpression": true
                }
            }
        ],
        //定义变量是否需要按字母顺序排序"error",{"ignoreCase": true}
        "sort-vars": [ "off" ],
        "no-var": [ "error" ],
        "sort-imports": [ "off" ]
    },
    "parserOptions": {
        "parser": "babel-eslint"
    }
};
 
