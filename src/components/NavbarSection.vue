<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'backdrop-blur-md bg-black/60 shadow-lg' : 'bg-transparent',
    ]"
  >
    <nav class="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 text-white">
      <!-- Logo -->
      <div class="flex items-center space-x-2 cursor-pointer">
        <!-- <img src="/logo.png" alt="Atlas Logo" class="h-8 w-8 object-contain" /> -->
        <span class="font-bold text-xl tracking-wide">Atlas Coal Export</span>
      </div>

      <!-- Links -->
      <ul class="hidden md:flex space-x-8 font-medium">
        <li><a href="#" class="hover:text-yellow-400 transition">Home</a></li>
        <li><a href="#products" class="hover:text-yellow-400 transition">Products</a></li>
        <li><a href="#why_us" class="hover:text-yellow-400 transition">Why Us</a></li>
        <li><a href="#contact" class="hover:text-yellow-400 transition">Contact</a></li>
      </ul>

      <!-- CTA -->
      <a
        href="#contact"
        class="hidden md:inline-block bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
      >
        Start a Partnership
      </a>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
        <i :class="isOpen ? 'ri-close-line text-2xl' : 'ri-menu-line text-2xl'"></i>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="isOpen" class="md:hidden bg-black/90 backdrop-blur-md text-center py-4">
        <ul class="space-y-4 text-white font-medium">
          <li><a href="#home" @click="closeMenu">Home</a></li>
          <li><a href="#products" @click="closeMenu">Products</a></li>
          <li><a href="#why" @click="closeMenu">Why Us</a></li>
          <li><a href="#contact" @click="closeMenu">Contact</a></li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
