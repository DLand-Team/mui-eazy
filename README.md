# Mui-Eazy

[Mui-Eazy](https://dland-core.github.io/mui-eazy)

## 两个版本

-   共同点：
    -   都实现了组件级别的代码拆分
    -   支持按需加载，无论是tree shaking环境还是不支持，都可以实现最小导入

### 青春版：

-   只包含扩展内容，不包含mui，react相关的所有库，需要宿主项目自行安装
-   实现包体最小化，全量大小仅仅 1.5m
-   方便全局控制，比如：定制mui主题

```shell
pnpm add mui-eazy react react-dom @emotion/react @mui/material @emotion/styled @mui/system @mui/x-data-grid @mui/x-date-pickers yup @mui/lab
```

### 整合版：包含除react相关以外的所有库，一条龙搞定

-   快捷无脑
-   给啥用啥
-   上手就干

```shell
pnpm add mui-eazy react react-dom
```

## 项目组成

-   文档项目：docusaurus项目
-   mui-eazy 青春版
-   mui-eazy 整合版

## 组成介绍

-   项目是 monorepo，通过pnpm的workspace进行的管理
-   组件库使用的是rollUp进行的打包
-   目前文档使用的`mui-eazy 青春版`作为组件库进行展示，默认目录下已经有打包好的组件库了

### 如何运行

仅仅在跑文档项目，皆可预览组件库

```shell
npm run start
```

构建文档库

```shell
npm run build:doc
```

构建组件库

```shell
npm run build:split
```
