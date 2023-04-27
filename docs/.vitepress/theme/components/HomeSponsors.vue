<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
import { useSponsor } from '../composables/sponsor'

const { data } = useSponsor()
</script>

<template>
  <VPHomeSponsors
    v-if="data"
    message="Vite ເປັນຟຣີ opensource, ເກີດຂື້ນໄດ້ຈາກຜູ້ສະໜັບສະໜູນທີ່ດີເລີດ."
    action-text="ຮ່ວມເປັນຜູ້ສະໜັບສະໜູນ"
    action-link="https://github.com/sponsors/yyx990803"
    :data="data"
  />
</template>
