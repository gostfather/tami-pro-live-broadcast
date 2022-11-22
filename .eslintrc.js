/*
 * @Author: shenjinyong
 * @LastEditors: sjydev 10112668+sjydev@user.noreply.gitee.com
 * @Date: 2022-01-12 17:13:32
 * @LastEditTime: 2022-05-24 15:26:25
 * @FilePath: /my-vcm-app/.eslintrc.js
 * @Email: jinyong.shen@quvideo.com
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    mocha: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      legacyDecorators: true
    },
    ecmaVersion: 13,
    sourceType: 'module',
    requireConfigFile: false
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'node_modules/@xy/xy-react-scripts/lib/webpack.base.js'
      }
    }
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    curly: 1,
    'handle-callback-err': 1,
    'prefer-arrow-callback': 2,
    'no-unused-expressions': 1,
    indent: ['error', 2, { SwitchCase: 1 }],
    'max-len': ['error', { code: 300, tabWidth: 2 }], // 160个字符
    quotes: [2, 'single'],
    camelcase: 1, // 驼峰
    'no-var': 2,
    'no-console': 0,
    'comma-spacing': 2,
    'no-unused-vars': 0,
    "@typescript-eslint/no-unused-vars": "error",
    "no-shadow": 0,
    "@typescript-eslint/no-shadow": "error",
    'no-cond-assign': 2,
    'no-return-assign': 2,
    'no-param-reassign': 1, //不能对参数进行赋值
    'no-inline-comments': 0, //不能行内注释
    'no-trailing-spaces': 2,
    eqeqeq: 2,
    'brace-style': 2,
    'key-spacing': 2,
    'semi-spacing': 2,
    semi: [0, 'always'],
    'keyword-spacing': 2,
    'space-infix-ops': 2,
    'jsx-a11y/click-events-have-key-events': 0, // 每个绑定click事件的元素需要绑定键盘事件
    'jsx-a11y/no-static-element-interactions': 0, // 不能给div 等非交互元素绑定事件
    'no-plusplus': 0, // 不能使用++运算符
    'react/no-array-index-key': 0, //key 值不能使用默认index
    'react/destructuring-assignment': 0, // 必须使用解构赋值
    'no-restricted-syntax': 1, // 不能使用for in
    'no-restricted-globals': 1, //禁用特定的全局变量
    'no-underscore-dangle': 0, //禁止标识符中有悬空下划线。关闭
    'no-continue': 1, //禁止使用continue
    'no-bitwise': 0, //禁止使用按位运算符
    'no-useless-escape': 1, //禁止使用不必要的转义
    'no-restricted-properties': 1, //对象上的某些属性 可能在代码库中被禁止
    'class-methods-use-this': 0, //当方法体中没有this的时候将其声明为静态函数
    'prefer-destructuring': 0, //必须使用解构赋值
    'react/forbid-prop-types': 0, //禁用prototype array object
    'no-irregular-whitespace': [2, { skipComments: true }],
    'react/prop-types': 1, //使用proptypes验证
    'array-callback-return': 0, //尖头函数必须有返回值
    'jsx-a11y/label-has-for': 0, //每个label标签必须要有for属性
    'jsx-a11y/label-has-associated-control': 0, //label标签强制关联
    'jsx-a11y/anchor-is-valid': 0, //a标签
    'consistent-return': 1, //return
    'react/jsx-no-target-blank': 0, //target 不能为blank
    'jsx-a11y/media-has-caption': 0, //媒体类标签必须有track for 标题
    'react/no-access-state-in-setstate': 1, //setstate 使用callback
    'react/function-component-definition': 0,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 1, //不应为非交互式元素分配鼠标或键盘事件侦听器
    'import/prefer-default-export': 0,
    'no-nested-ternary': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0, // 导入依赖之外的文件
    'no-empty-function': 0, // 允许空函数
    'react/jsx-props-no-spreading': 0, // 允许透传props
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"]
  }
}
