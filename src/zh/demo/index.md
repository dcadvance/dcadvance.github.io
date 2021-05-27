---
title: 文档示例
---

# 文档组件示例

---

## h2 标题

### h3 标题

#### h4 标题

<h3 class="k-tcenter">中间呈现的标题</h3>

---

## LOGO

<v-img
  src="/imgs/android-chrome-512x512.png"
  max-width="256"
  class="k-center mb-4"
></v-img>

## BANNER

![埃尔朗根德中促进协会](https://img-1304915546.file.myqcloud.com/images/20210520-banner1.jpg)

![埃尔朗根德中促进协会](https://img-1304915546.file.myqcloud.com/images/20210520-banner2.jpg)

![埃尔朗根德中促进协会](https://img-1304915546.file.myqcloud.com/images/20210520-banner3.jpg)

![埃尔朗根德中促进协会](https://img-1304915546.file.myqcloud.com/images/20210520-banner4.jpg)

## 文字

简短文字

多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字

## 无序列表

可以展现为多层级

- 列表文字
- 列表文字
  - 列表文字
  - 列表文字
    - 列表文字
- 列表文字

## 有序列表

有序列表无法展现为多层级，如果需要多层级，使用多层级无需列表，然后自行提供序号呈现

1. 列表文字
1. 列表文字
1. 列表文字
1. 列表文字
1. 列表文字

## 表格

简单表格呈现

| T | T | T |
| - | - | - |
| _ | _ | _ |
| O | X | O |
| O | X | O |
| X | O | X |

连续数字或者字母，会导致列宽超长，挤占两边列宽。可以利用下划线来支撑列宽。

| 数字 | 值 | 说明 |
| --- | --- | --- |
| ________ | 利用下划线来支撑列宽 | __________________ |
| PI | `3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679` | 圆周率 |
| E | `2.718281828459` | 自然对数 |
| T | 很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字 | 测试文案超长 |

正常文字可折行呈现。

| 数字 | 值 | 说明 |
| --- | --- | --- |
| _ | 正常文字可折行 | _ |
| T | `很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字` | 测试文案超长 |
| E | `2.718281828459` | 自然对数 |
| T | 很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字 | 测试文案超长 |

参照下列方案配置对齐

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| _____________ | _____________ | _____ |
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## 大图

大图不要存放在站点下面，github 可存储空间有限，资源占用过量会导致站点无法更新。

使用 [腾讯云的COS服务](https://cloud.tencent.com/product/cos) 来存储图片。

使用 [COSBrowser](https://cloud.tencent.com/document/product/436/11366) 工具来上传图片。

使用 [数据万象](https://cloud.tencent.com/product/ci/pricing) 服务来提供不同的图片尺寸。

图片格式，除非要求半透明，否则都要变更为 jpg, 限制为 200kb 以下。

图片压缩可以使用在线工具: [`https://squoosh.xiaoxili.com/`](https://squoosh.xiaoxili.com/)

图床上传的图片，按照下面的方式来组织。

带外链图片:

[![alt文案](https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg)](https://baidu.com)

控制图片宽度:

<div class="mb-4" style="max-width: 500px;">
  <img alt="alt文案" src="https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg"/>
</div>

`v-img` 图片组件:

<v-img
  src="https://img-1304915546.file.myqcloud.com/images/20210506-120k.jpg"
  max-width="600"
  alt="alt信息"
  class="rounded-lg mb-4"
></v-img>

指定宽高比并居中

<v-img
  :aspect-ratio="1"
  max-width="300"
  src="https://img-1304915546.file.myqcloud.com/images/20210506-120k.jpg"
  class="rounded-lg mb-4 k-center"
></v-img>

指定宽高比, 展示完整图片

<v-img
  :aspect-ratio="1/1"
  max-width="300"
  src="https://img-1304915546.file.myqcloud.com/images/20210506-120k.jpg"
  contain
  class="grey darken-4 rounded-lg mb-4"
></v-img>

标准通栏大图:

![alt文案](https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg)

## 组图

二联组图

<section class="v-imggroup-2 mb-4">
  <v-img
    src="https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg"
    :aspect-ratio="16/9"
    class="rounded-lg"
  />
  <v-img
    src="https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg"
    :aspect-ratio="16/9"
    class="rounded-lg"
  />
  <v-img
    src="https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg"
    :aspect-ratio="16/9"
    class="rounded-lg"
  />
  <v-img
    src="https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg"
    :aspect-ratio="16/9"
    class="rounded-lg"
  />
</section>

三联组图

<section class="v-imggroup-3 mb-4">
  <v-img
    src="https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg"
    :aspect-ratio="16/9"
    class="rounded-lg"
  />
  <v-img
    src="https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg"
    :aspect-ratio="16/9"
    class="rounded-lg"
  />
  <v-img
    src="https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg"
    :aspect-ratio="16/9"
    class="rounded-lg"
  />
  <v-img
    src="https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg"
    :aspect-ratio="16/9"
    class="rounded-lg"
  />
  <v-img
    src="https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg"
    :aspect-ratio="16/9"
    class="rounded-lg"
  />
  <v-img
    src="https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg"
    :aspect-ratio="16/9"
    class="rounded-lg"
  />
</section>

三联组图带外链

<section class="v-imggroup-3 mb-4">

[![alt文案](https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg)](https://baidu.com)

[![alt文案](https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg)](https://baidu.com)

[![alt文案](https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg)](https://baidu.com)

[![alt文案](https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg)](https://baidu.com)

</section>

## 响应式组图

响应式组图在大屏会以组图方式展现。在小屏会纵向排列，等同于通栏大图。

二联响应式组图

<section class="v-imgresponse-2 mb-4">

[![alt文案](https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg)](https://baidu.com)

[![alt文案](https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg)](https://baidu.com)

</section>

三联响应式组图

<section class="v-imgresponse-3 mb-4">

[![alt文案](https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg)](https://baidu.com)

[![alt文案](https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg)](https://baidu.com)

[![alt文案](https://img-1304915546.file.myqcloud.com/images/20210506-100k.jpg)](https://baidu.com)

</section>
