<template>
  <VPTeamPageTitle>
    <template #title>VPN Status</template>
  </VPTeamPageTitle>
  <div class="info-box">
    <div class="info-item">
      <p class="info-label">Status:</p>
      <p class="info-value">❌ Not protected</p>
    </div>
    <div class="info-item">
      <p class="info-label">IP Address:</p>
      <p class="info-value">{{ ip }}</p>
    </div>
    <div class="info-item">
      <p class="info-label">Country:</p>
      <p class="info-value">{{ country }}</p>
    </div>
    <div class="info-item">
      <p class="info-label">City:</p>
      <p class="info-value">{{ city }}</p>
    </div>
    <div class="info-item">
      <p class="info-label">Internet Provider:</p>
      <p class="info-value">{{ isp }}</p>
    </div>
  </div>
</template>

<script setup>
  import { VPTeamPageTitle } from 'vitepress/theme'
  import { ref } from 'vue'

  const ip = ref('unknown')
  const country = ref('unknown')
  const city = ref('unknown')
  const isp = ref('unknown')

  try {
    const apiData = await (await fetch('/geoip/current')).json()

    if (apiData.ip) {
      ip.value = apiData.ip
    }

    if (apiData.country_name) {
      country.value = apiData.country_name
    }

    if (apiData.city_name) {
      city.value = apiData.city_name
    }

    if (apiData.isp) {
      isp.value = apiData.isp
    }
  } catch (e) {
    console.error(e)
  }
</script>

<style scoped>
  .outer {
    text-align: center;
    padding: 35px 40px 45px;
    transition:
      background-color 300ms ease-in-out,
      color 300ms ease-in-out;
  }

  h3 {
    letter-spacing: -0.5px;
    line-height: 56px;
    font-size: 48px;
  }

  .info-box {
    background-color: var(--vp-c-bg-soft);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 20px auto;
    max-width: 400px;
    padding: 15px;
    text-align: left;
  }

  .info-item {
    margin-bottom: 15px;
  }

  .info-label {
    font-weight: 600;
  }

  .info-value {
    margin-top: 5px;
    font-size: 1rem;
  }
</style>
