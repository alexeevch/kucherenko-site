<template>
  <section id="home">
    <div class="header-wrapper">
      <HeaderLayout />
    </div>
    <div class="home__content-wrapper">
      <h4 class="home__greeting">Hello, World! I'm</h4>
      <h1 class="home__specialization">
        <span class="home__specialization-left">Frontend</span>
        <span class="home__specialization-right">Developer</span>
      </h1>
      <h2 class="home__based">based in Russia</h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeaderLayout from "@/components/layouts/HeaderLayout.vue";
</script>

<style scoped>
#home {
  height: 100vh;
}

.header-wrapper {
  z-index: 1;
  position: relative;
}

.home__content-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 0;
}

.home__specialization {
  display: flex;
  flex-direction: column;
  gap: calc(var(--size-index) * 0.1);
  font-size: calc(var(--size-index) * 7);
  text-transform: uppercase;
}

.home__specialization-right {
  color: var(--color-text-secondary);
}

.home__greeting,
.home__based {
  font-size: calc(var(--size-index) * 1);
  font-weight: 500;
}
</style>
