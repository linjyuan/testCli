脚手架的编写用例
一、创建步骤
一、建文件 `ckdir mycli-ljy` ， 进入文件 `cd mycli-ljy`
二、初始化项目 npm init
三、在该项目根目录建立 bin 文件，并在里面建立 index.js 文件

四、在 package.json 加入代码

```javascript
"bin": {
"mycli-ljy": "bin/index.js"
},
```

五、切换为 npm 源 ，参考内容：https://blog.csdn.net/l1134/article/details/128148592?spm=1001.2014.3001.5501
六、在 VSCode 上的终端登录 npm，命令：`npm login`
七、在 VSCode 发布脚手架，命令 `npm publish`
八、下载远程的 mycli-ljy 脚手架 `npm install -g mycli-ljy`
九、使用远程的脚手架 mycli-ljy

二、调试步骤
1、在 项目里面 建立软链接 `npm link`
或者在 mycli-ljy 文件的上级使用 `npm install -g mycli-ljy`

三、分包管理（在 mycli-ljy 上使用 `mycli-ljy-2` 的内容）
1、建 mycli-ljy-2 项目，并在根目录建立 lib 文件，并编写里面的 index.js 文件

```javascript
module.exports = {
  sum(a, b) {
    return a + b;
  },
};
```

2、修改 `mycli-ljy-2` 里面的 `package.json` 文件的 `main`(以组件库的形式引用)

3、建立 mycli-ljy-2 软链接
在`mycli-ljy-2` 项目里面，使用`npm link` 来建立软链接
二、在 `mycli-ljy` 上使用 `mycli-ljy-2`，并使用 `npm link mycli-ljy-2` 命令下载包
在 `mycli-ljy` 项目里面，手动输入版本依赖，打开 `package.json` 文件，增加以下代码

```javascript
"dependencies": {
"mycli-ljy-2":"0.0.1"
},
```
