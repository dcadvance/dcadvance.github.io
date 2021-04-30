<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      width="100%"
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="(link, index) in links"
          :key="index"
          class="mx-3 white--text"
          icon
          :to="$url(link.url)"
        >
          <v-icon size="24px">
            {{ link.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0" v-if="siteDesc">{{siteDesc}}</v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        © 2020 — {{ new Date().getFullYear() }} <strong>{{siteTitle}}</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import {
  mdiHome,
  mdiFacebook,
  mdiTwitter
} from '@mdi/js'
import {
  getSiteTitle
} from '../util/kit'

const useFacebook = true
const useTwitter = false

export default {
  data: () => {
    const links = []
    links.push({
      url: '/',
      icon: mdiHome
    })
    if (useFacebook) {
      links.push({
        url: 'https://baidu.com',
        icon: mdiFacebook
      })
    }
    if (useTwitter) {
      links.push({
        url: '',
        icon: mdiTwitter
      })
    }
    return {
      links
    }
  },
  computed: {
    siteTitle () {
      return getSiteTitle(this)
    },
    siteDesc () {
      const conf = this.$config()
      const desc = conf.description || ''
      return desc
    }
  }
}
</script>
