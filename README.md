一、核心思想
使用 node 自带的 process 库去读取命令的参数
二、准备

- 1、查看 require("process").argv 是什么

```javascript
const argv = require("process").argv;
console.log({ argv });
```

- 2、被引用的 mycli-ljy-2 里面增加 init 函数

```javascript
module.exports = {
  sum(a, b) {
    return a + b;
  },
  mul(a, b) {
    return a * b;
  },
  init({ option, param }) {
    console.log("执行init流程", option, param);
  },
};
```

- 3、使用软链接让`mycli-ljy`调用`mycli-ljy-2`
  三、编写`mycli-ljy init --name test`命令

```javascript
// 获取全部的参数
const argv = require("process").argv;
// 获取 init 位置的参数，既init
const command = argv[2];
// 获取下标为3后面的参数
const options = argv.slice(3);
if (options.length > 1) {
  // console.log(options);
  // console.log(command);
  let [option, params] = options;
  option = option.replace("--", "");
  console.log(option, params);
  if (command) {
    if (lib[command]) {
      lib[command]({ option, params });
    } else {
      console.log("无效的命令");
    }
  } else {
    console.log("请输入命令");
  }
}
```

四、编写 mycli-ljy --version 或 mycli-ljy -V 命令

```javascript
if (command.startsWith("--") || command.startsWith("-")) {
  const globalOption = command.replace(/--|-/g, "");
  // console.log(globalOption)
  if (globalOption === "version" || globalOption === "V") {
    console.log("0.0.1");
  }
}
```
