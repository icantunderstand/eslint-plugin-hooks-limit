# eslint-plugin-hooks-limit

限制项目中hooks调用次数

## Installation

首先安装[ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

安装插件 `eslint-plugin-hooks-limit`:

```sh
npm install eslint-plugin-hooks-limit --save-dev
```

## 使用

将eslint-plugin-hooks-limit插件添加到 `.eslintrc`配置文件.

```json
{
    "plugins": [
        "hooks-limit"
    ]
}
```


配置规则.支持同时配置多个规则，如下格式

```json
{
     "rules": {
        "hooks-limit/no-too-many-hooks": [2, { "list": [
            { "name": "useState", "limit": 2 },
            { "name": "useCallback", "limit": 3 }
        ] } ]
  }
}
```






