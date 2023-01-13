#!/usr/bin/env node
let lib = require("mycli-ljy-2")
// console.log({ lib })
// console.log({ sum: lib.sum(1, 2), mul: lib.mul(4, 5) });
// console.log("hello mycli-ljy")
const argv = require("process").argv
// console.log({ argv })
const command = argv[2]
// 获取下标为3后面的参数
const options = argv.slice(3)
if (options.length > 1) {
  // console.log(options);
  // console.log(command);
  let [option, params] = options
  // console.log(option, params)
  option = option.replace("--", "")
  console.log(option, params)
  if (command) {
    if (lib[command]) {
      lib[command]({ option, params })
    } else {
      console.log("无效的命令");
    }
  } else {
    console.log("请输入命令")
  }
}

if (command.startsWith("--") || command.startsWith("-")) {
  const globalOption = command.replace(/--|-/g, "")
  // console.log(globalOption)
  if (globalOption === "version" || globalOption === "V") {
    console.log("0.0.1")
  }
}
