# dcadvance.github.io

[![GitHub Pages Actions](https://github.com/dcadvance/dcadvance.github.io/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/dcadvance/dcadvance.github.io/actions/workflows/node.js.yml)

domain:

- [dcadvance.github.io](https://dcadvance.github.io/)
- [www.dcfv-erlangen.de](https://www.dcfv-erlangen.de/)

## 维护说明

使用 vuepress 维护站点

已配置 git actions，代码提交到 main 分支，就会自动打包发布

## 环境准备

本机需要安装下列环境

- [git](https://git-scm.com/) mac 用户电脑中自带
- [gitbash](https://gitforwindows.org/) windows 用户需要安装这个来提供 git
- [node](https://nodejs.org/) 代码执行工具

node 安装好后执行下列命令检查安装结果

```bash
git --version
node -v
npm -v
```

## 维护流程

首先需要检出项目

```bash
git clone git@github.com:dcadvance/dcadvance.github.io.git
```

注意，这是 git ssh 协议地址，推荐使用此方式，避免每次发布都提供用户名密码。

参见 [使用 SSH 连接到 GitHub](https://docs.github.com/cn/github/authenticating-to-github/connecting-to-github-with-ssh) 做好 ssh 配置

进入工作目录，安装程序依赖

```bash
cd dcadvance.github.io
npm i
```

切换到 develop 分支，注意代码只能在 develop 分支提交

```bash
git checkout develop
```

执行命令启动预览环境

```bash
npm run dev
```

可在 `http://localhost:8080` 查看预览页面

代码或者文档编辑完毕后，执行

```bash
npm run pub
```

代码将会被提交到当前分支

最后回到 main 分支合并代码完成上线

```bash
git checkout main
git merge develop
git push
```
