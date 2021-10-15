<template>
<v-card
  class="mx-auto w-bigbus-card mb-4"
  outlined
>
  <v-list-item>
    <v-list-item-content>
      <v-card-title
        v-if="name"
        class="text-h5 mb-1"
      >
        {{name}}
      </v-card-title>
      <v-card-subtitle
        v-if="title"
        class="text-h6 mb-1"
      >
        {{title}}
      </v-card-subtitle>
      <v-card-subtitle
        v-if="subtitle"
        class="text-h6 mb-1"
      >
        {{subtitle}}
      </v-card-subtitle>
      <v-img
        :src="avatar"
        class="d-block d-md-none k-center"
        max-width="240"
      ></v-img>
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-list-item-content>
    <v-list-item-avatar
      tile
      rounded
      v-if="avatar"
      class="d-none d-md-block"
    >
      <v-img :src="avatar"></v-img>
    </v-list-item-avatar>
  </v-list-item>
</v-card>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
.w-bigbus-card {
  .v-list-item__avatar{
    width: 90px !important;
    height: 120px !important;
  }
}
@media only screen and (min-width: 767px) {
  .w-bigbus-card {
    .v-list-item__avatar{
      width: 180px !important;
      height: 240px !important;
    }
  }
}
</style>
