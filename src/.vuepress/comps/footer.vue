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
          exact
          :target="link.href ? '_blank' : ''"
          :href="link.href"
          :to="$url(link.to)"
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

const useFacebook = false
const useTwitter = false

export default {
  data: () => {
    const links = []
    links.push({
      to: '/',
      icon: mdiHome
    })
    if (useFacebook) {
      links.push({
        href: 'https://baidu.com',
        icon: mdiFacebook
      })
    }
    if (useTwitter) {
      links.push({
        href: '',
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
