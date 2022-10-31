# 图片

## LOGO

<v-img
  src="/imgs/android-chrome-512x512.png"
  max-width="256"
  class="k-center mb-4"
></v-img>

---

## BANNER

![埃尔朗根德中促进协会](https://img-1304915546.file.myqcloud.com/images/20210520/banner1.jpg)

![埃尔朗根德中促进协会](https://img-1304915546.file.myqcloud.com/images/20210520/banner2.jpg)

![埃尔朗根德中促进协会](https://img-1304915546.file.myqcloud.com/images/20210520/banner3.jpg)

![埃尔朗根德中促进协会](https://img-1304915546.file.myqcloud.com/images/20210520/banner4.jpg)

---

## 大图

大图不要存放在站点下面，github 可存储空间有限，资源占用过量会导致站点无法更新。

使用 [腾讯云的COS服务](https://cloud.tencent.com/product/cos) 来存储图片。

使用 [COSBrowser](https://cloud.tencent.com/document/product/436/11366) 工具来上传图片。

使用 [数据万象](https://cloud.tencent.com/product/ci/pricing) 服务来提供不同的图片尺寸。

图片格式，除非要求半透明，否则都要变更为 jpg, 限制为 200kb 以下。

图片压缩可以使用在线工具: [`https://squoosh.xiaoxili.com/`](https://squoosh.xiaoxili.com/)

图床上传的图片，按照下面的方式来组织。

带外链图片:

[![alt文案](https://img-1304915546.file.myqcloud.com/images/20210506/100k.jpg)](https://baidu.com)

控制图片宽度:

<div class="mb-4" style="max-width: 500px;">
  <img alt="alt文案" src="https://img-1304915546.file.myqcloud.com/images/20210506/100k.jpg"/>
</div>

横滑大图

<div class="mb-4" style="overflow:auto;">
  <div class="mb-4" style="min-width: 600px;">
    <img alt="alt文案" src="https://img-1304915546.file.myqcloud.com/images/20210506/100k.jpg"/>
  </div>
</div>

`v-img` 图片组件:

<v-img
  src="https://img-1304915546.file.myqcloud.com/images/20210506/120k.jpg"
  max-width="600"
  alt="alt信息"
  class="rounded-lg mb-4"
></v-img>

指定宽高比并居中

<v-img
  :aspect-ratio="1"
  max-width="300"
  src="https://img-1304915546.file.myqcloud.com/images/20210506/120k.jpg"
  class="rounded-lg mb-4 k-center"
></v-img>

指定宽高比, 展示完整图片

<v-img
  :aspect-ratio="1/1"
  max-width="300"
  src="https://img-1304915546.file.myqcloud.com/images/20210506/120k.jpg"
  contain
  class="grey darken-4 rounded-lg mb-4"
></v-img>

标准通栏大图:

![alt文案](https://img-1304915546.file.myqcloud.com/images/20210506/100k.jpg)
