<template>
<v-btn
  class="mx-2"
  fab
  dark
  color="indigo"
>
  <v-icon dark>
    {{icons.mdiChevronUp}}
  </v-icon>
</v-btn>
</template>

<script>
import {
  mdiChevronUp
} from '@mdi/js'

export default {
  data: () => ({
    icons: {
      mdiChevronUp
    }
  })
}
</script>
