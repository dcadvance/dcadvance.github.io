<template>
<v-card
  class="mx-auto w-business-card"
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
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-list-item-content>
    <v-list-item-avatar
      width="180"
      height="240"
      tile
      rounded
      v-if="avatar"
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

</style>
