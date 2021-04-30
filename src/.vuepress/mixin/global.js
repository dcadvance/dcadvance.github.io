import {
  getLangPath,
  getLangConfig
} from '../util/kit'

// 定义全局 mixin

const globalMixin = {
  methods: {
    $url (path) {
      return getLangPath(this, path)
    },

    $config () {
      return getLangConfig(this)
    }
  }
}

export default globalMixin
