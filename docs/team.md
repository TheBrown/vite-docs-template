---
layout: page
title: Meet the Team
description: The development of Vite is guided by an international team.
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import { core, emeriti } from './_data/team'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>ພົບກັບທີມງານ</template>
    <template #lead>
      ການພັດທະນາ Vite ແມ່ນໄດ້ຮັບຄຳແນະນຳຈາກທີມງານລະດັບນານາຊາດ, ຊື່ງບາງຄົນໄດ້ຖືກເລືອກໃຫ້ມີຄວາມໂດດເດັ່ນດັ່ງຕໍ່ໄປນີ້
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="core" />
  <VPTeamPageSection>
    <template #title>Team Emeriti</template>
    <template #lead>
      Here we honor some no-longer-active team members who have made valuable
      contributions in the past.
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="emeriti" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
