<script setup>
import { TheHeader, TheMain, TheFooter } from '@/components'
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <the-header>
      <template #start>
        <router-link to="/" class="text-xl"> Base-App </router-link>
      </template>
    </the-header>
    <the-main />
    <the-footer />
  </div>
</template>
