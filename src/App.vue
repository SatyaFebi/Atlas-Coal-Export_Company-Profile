<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-slate-800">
    <NavbarSection />
    <main class="grow">
      <router-view />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import NavbarSection from './components/NavbarSection.vue';
import FooterSection from './components/FooterSection.vue';
</script>
