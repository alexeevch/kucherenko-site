<script setup lang="ts"></script>

<template>
  <header id="header">
    <div class="header__logo logo">
      <img src="@/assets/logo.svg" alt="logo" class="logo__img" />
      <h4 class="logo__text">Mikhail Kucherenko</h4>
    </div>

    <nav class="header__nav nav">
      <div class="nav__item">
        <router-link to="/about">about</router-link>
      </div>
      <div class="nav__item">
        <router-link to="/skills">skills</router-link>
      </div>
      <div class="nav__item">
        <router-link to="/contacts">contacts</router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 2rem;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: calc(var(--size-index) * 0.8);
}

.logo__img {
  height: calc(var(--size-index) * 1.4);
}

.logo__text {
  font-size: calc(var(--size-index) * 1);
}

.nav {
  display: flex;
  gap: calc(var(--size-index) * 2.2);
  font-weight: 500;
}
</style>
