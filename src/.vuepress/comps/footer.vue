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
  getLangConfig,
  getSiteTitle
} from '../util/kit'

export default {
  data: () => ({
    links: [
      {
        url: '/',
        icon: mdiHome
      },
      {
        url: '',
        icon: mdiFacebook
      },
      {
        url: '',
        icon: mdiTwitter
      }
    ]
  }),
  computed: {
    siteTitle () {
      return getSiteTitle(this)
    },
    siteDesc () {
      const langConfig = getLangConfig(this)
      const desc = langConfig.description || ''
      return desc
    }
  }
}
</script>
