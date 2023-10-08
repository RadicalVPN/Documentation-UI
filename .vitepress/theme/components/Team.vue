<template>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
        RadicalVPN is developed by a small, German developer team
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</template>

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/76482511?v=4',
    name: 'Prime',
    title: 'Creator, Main Developer',
    links: [
      { icon: 'github', link: 'https://github.com/Primexz' }
    ]
  },
    {
    avatar: 'https://avatars.githubusercontent.com/u/73748381?v=4',
    name: 'Essbo',
    title: 'Infrastructure',
    links: [
      { icon: 'github', link: 'https://github.com/essbo' }
    ]
  }
]
</script>