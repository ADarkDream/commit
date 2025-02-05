// commitlint.config.cjs  无cz-git版本
// @see https://commitlint.js.org/
module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      /**提交信息正则，可自定义，此处代表：type(scope): subject，即类型(范围)：主题
       * scope为可选，且限定格式只包含英文逗号(用于单次提交多个scope)、下划线、字母（中英文）、数字
       * 若自定义，需要注意和rules中的type-enum相匹配，否则会校验报错type或subject为空
       */
      headerPattern: /^([\w-]+)(?:\(([\w\u4e00-\u9fa5a-zA-Z0-9,_-]+)\))?:\s([\s\S]+)$/,
      headerCorrespondence: ["type", "scope", "subject"],
    },
  },
  rules: {
    "scope-case": [2, "always", ["lower-case", "camel-case", "kebab-case"]], // scope 小写，允许中文
    "subject-case": [0], // 关闭 subject 大小写规则
    "type-empty": [2, "never"], // 确保 type 不为空
    "subject-empty": [2, "never"], // 确保 subject 不为空
    "type-enum": [
      2,
      "always",
      [
        "init", // 初始化
        "feat", // 新增功能
        "fix", // 修复缺陷
        "docs", // 文档变更
        "style", // 代码格式（不影响功能，例如空格、分号等格式修正）
        "refactor", // 代码重构（不包括 bug 修复、功能新增）
        "perf", // 性能优化
        "test", // 添加疏漏测试或已有测试改动
        "build", // 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
        "ci", // 持续集成相关的提交（修改 CI 配置文件、构建流程、自动化测试等）
        "chore", // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
        "revert", // 回滚提交的代码
      ],
    ],
  },
}
