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

## 组图

大图不要存放在站点下面，github 可存储空间有限，资源占用过量会导致站点无法更新。

使用下面的图床来上传大图。

- [`https://imgbox.com/`](https://imgbox.com/)

图片格式要变更为 jpg, 限制为 200kb 以下。

图片压缩可以使用在线工具: [`https://squoosh.xiaoxili.com/`](https://squoosh.xiaoxili.com/)

图床上传的图片，按照下面的方式来组织。

标准通栏大图:

![alt文案](https://images2.imgbox.com/f6/10/Xc7Mq54c_o.jpeg)

带链接图片:

[![alt文案](https://images2.imgbox.com/f6/10/Xc7Mq54c_o.jpeg)](https://imgbox.com/Xc7Mq54c)

控制图片宽度:

<div class="mb-4" style="max-width: 500px;">
  <img alt="alt文案" src="https://images2.imgbox.com/f6/10/Xc7Mq54c_o.jpeg"/>
</div>

`v-img` 图片组件:

<v-img
  src="https://images2.imgbox.com/28/5e/HBXG1u9Q_o.jpg"
  max-width="600"
  class="rounded-lg mb-4"
></v-img>

指定宽高比并居中

<v-img
  :aspect-ratio="3/4"
  max-width="300"
  src="https://images2.imgbox.com/28/5e/HBXG1u9Q_o.jpg"
  class="rounded-lg mb-4 k-center"
></v-img>

指定宽高比, 展示完整图片

<v-img
  :aspect-ratio="1/1"
  max-width="300"
  src="https://images2.imgbox.com/28/5e/HBXG1u9Q_o.jpg"
  contain
  class="grey darken-4 rounded-lg mb-4"
></v-img>

组图

<div>
  <v-row>
    <v-flex
      class="d-flex child-flex"
    >
      <v-img
        src="https://images2.imgbox.com/f6/10/Xc7Mq54c_o.jpeg"
        :aspect-ratio="1"
        class="grey lighten-2"
      />
    </v-flex>
    <v-flex
      class="d-flex child-flex"
    >
      <v-img
        src="https://images2.imgbox.com/f6/10/Xc7Mq54c_o.jpeg"
        :aspect-ratio="1"
        class="grey lighten-2"
      />
    </v-flex>
    <v-flex
      class="d-flex child-flex"
    >
      <v-img
        src="https://images2.imgbox.com/f6/10/Xc7Mq54c_o.jpeg"
        :aspect-ratio="1"
        class="grey lighten-2"
      />
    </v-flex>
  </v-row>
</div>

