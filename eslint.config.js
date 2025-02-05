// @see: https://eslint.nodejs.cn/docs

import globals from "globals"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import eslintPluginVue from "eslint-plugin-vue"
import vueParser from "vue-eslint-parser"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import prettier from "eslint-plugin-prettier"
import prettierConfig from "./.prettierrc.cjs"

export default [
  {
    /**忽略格式检查的文件列表*/
    ignores: [
      "node_modules",
      "dist",
      ".gitignore",
      "package.json",
      "package-lock.json",
      "dist-ssr",
      "*.local",
      ".npmrc",
      ".DS_Store",
      "dev-dist",
      "dist_electron",
      "*.d.ts",
      "src/assets/**",
    ],
  },
  /** js推荐配置 */
  eslint.configs.recommended,
  /** vue推荐配置 */
  ...eslintPluginVue.configs["flat/recommended"],
  /** prettier 配置 */
  eslintPluginPrettierRecommended,

  /**自定义规则*/
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      parser: vueParser,
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        /** typescript项目需要用到这个 */
        parser: tseslint.parser,
        ecmaVersion: "latest",
        /** 允许在.vue 文件中使用 JSX */
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier: prettier,
      vue: eslintPluginVue,
    },
    rules: {
      "prettier/prettier": ["error", prettierConfig], // 让 ESLint 执行 Prettier 规则
      // 对象结尾逗号
      "comma-dangle": "off",

      // 关闭未定义变量
      "no-undef": "off",
      //不使用的变量不报错
      "no-unused-vars": "off",

      // 禁止使用不规范的空格
      "no-irregular-whitespace": "off",
      // 构造函数首字母大写
      "new-cap": [2, { newIsCap: true, capIsNew: false }],
      // new 操作符使用时需要括号
      "new-parens": 2,

      // 禁止使用 Array 构造函数
      "no-array-constructor": 2,

      // 禁止调用 caller 和 callee
      "no-caller": 2,

      // 禁止重新分配类名
      "no-class-assign": 2,

      // 禁止条件中的赋值操作
      "no-cond-assign": 2,

      // 禁止 const 重新分配
      "no-const-assign": 2,
      // 禁止删除变量
      "no-delete-var": 2,

      // 禁止在函数参数中使用重复名称
      "no-dupe-args": 2,

      // 禁止在类中使用重复名称的成员
      "no-dupe-class-members": 2,

      // 禁止在对象字面量中使用重复的键
      "no-dupe-keys": 2,

      // 禁止重复的 case 标签
      "no-duplicate-case": 2,

      // 禁止空的字符类
      "no-empty-character-class": 2,

      // 禁止空的解构模式
      "no-empty-pattern": 2,

      // 禁止使用 eval
      "no-eval": 2,

      // 不允许出现空的代码块
      "no-empty": 2,

      // 禁止不必要的布尔转换
      "no-extra-boolean-cast": 2,

      // 禁止不必要的括号
      "no-extra-parens": [2, "functions"],

      // 禁止 case 语句落空
      "no-fallthrough": 2,

      // 禁止在数字后面添加小数点
      "no-floating-decimal": 2,

      // 禁止对函数声明重新赋值
      "no-func-assign": 2,

      // 禁止出现歧义多行表达式
      "no-unexpected-multiline": 2,

      // 禁止不需要的转义
      "no-useless-escape": 0,

      "vue/no-mutating-props": ["error", { shallowOnly: true }],
      // 要求组件名称始终为 “-” 链接的单词
      "vue/multi-word-component-names": "off",

      // 关闭 index.html 文件报 clear 错误
      "vue/comment-directive": "off",

      // 关闭对 defineProps 的有效性检查
      "vue/valid-define-props": "off",

      // 允许在一个文件中定义多个组件
      "vue/one-component-per-file": "off",

      // 关闭 Prop 类型要求的警告
      "vue/require-prop-types": "off",
      // 属性顺序要求
      "vue/attributes-order": [
        "error",
        {
          order: [
            "DEFINITION", // e.g. 'is', 'v-is'
            "LIST_RENDERING", // e.g. 'v-for item in items'
            "CONDITIONALS", // e.g. 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
            "RENDER_MODIFIERS", // e.g. 'v-once', 'v-pre'
            "GLOBAL", // e.g. 'id'
            "UNIQUE", // e.g. 'ref', 'key'
            "SLOT", // e.g. 'v-slot', 'slot'
            "TWO_WAY_BINDING", // e.g. 'v-model'
            "OTHER_DIRECTIVES", // e.g. 'v-custom-directive'
            "OTHER_ATTR", // Includes ATTR_DYNAMIC, ATTR_STATIC, ATTR_SHORTHAND_BOOL
            "EVENTS", // e.g. '@click="functionCall"', 'v-on="event"'
            "CONTENT", // e.g. 'v-text', 'v-html'
          ],
          alphabetical: false, //同组内的属性会按字母排序(true)
        },
      ],

      // 关闭对默认 Prop 的要求
      "vue/require-default-prop": "off",

      // 允许使用 v-html 指令
      "vue/no-v-html": "off",
    },
  },
]
