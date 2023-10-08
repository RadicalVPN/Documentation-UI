---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Radical'
  text: 'A modern, high-performance VPN'
  tagline: Simple, modern and fast. The VPN provider you have always been looking for.
  image:
    light: /logo.svg
    dark: /logo_dark.svg
    alt: Radical
  actions:
    - theme: brand
      text: Login
      link: https://radicalvpn.com/portal/auth/login
    - theme: alt
      text: Getting started
      link: /api-examples

features:
  - title: Full IPv6 support
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: High Performance
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Wireguard
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import VpnStatus from '.vitepress/theme/components/VPNStatus.vue'
import Team from '.vitepress/theme/components/Team.vue'
</script>

<vpn-status />
<team />

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #22c1c3 30%, #fdbb2d);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #22c1c3 50%, #fdbb2d 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}

</style>
